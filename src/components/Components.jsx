import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
  padding: 0 9%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeDisplay = styled.div`
  height: 100vh;
  @media (max-width: 768px) {
  }
`;

export const PrimaryTextStyle = styled.p`
  font-family: "Quicksand", sans-serif;
  letter-spacing: 2px;
  font-weight: 600;
`;

export const SecondaryTextStyle = styled.p`
  font-weight: 300;
  font-family: "Space Mono", serif;
  letter-spacing: 3px;
`;

export const SectionTitle = styled(SecondaryTextStyle)`
  font-size: 2rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    height: auto;
    margin-bottom: 5%;
  }
`;
