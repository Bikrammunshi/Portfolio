import React, { useState } from "react";
import styled from "@emotion/styled";
import emailjs from "emailjs-com";

// Styled components using @emotion/styled
const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(18,28,43, 255);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #72a724;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #ffffff
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #b9c1c6;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
    color: #fff
  }
`;

function MailingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init('RjROWqELSO7agX14z'); // Initialize with Public Key

    emailjs.send(
      'service_zj8ql4j',
      'template_2anl2ju',
      formData,
      'RjROWqELSO7agX14z' // Use Public Key for sending
    )
    .then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        alert("Thank you for your message!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error("Failed to send email. Error:", error.text);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <FormContainer>
      <FormTitle>Contact Me</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
}

export default MailingForm;
