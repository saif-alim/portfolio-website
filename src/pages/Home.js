/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styled from "styled-components";
import { Title, Subtitle, Section } from "../components/Components";

const Home = () => {
  return (
    <HomeSection>
      <TitleContainer>
        <Title>
          SAIF UL ALIM <br /> AHMED
        </Title>
        <Subtitle>
          Software Engineer, <br /> App Developer.
        </Subtitle>
      </TitleContainer>
      <div id="image-container">
        <HeroImage src="/assets/alim-the-thinker.png" />
      </div>
    </HomeSection>
  );
};

export default Home;

export const HomeSection = styled(Section)`
  padding: 125px 8vw;
  height: auto;
  padding-top: 110px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 20px;
    padding-top: 90px;
    align-items: center;
  }
`;

const HeroImage = styled.img`
  height: 60vh;
  min-height: 400px;
  max-height: 100%;

  @media (max-width: 768px) {
    min-height: auto;
    height: auto;
    max-height: auto;
    width: 80vw;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    flex: 0;
    width: 100%;
    padding-bottom: 20px;
  }
`;
