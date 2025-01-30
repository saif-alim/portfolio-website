/* eslint-disable react/jsx-no-comment-textnodes */
import { Logo, Nav, NavItem, Header } from "./Components";
import scrollToSection from "../utils/Utils";

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
