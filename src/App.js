/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import {
  Container,
  Header,
  Logo,
  Nav,
  NavItem,
  Hero,
  Title,
  Name,
  Subtitle,
  HeroImage,
} from "./components/components";

const App = () => {
  return (
    <Container>
      <Header>
        <Logo>saifalim_</Logo>
        <Nav>
          <NavItem>// home</NavItem>
          <NavItem>// experience</NavItem>
          <NavItem>// projects</NavItem>
          <NavItem>// contact</NavItem>
        </Nav>
      </Header>
      <Hero>
        <Title>
          <Name>
            SAIF UL ALIM <br /> AHMED
          </Name>
          <Subtitle>Software Engineer, App Developer.</Subtitle>
        </Title>
        <HeroImage>
          <img src="./assets/alim-the-thinker_dark-mode.png" alt="Profile" />
        </HeroImage>
      </Hero>
    </Container>
  );
};

export default App;
