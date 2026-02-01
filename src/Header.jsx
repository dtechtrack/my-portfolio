// src/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Dhruvi</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
