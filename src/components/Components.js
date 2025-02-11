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
    height: auto;
  }
`;

export const Heading = styled.h1`
  font-size: 5rem;
  margin-bottom: 5px;
  letter-spacing: 2px;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  margin-top: 0px;
  font-size: 1.5rem;
  font-weight: 300;
  font-family: "Space Mono", serif;
  letter-spacing: 4px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SectionTitle = styled.p`
  font-size: 2rem;
  font-weight: 300;
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
  height: 50px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    height: auto;
  }
`;
