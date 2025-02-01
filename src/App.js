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
      <div id="home-display" style={{ height: "100vh" }}>
        <div id="home" />
        <div id="header">
          <HeaderSection />
        </div>
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
