/* eslint-disable react/jsx-no-comment-textnodes */
import { ReactComponent as InstagramIcon } from "../assets/instagram-icon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../assets/github-icon.svg";
import { Logo } from "./Logo";
import styled from "styled-components";
import scrollToSection from "../utils/Utils";

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100vw;
  padding-top: 20px;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 40px;
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
  fill: var(--color-foreground);

  svg {
    transition: fill 0.1s ease-in-out;
    transition: transform 0.2s ease-in-out;
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
`;

const FooterSection = () => {
  return (
    <Footer>
      <div
        onClick={() => scrollToSection("home")}
        style={{ cursor: "pointer" }}
      >
        <Logo />
      </div>
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
