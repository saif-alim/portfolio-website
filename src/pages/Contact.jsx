import React from "react";
import styled from "styled-components";
import {
  PrimaryTextStyle,
  Section,
  SectionTitle,
} from "../components/Components";
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
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

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
        <input type="hidden" {...register("subject")} />
        <Label>
          Name
          <Input type="text" {...register("name")} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Label>

        <Label>
          Email
          <Input type="text" {...register("email")} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Label>

        <Label>
          Message
          <TextArea type="message" {...register("message")} />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </Label>

        <SubmitButton className="form-submit" type="submit">
          Submit
        </SubmitButton>
      </FormContainer>

      {isDialogOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>Thank You!</ModalTitle>
            <ModalMessage>
              Your message has been sent successfully.
            </ModalMessage>
            <CloseButton onClick={() => setIsDialogOpen(false)}>
              Close
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ContactSection>
  );
};

// Styled components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  border: var(--border-style) var(--color-foreground);
  background: var(--color-background);
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  border: var(--border-style) var(--color-foreground);
  background: var(--color-background);
  color: var(--color-foreground);
  margin-top: 15px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: var(--color-accent);
  }
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
`;

const ModalTitle = styled(PrimaryTextStyle)`
  margin: 0;
  padding-bottom: 5px;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

const ModalMessage = styled.p`
  margin-top: 0px;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  max-width: 200px;
  min-height: 40px;
  background: var(--color-background);
  border: var(--border-style) var(--grey-dark-theme);
  border-radius: 10px;
  color: var(--color-foreground);
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
  padding: 0% 3%;
`;

const FormContainer = styled.form`
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
  max-width: 95%;
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
  max-width: 95%;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border-color: var(--color-accent);
  }
  @media (max-width: 768px) {
    height: 150px;
  }
`;

export default ContactForm;
