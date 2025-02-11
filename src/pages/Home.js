/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styled from "styled-components";
import { Heading, Subtitle, Section } from "../components/Components";

const Home = () => {
  return (
    <HomeSection>
      <Title>
        <Heading>
          SAIF UL ALIM <br /> AHMED
        </Heading>
        <Subtitle>
          Software Engineer, <br /> App Developer.
        </Subtitle>
      </Title>
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

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 80vh;
    padding: 10px 20px;
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

const Title = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    flex: 0;
  }
`;
