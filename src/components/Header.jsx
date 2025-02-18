/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import scrollToSection from "../utils/Utils";
import { ToggleTheme } from "../utils/ToggleTheme";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

const HeaderSection = () => {
  // const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const systemIsLight = useMediaQuery({
    query: "(prefers-color-scheme: light)",
  });

  useEffect(() => {
    setIsLightMode(systemIsLight);
  }, [systemIsLight]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    isLightMode
      ? htmlElement.classList.add("light")
      : htmlElement.classList.remove("light");
  }, [isLightMode]);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      if (scrollDifference > 50) {
        if (lastScrollY < currentScrollY) {
          setTop(-150); // hide
        } else {
          setTop(0); // show
        }
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Header style={{ top: `${top}px`, transition: "top 0.5s" }}>
      <LogoContainer onClick={() => scrollToSection("home")}>
        <Logo />
      </LogoContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Nav>
          <NavItem onClick={() => scrollToSection("home")}>// home</NavItem>
          <NavItem onClick={() => scrollToSection("experience")}>
            // experience
          </NavItem>
          <NavItem onClick={() => scrollToSection("projects")}>
            // projects
          </NavItem>
          <NavItem onClick={() => scrollToSection("contact")}>
            // contact
          </NavItem>
        </Nav>
        <AnimatePresence>
          {isNavOpen && (
            <MobileNav
              initial={{ x: "100%" }} // Start off-screen
              animate={{ x: 0 }} // Slide in
              exit={{ x: "100%" }} // Slide out when unmounting
              transition={{ type: "tween", duration: 0.3 }} // Smooth transition
            >
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
            </MobileNav>
          )}
        </AnimatePresence>
        <ToggleThemeContainer>
          <ToggleTheme
            isLightMode={isLightMode}
            toggleTheme={() => setIsLightMode(!isLightMode)}
          />
        </ToggleThemeContainer>
        <MobileMenuButton
          isNavOpen={isNavOpen}
          animate={{ rotate: isNavOpen ? 0 : 72 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          //
        </MobileMenuButton>
      </div>
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
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
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

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-foreground);
  font-size: 1.6rem;
  font-family: "Space Mono", serif;
  position: ${({ isNavOpen }) => (isNavOpen ? "fixed" : "relative")};
  top: ${({ isNavOpen }) => (isNavOpen ? "10px" : "auto")};
  right: ${({ isNavOpen }) => (isNavOpen ? "15px" : "auto")};
  z-index: 1002;

  @media (max-width: 992px) {
    display: block;
  }
`;

const MobileNav = styled(motion.div)`
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
  padding-top: 70px;
  z-index: 1001;
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
  padding-right: 10px;
`;

const ToggleThemeContainer = styled.div`
  padding-left: 25px;

  @media (max-width: 992px) {
    padding-left: 0;
    padding-right: 20px;
    padding-top: 5px;
  }
`;
