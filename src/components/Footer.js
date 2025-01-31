/* eslint-disable react/jsx-no-comment-textnodes */
import { Logo } from "./Logo";
import styled from "styled-components";
import { Subtitle } from "./Components";

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100vw;
  padding-top: 20px;
  padding-bottom: 100px;
  padding-left: 10px;
  padding-right: 10px;
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

const Icon = styled.img`
  width: 30px;
`;

const Email = styled(Subtitle)`
  font-size: 1.5rem;
`;

const FooterSection = () => {
  return (
    <Footer>
      <Logo />
      <SocialsSection>
        <Email>saifulalim@dev.com</Email>
        <Icons>
          <Icon src="/assets/linkedin-icon_dark-mode.png" alt="linkedin" />
          <Icon src="/assets/github-icon_dark-mode.png" alt="github" />
          <Icon src="/assets/instagram-icon_dark-mode.png" alt="instagram" />
        </Icons>
      </SocialsSection>
    </Footer>
  );
};

export default FooterSection;
