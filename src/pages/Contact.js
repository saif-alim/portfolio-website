import React, { useState } from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "../components/Components";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tags: ["Pants", "Green", "Sage", "Women"],
    folder: "Fashion",
  });

  return (
    <ContactSection>
      <SectionTitle>Contact</SectionTitle>
      <FormContainer>
        <Label>
          Name
          <Input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Label>

        <Label>
          Email
          <Input
            type="email"
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          />
        </Label>

        <Label>
          Message
          <TextArea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </Label>
      </FormContainer>
    </ContactSection>
  );
};

const ContactSection = styled(Section)`
  min-height: auto;
  display: flex;
  flex-direction: column;
  padding: 0% 3%;
`;

const FormContainer = styled.div`
  width: 100vw;
  max-width: 1000px;
  padding: 20px;
  align-self: center;
  border-radius: 10px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  padding: 5px;
  color: rgb(172, 172, 172);
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
`;

const Input = styled.input`
  background: #0d0d0d;
  height: 40px;
  border: 1px solid #fff;
  color: white;
  padding: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: #9a19e0;
  }
`;

const TextArea = styled.textarea`
  background: #0d0d0d;
  border: 1px solid #fff;
  font-family: "Space Mono", serif;
  color: white;
  padding: 10px;
  font-size: 1rem;
  height: 300px;
  resize: none;
  outline: none;
  &:focus {
    border-color: #9a19e0;
  }
`;

export default ContactForm;
