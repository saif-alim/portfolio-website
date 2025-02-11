/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import scrollToSection from "../utils/Utils";
import { ToggleTheme } from "../utils/ToggleTheme";

const HeaderSection = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // show navbar
      } else {
        setTop(-155); // hide navbar
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
      <LogoContainer onClick={() => scrollToSection("home")}>
        <Logo />
      </LogoContainer>
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

      <MobileMenuButton onClick={() => setIsNavOpen(!isNavOpen)}>
        //
      </MobileMenuButton>

      {isNavOpen && (
        <MobileNav>
          <CloseButton onClick={() => setIsNavOpen(false)}>//</CloseButton>
          <MobileNavItem
            onClick={() => {
              scrollToSection("home");
              setIsNavOpen(false);
            }}
          >
            // home
          </MobileNavItem>
          <MobileNavItem
            onClick={() => {
              scrollToSection("experience");
              setIsNavOpen(false);
            }}
          >
            // experience
          </MobileNavItem>
          <MobileNavItem
            onClick={() => {
              scrollToSection("projects");
              setIsNavOpen(false);
            }}
          >
            // projects
          </MobileNavItem>
          <MobileNavItem
            onClick={() => {
              scrollToSection("contact");
              setIsNavOpen(false);
            }}
          >
            // contact
          </MobileNavItem>
          <ToggleTheme />
        </MobileNav>
      )}
    </Header>
  );
};

export default HeaderSection;

const Header = styled.header`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  background: var(--color-background);
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 20px 40px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Hide desktop nav on mobile */
  }
`;

const NavItem = styled.span`
  cursor: pointer;
  font-family: "Space Mono", serif;
  transition:
    color 0.1s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    color: var(--color-accent);
    transform: scale(1.05);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-foreground);
  font-size: 1.6rem;
  font-family: "Space Mono", serif;
  transform: rotate(72deg);

  svg {
    width: 35px;
    height: 35px;
    transition: transform 0.2s ease-in-out;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block; /* Show menu button on mobile */
  }
`;

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background: var(--color-background);
  box-shadow: -1px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  z-index: 1001;
  transition: transform 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-foreground);
  font-size: 1.6rem;
  font-family: "Space Mono", serif;
  // transform: rotate(72deg);
`;

const MobileNavItem = styled.span`
  cursor: pointer;
  font-family: "Space Mono", serif;
  transition:
    color 0.1s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    color: var(--color-accent);
    transform: scale(1.05);
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
`;
