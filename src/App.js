/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./styles.css";
import Home from "./pages/Home";
import Experience from "./pages/experience/Experience";
import { Container } from "./components/Components";
import HeaderSection from "./components/Header";

const App = () => {
  return (
    <Container>
      <div id="home" />
      <div id="header">
        <HeaderSection />
      </div>
      <div id="content">
        <Home />
        <div id="experience">
          <Experience />
        </div>
        <div id="projects" style={{ height: "100vh", backgroundColor: "blue" }}>
          <h2>Projects Section</h2>
        </div>
        <div id="contact" style={{ height: "100vh", backgroundColor: "red" }}>
          <h2>Contact Section</h2>
        </div>
      </div>
    </Container>
  );
};

export default App;
