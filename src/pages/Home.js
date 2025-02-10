/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styled from "styled-components";
import { Heading, Subtitle, Section } from "../components/Components";

const Home = () => {
  return (
    <HomeSection style={{ height: "auto" }}>
      <Title>
        <Heading>
          SAIF UL ALIM <br /> AHMED
        </Heading>
        <Subtitle>
          Software Engineer, <br /> App Developer.
        </Subtitle>
      </Title>
      <div>
        <HeroImage src="/assets/alim-the-thinker.png" />
      </div>
    </HomeSection>
  );
};

export default Home;

export const HomeSection = styled(Section)`
  padding-top: 125px;
  padding-left: 8vw;
  padding-right: 8vw;
  padding-bottom: 125px;
  height: auto;
`;

const HeroImage = styled.img`
  height: 60vh;
  min-height: 400px;
  max-height: 100%;
`;

const Title = styled.div`
  flex: 1;
`;
