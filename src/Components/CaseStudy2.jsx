import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudy.css";

// replace with your actual images later
import heroImg from "../assets/shoes.png";

const ShoesCaseStudy = () => {
  return (
    <section className="case-wrapper">

      {/* Back Button */}
      <Link to="/#projects" className="back-link">
        ← Back to Projects
      </Link>

      {/* Header */}
      <header className="case-header">
        <div className="case-meta">
          <h1>Shoes Hub – E-Commerce Website</h1>
          <p className="subtitle">
            Online Shoe Shopping Platform
          </p>

          <div className="meta-grid">
            <div>
              <span>Year</span>
              <p>2025</p>
            </div>
            <div>
              <span>Project Type</span>
              <p>Group Project</p>
            </div>
            <div>
              <span>My Role</span>
              <p>UI Designer</p>
            </div>
          </div>
        </div>

 {/* Hero Image / Prototype */}
        <a
          href="https://www.figma.com/proto/mz0AZryRb55ARujcYKgtda/Dhruvi-project?node-id=1-2196&p=f&t=lT8oiAx70I59kHYn-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-image"
        >
          <img src={heroImg} alt="Shoes App Prototype" />
          <span className="image-hint">
            Click to view interactive prototype →
          </span>
        </a>
      </header>

      {/* Case Study Content */}
      <section className="case-content">

        {/* ABOUT PROJECT */}
        <div className="case-block">
          <h2>About Project</h2>
          <p>
            Shoes Hub is an e-commerce website designed to provide users with a
            simple and structured way to browse, select, and purchase footwear
            online.
          </p>
          <p>
            The focus of the project was to create a clean shopping experience
            with clear navigation, product visibility, and an easy checkout flow.
          </p>
        </div>

        {/* PROBLEM */}
        <div className="case-block">
          <h2>Problem</h2>
          <ul>
            <li>Difficult product discovery in existing platforms</li>
            <li>Unclear product information</li>
            <li>Complex filtering options</li>
            <li>Lack of visual consistency</li>
            <li>Poor mobile shopping experience</li>
          </ul>
        </div>

        {/* SOLUTION */}
        <div className="case-block">
          <h2>Solution</h2>
          <p>
            The solution focuses on a clean and minimal interface that helps
            users quickly find the right shoes and complete purchases with
            minimal steps.
          </p>
          <ul>
            <li>Simple category-based navigation</li>
            <li>Clear product cards with essential details</li>
            <li>Easy add-to-cart and checkout flow</li>
            <li>Consistent layout across pages</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div className="case-block">
          <h2>Process</h2>
          <ul>
            <li>Understanding user shopping behavior</li>
            <li>Competitor analysis</li>
            <li>Information architecture planning</li>
            <li>Wireframing key screens</li>
            <li>High-fidelity UI design</li>
          </ul>
        </div>

        {/* OUTCOME */}
<div className="case-block">
  <h2>Outcome</h2>
  <p>
    The final design delivers a clean and structured online shopping experience
    that allows users to browse, compare, and purchase shoes with ease.
  </p>
  <ul>
    <li>Simplified product discovery</li>
    <li>Clear presentation of product details</li>
    <li>Smooth add-to-cart and checkout flow</li>
    <li>Consistent layout across all screens</li>
    <li>Improved usability on desktop and mobile</li>
  </ul>
</div>


        

      </section>
    </section>
  );
};

export default ShoesCaseStudy;
