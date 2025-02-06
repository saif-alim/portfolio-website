/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  HomeSection,
  Title,
  Heading,
  Subtitle,
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
      <ThemedImage />
    </HomeSection>
  );
};

export default Home;

const ThemedImage = () => {
  const [isLightMode, toggle] = useState(
    document.documentElement.classList.contains("light"),
  );

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      toggle(document.documentElement.classList.contains("light"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <HeroImage>
      <img
        src={
          isLightMode
            ? "/assets/alim-the-thinker_light-mode.png"
            : "/assets/alim-the-thinker_dark-mode.png"
        }
        alt="Avatar"
      />
    </HeroImage>
  );
};

const HeroImage = styled.div`
  img {
    max-width: 600px;
  }
`;
