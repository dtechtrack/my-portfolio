import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
        <div 
          className="cursor-glow" 
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        ></div>
      </div>

      <div className="hero-container">
        {/* Left Side - Main Content */}
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span className="badge-text">Creative Designer</span>
            <span className="badge-dot"></span>
          </div>

          <div className="hero-title-wrapper">
            <h1 className="hero-title">
              <span className="title-line">Designing</span>
              <span className="title-line highlight">Digital</span>
              <span className="title-line">Experiences</span>
            </h1>
            <div className="title-accent"></div>
          </div>

          <div className="hero-name">
            <span className="name-intro">I'm</span>
            <span className="name-main">Dhruvi Topiya</span>
          </div>

          <p className="hero-description">
            A passionate Computer Engineering student focused on creating
            intuitive, user-centered digital experiences. Skilled in UI/UX
            design, frontend development, and modern web technologies.
          </p>

          <div className="hero-role">
            <span className="role-tag">UI/UX Designer</span>
            <span className="role-separator">•</span>
            <span className="role-tag">Frontend Developer</span>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="cta-primary">
              <span>View Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="cta-secondary">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Side - Visual Element */}
        <div className={`hero-visual ${isVisible ? 'visible' : ''}`}>
          <div className="visual-card">
            <div className="card-shape shape-1"></div>
            <div className="card-shape shape-2"></div>
            <div className="card-shape shape-3"></div>
            <div className="card-content">
              <div className="card-icon">✨</div>
              <p className="card-text">Creative Solutions</p>
            </div>
          </div>
          
          <div className="floating-elements">
            <div className="float-element float-1">Design</div>
            <div className="float-element float-2">Code</div>
            <div className="float-element float-3">Create</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Home;
