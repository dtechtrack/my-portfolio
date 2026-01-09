// src/App.js
import React from "react";
import { ThemeProvider } from "./ThemeContext";

import Header from "./Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
 


import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
