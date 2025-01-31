import styled from "styled-components";

const LogoContainer = styled.div`
  display: inline-block;
  position: relative;
  align-self: flex-start;
`;

const LogoTextContainer = styled.div`
  text-align: center;
`;

export const LogoText = styled.h1`
  color: #ffffff;
  font-family: "Outfit", sans-serif;
  letter-spacing: 7px;
  font-size: 2.5rem;
  padding-left: 4px;
  margin: 0;
  position: relative;
  z-index: 1;
  display: inline-block;
`;

const LogoHighlight = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35%;
  background-color: #9a19e0;
  z-index: 0;
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
