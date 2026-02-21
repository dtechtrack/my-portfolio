import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>

      <div className="skills-container">

        {/* UI/UX & Design Skills */}
        <div className="skill-card full-width">
          <h3>UI/UX & Design Skills</h3>
          <div className="badge-container">
            <img src="https://img.shields.io/badge/User%20Research-8B5CF6?style=for-the-badge" alt="User Research" />
            <img src="https://img.shields.io/badge/Wireframing-6366F1?style=for-the-badge" alt="Wireframing" />
            <img src="https://img.shields.io/badge/Prototyping-7C3AED?style=for-the-badge" alt="Prototyping" />
            <img src="https://img.shields.io/badge/Responsive%20Design-4F46E5?style=for-the-badge" alt="Responsive Design" />
            <img src="https://img.shields.io/badge/Mobile--First%20Design-4338CA?style=for-the-badge" alt="Mobile First Design" />

          </div>
        </div>

        {/* Tools */}
        <div className="skill-card full-width">
          <h3>Tools</h3>
          <div className="badge-container">
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
            <img src="https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white" alt="Canva" />
          </div>
        </div>

        {/* Supporting Technical Skills */}
        <div className="skill-card full-width">
          <h3>Supporting Technical Skills & Tools</h3>
          <div className="badge-container">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
            <img src="https://img.shields.io/badge/CSS3-2965F1?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
            <img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
            <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="Python" />
            <img src="https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
            <img src="https://img.shields.io/badge/VS%20Code-0078D7?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VS Code" />
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
