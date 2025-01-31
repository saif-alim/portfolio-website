/* eslint-disable react/jsx-no-comment-textnodes */
import styled from "styled-components";
import { Logo } from "./Logo";
import scrollToSection from "../utils/Utils";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

const NavItem = styled.span`
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-family: "Space Mono", serif;
  &:hover {
    color: #a244d5;
  }
`;

const HeaderSection = () => {
  return (
    <Header>
      <Logo />
      <Nav>
        <NavItem onClick={() => scrollToSection("home")}>// home</NavItem>
        <NavItem onClick={() => scrollToSection("experience")}>
          // experience
        </NavItem>
        <NavItem onClick={() => scrollToSection("projects")}>
          // projects
        </NavItem>
        <NavItem onClick={() => scrollToSection("contact")}>// contact</NavItem>
      </Nav>
    </Header>
  );
};

export default HeaderSection;
