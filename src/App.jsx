/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Container, HomeDisplay } from "./components/Components";
import HeaderSection from "./components/Header";
import FooterSection from "./components/Footer";
import { ScreenOverlay } from "./utils/Utils";

const App = () => {
  return (
    <Container>
      <HeaderSection />
      <HomeDisplay>
        {/* dummy div to scroll to */}
        <div id="home" />
        <Home />
      </HomeDisplay>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div
        id="contact"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <Contact />
        <FooterSection />
      </div>
      <ScreenOverlay id="screen-overlay" />
    </Container>
  );
};

export default App;
