import styled from "styled-components";

const LogoContainer = styled.div`
  display: inline-block;
  position: relative;
  align-self: flex-start;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const LogoTextContainer = styled.div`
  text-align: center;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.001);
  }
`;

export const LogoText = styled.h1`
  font-family: "Outfit", sans-serif;
  letter-spacing: 7px;
  font-size: 2.5rem;
  padding-left: 4px;
  margin: 0;
  position: relative;
  z-index: 1;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LogoHighlight = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35%;
  background-color: var(--color-accent);
  z-index: 0;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoHighlight />
      <LogoTextContainer>
        <LogoText>saifalim_</LogoText>
      </LogoTextContainer>
    </LogoContainer>
  );
};

export default Logo;
