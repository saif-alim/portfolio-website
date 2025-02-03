/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./styles.css";
import Home from "./pages/Home";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Container } from "./components/Components";
import HeaderSection from "./components/Header";
import FooterSection from "./components/Footer";

const App = () => {
  return (
    <Container>
      <HeaderSection />
      <div id="home-display" style={{ height: "100vh" }}>
        {/* dummy div to scroll to */}
        <div id="home" />
        {/* dummy div for spacing */}
        <div id="dummy-header" style={{ height: "110px" }} />
        <Home />
      </div>
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
          "flex-direction": "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <Contact />
        <FooterSection />
      </div>
    </Container>
  );
};

export default App;
