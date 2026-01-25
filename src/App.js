// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import CaseStudy1 from "./Components/CaseStudy1";
import CaseStudy2 from "./Components/CaseStudy2";
import ScrollToTop from "./Components/ScrollToTop";
import CaseStudyLayout from "./Components/CaseStudyLayout";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Scroll reset on route change */}
        <ScrollToTop />

        <Header />

        <Routes>
  {/* Home / Portfolio */}
  <Route
    path="/"
    element={
      <>
        <Home />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </>
    }
  />

  {/* Case Studies Layout */}
  <Route element={<CaseStudyLayout />}>
    <Route
      path="/case-study/smart-rfid-trolley"
      element={<CaseStudy1 />}
    />
    <Route
      path="/case-study/shoes-app"
      element={<CaseStudy2 />}
    />
  </Route>
</Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
