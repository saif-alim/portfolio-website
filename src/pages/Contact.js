import React from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "../components/Components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useWeb3Forms from "@web3forms/react";

// Define Zod validation schema
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message cannot be empty"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Initialize Web3Forms hook
  const { submit } = useWeb3Forms({
    access_key: "65e50a94-6074-423e-8f0c-f895ba59b5a9",
    onSuccess: (response) => {
      alert("Your message has been sent successfully!");
      reset(); // Clear the form after successful submission
    },
    onError: (error) => {
      alert("Something went wrong. Please try again later.");
      console.error(error);
    },
  });

  const onSubmit = (data) => {
    submit(data);
  };

  return (
    <ContactSection>
      <SectionTitle>Contact</SectionTitle>
      <FormContainer className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Name
          <Input type="text" {...register("name")} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Label>

        <Label>
          Email
          <Input type="email" {...register("email")} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Label>

        <Label>
          Message
          <TextArea {...register("message")} />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </Label>

        <SubmitButton className="form-submit" type="submit">
          Submit
        </SubmitButton>
      </FormContainer>
    </ContactSection>
  );
};

// Styled components
const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  max-width: 200px;
  min-height: 40px;
  background: var(--color-background);
  border: var(--border-style) var(--color-foreground);
  color: var(--color-foreground);
  padding: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: #9a19e0;
  }
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
`;

const ContactSection = styled(Section)`
  min-height: auto;
  display: flex;
  flex-direction: column;
  padding: 0% 3%;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 1000px;
  align-items: center;
  padding: 20px;
  align-self: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  padding: 5px;
  width: 100%;
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
  background: var(--color-background);
  height: 40px;
  width: 100%;
  border: var(--border-style) var(--color-foreground);
  color: var(--color-foreground);
  padding: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: #9a19e0;
  }
`;

const TextArea = styled.textarea`
  background: var(--color-background);
  border: var(--border-style) var(--color-foreground);
  color: var(--color-foreground);
  font-family: "Space Mono", serif;
  padding: 10px;
  font-size: 1rem;
  height: 300px;
  resize: none;
  outline: none;
  width: 100%;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: #9a19e0;
  }
`;

export default ContactForm;
