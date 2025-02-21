/* eslint-disable react/jsx-no-comment-textnodes */
import InstagramIcon from "../assets/instagram-icon.svg?react";
import LinkedinIcon from "../assets/linkedin-icon.svg?react";
import GithubIcon from "../assets/github-icon.svg?react";
import { Logo } from "./Logo";
import styled from "styled-components";
import scrollToSection from "../utils/Utils";

const FooterSection = () => {
  return (
    <Footer>
      <LogoContainer onClick={() => scrollToSection("home")}>
        <Logo />
      </LogoContainer>
      <SocialsSection>
        <Email href="mailto:saifalimdev@gmail.com">saifalimdev@gmail.com</Email>
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
          <a href="https://www.instagram.com/saifalim_/">
            <Icon>
              <InstagramIcon />
            </Icon>
          </a>
        </Icons>
      </SocialsSection>
    </Footer>
  );
};

export default FooterSection;

const LogoContainer = styled.div`
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100vw;
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 40px;

  @media (max-width: 768px) {
    padding-bottom: 40px;
    justify-content: center;
  }
`;

const SocialsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Icon = styled.div`
  box-sizing: border-box;

  svg {
    fill: var(--color-foreground);
    transition: transform 0.2s ease-in-out;
    transition: fill 0.3s ease-in-out;
  }

  &:hover svg {
    fill: var(--color-accent);
    transform: scale(1.1);
  }
`;

const Email = styled.a`
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 300;
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
  font-size: 1.5rem;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: var(--color-accent);
    transform: scale(1.02);
  }
  transition: color 0.1s ease-in-out;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
