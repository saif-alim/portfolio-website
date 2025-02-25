import styled from "styled-components";
import { PrimaryTextStyle } from "../components/Components";

const FormSubmittedModal = ({
  onClose,
  modalTitle,
  modalMessage,
  maxWidth,
  width,
}) => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  });
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: maxWidth, width: width }}
      >
        <ModalTitle>{modalTitle}</ModalTitle>
        <ModalMessage>{modalMessage}</ModalMessage>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FormSubmittedModal;

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  background-image: var(--background-gradient);
  border-radius: 15px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 30px;
  @media (max-width: 768px) {
    max-width: 95vw;
  }
`;

const CloseButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  background: var(--background-gradient);
  border: var(--border-style) var(--grey-dark-theme);
  border-radius: 10px;
  color: var(--color-foreground);
  transition: border-color 0.3s ease-in-out;
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
  letter-spacing: 2px;
`;
