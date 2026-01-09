// src/Header.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./Header.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="logo">Dhruvi</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
};

export default Header;
