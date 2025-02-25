import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "../components/Components";
import FormSubmittedModal from "../utils/ModalDialog";
import { useForm, useWatch } from "react-hook-form";
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const senderName = useWatch({
    control: control,
    name: "name",
    defaultValue: "Someone",
  });

  // Initialize Web3Forms hook
  const { submit } = useWeb3Forms({
    access_key: "65e50a94-6074-423e-8f0c-f895ba59b5a9",
    settings: {
      from_name: "Portfolio Mailer",
      subject: `Message from ${senderName}`,
    },
    onSuccess: (response) => {
      setIsDialogOpen(true);
      reset();
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
        <input type="hidden" {...register("subject")} />
        <Label>
          Name
          <Input type="text" autocomplete="name" {...register("name")} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Label>

        <Label>
          Email
          <Input type="text" autocomplete="email" {...register("email")} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Label>

        <Label>
          Message
          <TextArea
            type="message"
            autocomplete="off"
            {...register("message")}
          />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </Label>

        <SubmitButton className="form-submit" type="submit">
          Submit
        </SubmitButton>
      </FormContainer>

      {isDialogOpen && (
        <FormSubmittedModal
          onClose={() => setIsDialogOpen(false)}
          modalTitle="Thank You!"
          modalMessage="Your message has been sent successfully."
          maxWidth="300px"
        />
      )}
    </ContactSection>
  );
};

export default ContactForm;

// Styled components
const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  max-width: 200px;
  min-height: 40px;
  background: var(--background-gradient);
  border: var(--border-style) var(--grey-dark-theme);
  border-radius: 10px;
  color: var(--color-foreground);
  transition: color 0.3s ease-in-out;
  padding: 15px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: var(--color-accent);
  }
  &:focus {
    border-color: var(--color-accent);
  }
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
`;

const ContactSection = styled(Section)`
  min-height: auto;
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.form`
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  align-items: center;
  padding: 20px;
  padding-bottom: 40px;
  align-self: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
`;

const Label = styled.label`
  padding: 5px;
  color: var(--grey-dark-theme);
  width: 100%;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Input = styled.input`
  background: var(--color-background);
  height: 40px;
  border: var(--border-style) var(--grey-dark-theme);
  border-radius: 15px;
  color: var(--color-foreground);
  padding: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: var(--color-accent);
  }
  @media (max-width: 768px) {
    height: 30px;
  }
`;

const TextArea = styled.textarea`
  background: var(--color-background);
  border: var(--border-style) var(--grey-dark-theme);
  border-radius: 15px;
  color: var(--color-foreground);
  font-family: "Space Mono", serif;
  padding: 10px;
  font-size: 1rem;
  height: 300px;
  resize: none;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: var(--color-accent);
  }
  @media (max-width: 768px) {
    height: 150px;
  }
`;
