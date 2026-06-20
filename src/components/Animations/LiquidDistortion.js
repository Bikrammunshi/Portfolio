import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const vertexShaderSource = `
  attribute vec2 a_position;
  attribute vec2 a_texCoord;
  varying vec2 v_texCoord;
  void main() {
    // Flip Y for WebGL texture coordinate system
    gl_Position = vec4(a_position * vec2(1.0, -1.0), 0.0, 1.0);
    v_texCoord = a_texCoord;
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform sampler2D u_image;
  uniform vec2 u_mouse;
  uniform float u_time;
  uniform float u_hoverState;
  varying vec2 v_texCoord;
  
  void main() {
    vec2 uv = v_texCoord;
    
    float dist = distance(uv, u_mouse);
    
    // Liquid ripple effect based on hover state and time
    float ripple = sin(dist * 30.0 - u_time * 6.0) * 0.03 * u_hoverState;
    uv += (uv - u_mouse) * ripple * smoothstep(0.4, 0.0, dist);
    
    // Sample texture
    vec4 color = texture2D(u_image, uv);
    
    // Chromatic aberration / glitch on hover
    vec4 glitchR = texture2D(u_image, uv + vec2(ripple * 1.5, 0.0));
    vec4 glitchB = texture2D(u_image, uv - vec2(0.0, ripple * 1.5));
    
    vec4 finalColor = vec4(
      mix(color.r, glitchR.r, u_hoverState),
      color.g,
      mix(color.b, glitchB.b, u_hoverState),
      color.a
    );
    
    gl_FragColor = finalColor;
  }
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function LiquidDistortion({ imageUrl, className = "" }) {
  const canvasRef = useRef(null);
  const hoverStateRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Load image
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imageUrl;

    let program, positionBuffer, texCoordBuffer, texture;
    let animationFrameId;

    image.onload = () => {
      setLoaded(true);
      // Setup WebGL
      const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

      program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.useProgram(program);

      // Setup Geometry (Quad)
      const positions = new Float32Array([
        -1, -1, 1, -1, -1, 1,
        -1, 1, 1, -1, 1, 1,
      ]);
      positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
      const positionLocation = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Setup Texture Coordinates
      const texCoords = new Float32Array([
        0, 1, 1, 1, 0, 0,
        0, 0, 1, 1, 1, 0,
      ]);
      texCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
      const texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
      gl.enableVertexAttribArray(texCoordLocation);
      gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

      // Setup Texture
      texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      const timeLocation = gl.getUniformLocation(program, "u_time");
      const mouseLocation = gl.getUniformLocation(program, "u_mouse");
      const hoverLocation = gl.getUniformLocation(program, "u_hoverState");

      const render = (time) => {
        // Resize canvas if needed
        if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
          canvas.width = canvas.clientWidth;
          canvas.height = canvas.clientHeight;
          gl.viewport(0, 0, canvas.width, canvas.height);
        }

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniform1f(timeLocation, time * 0.001);
        gl.uniform2f(mouseLocation, mouseRef.current.x, mouseRef.current.y);
        gl.uniform1f(hoverLocation, hoverStateRef.current);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
        animationFrameId = requestAnimationFrame(render);
      };

      requestAnimationFrame(render);
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (gl) {
        gl.deleteProgram(program);
        gl.deleteBuffer(positionBuffer);
        gl.deleteBuffer(texCoordBuffer);
        gl.deleteTexture(texture);
      }
    };
  }, [imageUrl]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseRef.current = { x, y };
  };

  const handleMouseEnter = () => {
    gsap.to(hoverStateRef, { current: 1, duration: 0.8, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(hoverStateRef, { current: 0, duration: 1.2, ease: "power2.out" });
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "100%",
        height: "100%",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease"
      }}
    />
  );
}
