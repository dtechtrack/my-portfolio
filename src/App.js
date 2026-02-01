// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

// Component to conditionally show header
function ConditionalHeader() {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes('/case-study/');
  
  if (isCaseStudy) {
    return null; // Hide header on case study pages
  }
  
  return <Header />;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Scroll reset on route change */}
        <ScrollToTop />

        <ConditionalHeader />

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
