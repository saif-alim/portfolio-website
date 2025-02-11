/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import scrollToSection from "../utils/Utils";
import { ToggleTheme } from "../utils/ToggleTheme";

const Header = styled.header`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  background: var(--color-background);
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 20px 40px;
  padding-top: 40px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const NavItem = styled.span`
  text-decoration: none;
  cursor: pointer;
  font-family: "Space Mono", serif;
  transition: color 0.1s ease-in-out;
  transition: transform 0.2s ease-in-out;
  &:hover {
    color: var(--color-accent);
    transform: scale(1.05);
  }
`;

const HeaderSection = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // show navbar
      } else {
        setTop(-110); // hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);
  return (
    <Header style={{ top: `${top}px`, transition: "top 0.5s" }}>
      <div
        onClick={() => scrollToSection("home")}
        style={{ cursor: "pointer" }}
      >
        <Logo />
      </div>
      <Nav>
        <NavItem onClick={() => scrollToSection("home")}>// home</NavItem>
        <NavItem onClick={() => scrollToSection("experience")}>
          // experience
        </NavItem>
        <NavItem onClick={() => scrollToSection("projects")}>
          // projects
        </NavItem>
        <NavItem onClick={() => scrollToSection("contact")}>// contact</NavItem>
        <ToggleTheme />
      </Nav>
    </Header>
  );
};

export default HeaderSection;
