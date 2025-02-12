import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  padding: 0 3%;

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

export const Title = styled(PrimaryTextStyle)`
  font-size: 5rem;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SecondaryTextStyle = styled.p`
  font-weight: 300;
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
`;

export const Subtitle = styled(SecondaryTextStyle)`
  margin-top: 0px;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SectionTitle = styled(SecondaryTextStyle)`
  font-size: 2rem;
  height: 50px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    height: auto;
  }
`;
