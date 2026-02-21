import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Adaa Jaipur",
      description: "A women's e-commerce platform inspired by Indian culture, designed to provide a smooth and engaging shopping experience.",
      image: "/images/adaa.png",
      link: "https://dhairyafrontend.netlify.app/",
      external: true,
      category: "E-Commerce",
      color: "purple"
    },
    {
      id: 2,
      title: "Shoes Hub",
      description: "An e-commerce website focused on clean navigation, product discovery, and a smooth checkout experience.",
      image: "/images/shoes.png",
      link: "/case-study/shoes-app",
      external: false,
      category: "E-Commerce",
      color: "coral"
    },
    {
      id: 3,
      title: "Smart RFID Shopping Trolley",
      description: "A real-time IoT-based shopping system designed to eliminate checkout queues using RFID and embedded UI.",
      image: "/images/hero.jpeg",
      link: "/case-study/smart-rfid-trolley",
      external: false,
      category: "IoT Design",
      color: "teal"
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const Component = project.external ? 'a' : Link;
    const props = project.external
      ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
      : { to: project.link };

    return (
      <Component
        {...props}
        className={`project-card project-${project.color} ${isVisible ? 'visible' : ''}`}
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        <div className="project-image-wrapper">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-number">0{index + 1}</div>
        </div>

        <div className="project-content">
          <div className="project-category">{project.category}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="project-footer">
            <span className="project-link">
              {project.external ? 'View Project' : 'View Case Study'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        <div className="project-accent"></div>
      </Component>
    );
  };

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className={`projects-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-label">Featured Work</div>
          <h2 className="section-title">
            <span className="title-part">Selected</span>
            <span className="title-part highlight">Projects</span>
          </h2>
          <p className="section-description">
            A collection of projects showcasing creative problem-solving and 
            user-centered design thinking.
          </p>
        </div>

        {/* Projects Grid - Uniform Layout */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
