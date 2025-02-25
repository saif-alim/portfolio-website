/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import styled from "styled-components";
import InstagramIcon from "../assets/instagram-icon.svg?react";
import LinkedinIcon from "../assets/linkedin-icon.svg?react";
import GithubIcon from "../assets/github-icon.svg?react";
import LocationIcon from "../assets/location-icon.svg?react";
import {
  PrimaryTextStyle,
  SecondaryTextStyle,
  Section,
} from "../components/Components";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HomeSection>
      <div id="image-container">
        <HeroImage src="/assets/alim-the-thinker.png" />
      </div>
      <TitleContainer>
        <Title>
          SAIF UL ALIM <br /> AHMED
        </Title>
        <Subtitle>
          Software Engineer, <br /> App Developer.
        </Subtitle>
        <Icons>
          <a href="https://www.linkedin.com/in/saif-alim">
            <Icon>
              <LinkedinIcon />
            </Icon>
          </a>
          <a href="https://github.com/saif-alim/">
            <Icon>
              <GithubIcon />
            </Icon>
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2px",
              alignItems: "center",
            }}
          >
            <Icon
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <LocationIcon />
            </Icon>
            <div style={{ overflow: "hidden" }}>
              <LocationText style={{ left: isHovered ? "0" : "-100%" }}>
                London,
                <br />
                United Kingdom
              </LocationText>
            </div>
          </div>
        </Icons>
      </TitleContainer>
    </HomeSection>
  );
};

export default Home;

export const HomeSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  height: auto;
  padding-top: 110px;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 20px;
    align-items: center;
  }
`;

const HeroImage = styled.img`
  width: 40vw;
  max-width: 400px;
  margin: 0;

  @media (max-width: 768px) {
    width: 80vw;
    max-width: 300px;
    padding-bottom: 20px;
  }
`;

const TitleContainer = styled.div`
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

const Title = styled(PrimaryTextStyle)`
  font-size: 4rem;
  margin: 0;
  line-height: 1;
  letter-spacing: 10px;
  @media (max-width: 992px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(SecondaryTextStyle)`
  background-image: var(--grey-gradient);
  color: transparent;
  background-clip: text;
  margin: 0;
  font-size: 2.2rem;
  line-height: 1.1;
  @media (max-width: 992px) {
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const LocationText = styled(SecondaryTextStyle)`
  position: relative;
  background-image: var(--grey-gradient);
  color: transparent;
  background-clip: text;
  transition: left 0.3s ease-in-out;
  margin: 0;
  font-size: 1rem;
  line-height: 1.1;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 40px;
  padding-top: 10px;
  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const Icon = styled.div`
  box-sizing: border-box;

  svg {
    fill: var(--color-foreground);
    width: 40px;
    transition: transform 0.2s ease-in-out;
    transition: fill 0.3s ease-in-out;
    @media (max-width: 768px) {
      width: 30px;
    }
  }

  &:hover svg {
    fill: var(--color-accent);
    transform: scale(1.1);
  }
`;
