import React from "react";

export default function FooterSection() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container-narrow">
        <p>
          Designed and Developed by <span className="accent">Bikramaditya Munshi</span> <br />
          Copyright © {year} BM
        </p>
      </div>
    </footer>
  );
}
