/* eslint-disable react/jsx-no-comment-textnodes */
import InstagramIcon from "../assets/instagram-icon.svg?react";
import LinkedinIcon from "../assets/linkedin-icon.svg?react";
import GithubIcon from "../assets/github-icon.svg?react";
import { Logo } from "./Logo";
import styled from "styled-components";
import scrollToSection from "../utils/Utils";
import { SecondaryTextStyle } from "./Components.jsx";

const FooterSection = () => {
  return (
    <Footer>
      <FooterMainItems>
        <LogoContainer onClick={() => scrollToSection("home")}>
          <Logo />
        </LogoContainer>
        <SocialsSection>
          <Email href="mailto:saifalimdev@gmail.com">
            saifalimdev@gmail.com
          </Email>
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
      </FooterMainItems>
      <CreditsText>Created using React.js with styled-components</CreditsText>
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
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  align-items: center;
`;

const FooterMainItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CreditsText = styled(SecondaryTextStyle)`
  color: var(--grey-dark-theme);
  font-size: 0.9rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.7rem;
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
