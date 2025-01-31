/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import {
  HomeSection,
  Title,
  Heading,
  Subtitle,
  HeroImage,
} from "../components/Components";

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
      <HeroImage>
        <img src="/assets/alim-the-thinker_dark-mode.png" alt="Avatar" />
      </HeroImage>
    </HomeSection>
  );
};

export default Home;
