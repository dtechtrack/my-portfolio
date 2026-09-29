import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudy.css";

const CorporateGearCaseStudy = () => {
  return (
    <section className="case-wrapper">

      {/* Back Button */}
      <Link
        to="/"
        className="back-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/#projects";
          setTimeout(() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }}
      >
        ← Back to Home
      </Link>

      {/* Header Section */}
      <header className="case-header">
        <div className="case-meta">
          <h1>Corporate Gear Website Redesign</h1>

          <p className="subtitle">
            A premium B2B e-commerce experience for custom branded merchandise
          </p>

          <div className="meta-grid">
            <div>
              <span>Year</span>
              <p>2026</p>
            </div>

            <div>
              <span>Type of Project</span>
              <p>UI/UX · E-commerce · Website Redesign</p>
            </div>

            <div>
              <span>My Role</span>
              <p>UI/UX Designer · UX Research · Product Designer</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <a
          href="https://www.figma.com/proto/c1wKuvwe9EI6JCsxHwM1io/Internship-Kaushalam-starting-phase?node-id=1248-8265&viewport=3672%2C2904%2C0.05&t=RLzWj1AIQjbrLfDa-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=266%3A2183&page-id=0%3A1"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-image"
        >
          <img
            src="/images/hero.png"
            alt="Corporate Gear Website Redesign"
          />

          <span className="image-hint">
            Click to view interactive prototype →
          </span>
        </a>
      </header>

      {/* Case Study Content */}
      <section className="case-content">

        {/* OBJECTIVE */}
        <div className="case-block">
          <h2>Objective</h2>

          <p>
            Redesign the Corporate Gear e-commerce experience into a more
            structured, premium, and conversion-focused platform that makes
            discovering, customizing, and purchasing branded merchandise easier
            for businesses of different sizes.
          </p>

          <p>
            The goal was to simplify a complex B2B shopping journey while
            maintaining the premium positioning of Corporate Gear and the
            quality of the brands it offers.
          </p>

          <p>
            The experience needed to support users looking for apparel,
            accessories, corporate gifts, and promotional products while
            guiding them naturally from product discovery to customization
            and checkout.
          </p>
        </div>

        {/* PROBLEM */}
        <div className="case-block">
          <h2>Problem</h2>

          <p>
            Corporate promotional shopping is more complex than traditional
            e-commerce. Users are not only selecting a product — they may also
            need to choose a brand, color, size, quantity, logo placement,
            decoration method, and other customization details.
          </p>

          <ul>
            <li>
              Large product and brand catalogs can make product discovery
              overwhelming
            </li>

            <li>
              Users need to compare products, brands, sizes, colors, and
              customization options
            </li>

            <li>
              B2B customers may place both small and large-volume orders
            </li>

            <li>
              Customization introduces additional decisions before checkout
            </li>

            <li>
              Users need confidence that their logo and customization will be
              produced correctly
            </li>

            <li>
              The experience needs to communicate premium quality without
              becoming visually cluttered
            </li>
          </ul>

          <p className="highlight">
            The core UX challenge was to reduce decision-making complexity
            without reducing the flexibility required for business
            customization.
          </p>
        </div>

        {/* PROCESS */}
        <div className="case-block">
          <h2>Process</h2>

          <p>
            I approached the project as an experience-design problem rather
            than simply redesigning individual screens. I studied the existing
            product structure, shopping journey, customization requirements,
            and common patterns used in large e-commerce platforms.
          </p>

          <p>
            The design process focused on creating a clear information
            hierarchy and reusable interface patterns that could scale across
            thousands of products and multiple product categories.
          </p>

          <ul>
            <li>Existing website and UX analysis</li>
            <li>Competitive and e-commerce UX research</li>
            <li>Information architecture</li>
            <li>User journey mapping</li>
            <li>Product discovery and filtering analysis</li>
            <li>Wireframing and interaction design</li>
            <li>High-fidelity UI design</li>
            <li>Responsive desktop and mobile design</li>
            <li>Reusable component and design-system creation</li>
            <li>Accessibility and WCAG-focused visual decisions</li>
          </ul>
        </div>

        {/* UX DIRECTION */}
        <div className="case-block">
          <h2>UX Direction</h2>

          <p>
            The redesigned experience was structured around the way business
            customers actually shop: discover a category or brand, narrow down
            products, evaluate the product, customize it, review the order,
            and complete the purchase.
          </p>

          <p>
            Instead of treating every page as an isolated design, I created a
            consistent system across the major e-commerce touchpoints.
          </p>

          <ul>
            <li>Clear category and brand-based navigation</li>
            <li>Structured product discovery and filtering</li>
            <li>Scannable product information</li>
            <li>Clear customization actions</li>
            <li>Strong hierarchy between product information and actions</li>
            <li>Trust-building information at important decision points</li>
            <li>Consistent cart and checkout experience</li>
          </ul>
        </div>

        {/* INFORMATION ARCHITECTURE */}
        <div className="case-block">
          <h2>Information Architecture</h2>

          <p>
            Because Corporate Gear offers a large range of products and
            premium brands, information architecture became one of the most
            important parts of the redesign.
          </p>

          <p>
            I organized the experience around two primary discovery models:
            shopping by product category and shopping by brand.
          </p>

          <ul>
            <li>Men's Apparel</li>
            <li>Women's Apparel</li>
            <li>Accessories</li>
            <li>Golf Gear</li>
            <li>Premium Brands</li>
            <li>Quick Ship</li>
            <li>Sale</li>
            <li>Resources and Support</li>
          </ul>

          <p>
            This structure allows users with different shopping intentions to
            enter the experience from the path that feels most natural to
            them.
          </p>
        </div>

        {/* DESIGN SYSTEM */}
        <div className="case-block">
          <h2>Design System</h2>

          <p>
            To make the website scalable, I developed a reusable design system
            instead of designing every screen independently.
          </p>

          <p>
            The system included typography, color styles, spacing variables,
            responsive grids, buttons, cards, form elements, navigation
            patterns, product components, and reusable interaction states.
          </p>

          <ul>
            <li>Reusable UI components</li>
            <li>Consistent spacing and layout system</li>
            <li>Typography hierarchy</li>
            <li>Button and interaction variants</li>
            <li>Product-card patterns</li>
            <li>Responsive auto-layout structures</li>
            <li>Desktop and mobile breakpoints</li>
            <li>Accessible contrast and readable typography</li>
          </ul>
        </div>

        {/* OUTCOME */}
        <div className="case-block">
          <h2>Outcome</h2>

          <p>
            The final experience transforms Corporate Gear into a more
            structured and premium digital shopping journey, balancing the
            visual expectations of a modern e-commerce platform with the
            complexity of B2B product customization.
          </p>

          <p>
            The redesign focuses on helping users move confidently from
            discovery to customization and checkout without overwhelming them
            with unnecessary information.
          </p>

          <ul>
            <li>Clearer product and brand discovery</li>
            <li>More structured e-commerce navigation</li>
            <li>Simplified customization journey</li>
            <li>Improved product information hierarchy</li>
            <li>Consistent experience across pages</li>
            <li>Scalable component-based design system</li>
            <li>Responsive desktop and mobile layouts</li>
            <li>Premium visual direction aligned with the brand</li>
          </ul>
        </div>

        {/* FEATURES */}
        <div className="case-block">
          <h2>Standout Features</h2>

          <div className="feature">
            <h3>Premium Product Discovery</h3>

            <p>
              A structured browsing experience helps users discover products
              through categories, brands, and relevant filters without losing
              the premium feel of the shopping experience.
            </p>
          </div>

          <div className="feature">
            <h3>Product Customization Experience</h3>

            <p>
              Customization was treated as a core part of the product journey,
              making logo, color, size, quantity, and decoration-related
              decisions easier to understand.
            </p>
          </div>

          <div className="feature">
            <h3>B2B-Focused Shopping Flow</h3>

            <p>
              The experience was designed to accommodate different business
              needs, from smaller promotional orders to larger corporate
              requirements.
            </p>
          </div>

          <div className="feature">
            <h3>Trust & Quality Signals</h3>

            <p>
              Important information around premium brands, customization,
              proofing, support, and service was positioned at relevant points
              in the journey to reduce uncertainty.
            </p>
          </div>

          <div className="feature">
            <h3>Scalable Design System</h3>

            <p>
              Reusable components, variables, responsive layouts, and
              interaction states make the interface easier to maintain and
              extend as the product catalog grows.
            </p>
          </div>

        </div>

      </section>

    </section>
  );
};

export default CorporateGearCaseStudy;