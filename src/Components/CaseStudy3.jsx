import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudy.css";

const PPLPromotionsCaseStudy = () => {
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

          <h1>PPL Promotions Website Redesign</h1>

          <p className="subtitle">
            Reimagining a promotional products e-commerce experience for
            faster discovery, clearer product evaluation, and stronger
            brand communication.
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
          href="https://www.figma.com/proto/c1wKuvwe9EI6JCsxHwM1io/Internship-Kaushalam-starting-phase?node-id=2303-15324&viewport=3672%2C2904%2C0.05&t=RLzWj1AIQjbrLfDa-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=266%3A2183&page-id=0%3A1"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-image"
        >
          <img
            src="/images/ppl.png"
            alt="PPL Promotions Website Redesign"
          />

          <span className="image-hint">
            View PPL Promotions website →
          </span>
        </a>

      </header>

      {/* Case Study Content */}
      <section className="case-content">

        {/* OVERVIEW */}
        <div className="case-block">

          <h2>Overview</h2>

          <p>
            PPL Promotions is a promotional products company that helps
            businesses find branded merchandise and customized promotional
            products for marketing, events, employee recognition, client
            gifting, and other business initiatives.
          </p>

          <p>
            The redesign focused on improving the digital shopping experience
            across three key touchpoints: the homepage, product listing page,
            and product detail page.
          </p>

          <p>
            The goal was to create a cleaner and more structured experience
            that helps users move from discovering promotional products to
            evaluating individual products with less friction.
          </p>

        </div>


        {/* OBJECTIVE */}
        <div className="case-block">

          <h2>Objective</h2>

          <p>
            Redesign the PPL Promotions website into a more modern,
            structured, and user-friendly promotional product experience.
          </p>

          <p>
            The redesign focused on improving product discovery, visual
            hierarchy, category exploration, and product evaluation while
            maintaining the core purpose of the platform — helping businesses
            find products that can represent and promote their brand.
          </p>

          <ul>
            <li>Improve homepage content hierarchy</li>
            <li>Make product discovery easier</li>
            <li>Improve category and product browsing</li>
            <li>Create a clearer product listing experience</li>
            <li>Improve product information hierarchy</li>
            <li>Make product actions easier to identify</li>
            <li>Create a consistent visual language across pages</li>
            <li>Build a scalable responsive design system</li>
          </ul>

        </div>


        {/* PROBLEM */}
        <div className="case-block">

          <h2>Problem</h2>

          <p>
            Promotional product shopping is different from conventional
            e-commerce. Users may be looking for a product based on category,
            occasion, audience, branding requirement, quantity, or budget.
          </p>

          <p>
            This creates a large discovery space where users need to quickly
            understand what is available before evaluating a specific product.
          </p>

          <ul>
            <li>
              A large product catalog can make discovery overwhelming
            </li>

            <li>
              Users need clear category and product relationships
            </li>

            <li>
              Promotional products can serve very different business purposes
            </li>

            <li>
              Product information needs to be easy to scan and compare
            </li>

            <li>
              Users need confidence before selecting a product for their brand
            </li>

            <li>
              Product customization and branding context need to be clearly
              communicated
            </li>

            <li>
              The interface needs to balance a large amount of product
              information with visual simplicity
            </li>
          </ul>

          <p className="highlight">
            The core UX challenge was to make a large promotional product
            catalog feel easier to explore while giving users enough
            information to confidently evaluate individual products.
          </p>

        </div>


        {/* RESEARCH */}
        <div className="case-block">

          <h2>UX Research</h2>

          <p>
            I studied the existing PPL Promotions experience and analyzed how
            promotional product websites structure discovery, category
            browsing, product information, and conversion-oriented actions.
          </p>

          <p>
            PPL Promotions organizes its offering around promotional products
            and branded merchandise. Its website highlights categories
            including Awards, Bags, Casual Apparel, and Corporate Apparel,
            while also promoting new products and promotional ideas.
          </p>

          <p>
            The research direction therefore focused on making the product
            catalog easier to understand and creating stronger connections
            between promotional intent and product discovery.
          </p>

          <ul>
            <li>Existing website UX analysis</li>
            <li>Promotional e-commerce research</li>
            <li>Competitive website analysis</li>
            <li>Product discovery analysis</li>
            <li>Category and navigation analysis</li>
            <li>Product information hierarchy</li>
            <li>CTA and conversion-flow analysis</li>
            <li>Responsive UX considerations</li>
            <li>Accessibility and visual hierarchy</li>
          </ul>

        </div>


        {/* USER JOURNEY */}
        <div className="case-block">

          <h2>User Journey</h2>

          <p>
            The redesigned experience was structured around a simple product
            discovery journey:
          </p>

          <ul>
            <li>
              <strong>Discover</strong> — Understand the brand and available
              promotional product categories
            </li>

            <li>
              <strong>Explore</strong> — Browse relevant product categories
              and product collections
            </li>

            <li>
              <strong>Filter</strong> — Narrow down products based on relevant
              requirements
            </li>

            <li>
              <strong>Evaluate</strong> — Review product imagery,
              specifications, pricing, and important details
            </li>

            <li>
              <strong>Act</strong> — Continue toward product inquiry,
              customization, quote, or purchase-related action
            </li>
          </ul>

          <p className="highlight">
            Instead of treating the three pages as separate screens, I
            designed them as connected stages of the same product discovery
            journey.
          </p>

        </div>


        {/* INFORMATION ARCHITECTURE */}
        <div className="case-block">

          <h2>Information Architecture</h2>

          <p>
            The information architecture was designed to help users move
            between promotional categories, product collections, and
            individual products without losing context.
          </p>

          <p>
            The experience was organized around the three primary screens
            redesigned for this project.
          </p>

          <ul>
            <li>
              <strong>Homepage</strong> — Brand introduction, promotional
              categories, featured products, and discovery entry points
            </li>

            <li>
              <strong>Product Listing Page</strong> — Category-based product
              discovery, filtering, sorting, and product comparison
            </li>

            <li>
              <strong>Product Detail Page</strong> — Product imagery,
              information, specifications, pricing, and primary actions
            </li>
          </ul>

          <p>
            This structure creates a natural progression from broad discovery
            to focused product evaluation.
          </p>

        </div>


        {/* PAGE 01 */}
        <div className="case-block">

          <h2>01 — Homepage</h2>

          <p>
            The homepage was redesigned as the primary discovery layer of the
            experience.
          </p>

          <p>
            Rather than presenting users with an overwhelming amount of
            product information immediately, the layout establishes the PPL
            Promotions value proposition and then guides users toward relevant
            product categories and promotional opportunities.
          </p>

          <ul>
            <li>Clear visual hierarchy</li>
            <li>Strong primary navigation</li>
            <li>Promotional product discovery</li>
            <li>Category-based entry points</li>
            <li>Featured and trending product areas</li>
            <li>Strong visual product presentation</li>
            <li>Clear calls to action</li>
            <li>Trust and service-oriented content</li>
          </ul>

        </div>


        {/* PAGE 02 */}
        <div className="case-block">

          <h2>02 — Product Listing Page</h2>

          <p>
            The product listing page was designed to solve the product
            discovery problem.
          </p>

          <p>
            Users browsing promotional products need to quickly scan multiple
            products and narrow the catalog to products that are relevant to
            their requirements.
          </p>

          <ul>
            <li>Structured product grid</li>
            <li>Clear product-card hierarchy</li>
            <li>Product imagery as the primary visual anchor</li>
            <li>Readable product names and supporting information</li>
            <li>Filtering and sorting opportunities</li>
            <li>Consistent product-card interactions</li>
            <li>Responsive product-grid behavior</li>
            <li>Clear transition from listing to product detail</li>
          </ul>

          <p className="highlight">
            The listing experience was designed for scanning first and
            evaluation second — allowing users to quickly compare products
            before opening a specific product.
          </p>

        </div>


        {/* PAGE 03 */}
        <div className="case-block">

          <h2>03 — Product Detail Page</h2>

          <p>
            The product detail page was designed around the decision-making
            stage of the journey.
          </p>

          <p>
            Once a user selects a product, the interface needs to provide
            enough information to understand the product, evaluate its
            suitability, and take the next action.
          </p>

          <ul>
            <li>Large and clear product imagery</li>
            <li>Strong product title hierarchy</li>
            <li>Pricing and relevant product information</li>
            <li>Product specifications</li>
            <li>Available options and variations</li>
            <li>Branding/customization context</li>
            <li>Prominent primary action</li>
            <li>Supporting information near decision points</li>
          </ul>

          <p>
            The page prioritizes the information users need before committing
            to an inquiry, quote, customization, or purchase-related action.
          </p>

        </div>


        {/* DESIGN SYSTEM */}
        <div className="case-block">

          <h2>Design System</h2>

          <p>
            To make the redesign scalable, I created reusable UI patterns
            rather than designing each page as an isolated screen.
          </p>

          <p>
            The system was designed to maintain consistency across the
            homepage, product listing page, and product detail page while
            allowing the product catalog to grow.
          </p>

          <ul>
            <li>Typography hierarchy</li>
            <li>Color styles</li>
            <li>Spacing variables</li>
            <li>Responsive grid system</li>
            <li>Reusable buttons</li>
            <li>Navigation components</li>
            <li>Product cards</li>
            <li>Product information components</li>
            <li>Form and interaction states</li>
            <li>Responsive auto-layout structures</li>
            <li>Desktop and mobile breakpoints</li>
            <li>Accessible contrast and readable typography</li>
          </ul>

        </div>


        {/* RESPONSIVE DESIGN */}
        <div className="case-block">

          <h2>Responsive Experience</h2>

          <p>
            The redesign was planned as a responsive experience rather than
            simply scaling the desktop layouts down.
          </p>

          <p>
            Content hierarchy, product grids, navigation, buttons, spacing,
            and product information were considered across different screen
            sizes to maintain usability on both desktop and mobile devices.
          </p>

          <ul>
            <li>Responsive navigation</li>
            <li>Adaptive product grids</li>
            <li>Mobile-friendly product cards</li>
            <li>Flexible content sections</li>
            <li>Readable typography across breakpoints</li>
            <li>Touch-friendly interaction areas</li>
          </ul>

        </div>


        {/* OUTCOME */}
        <div className="case-block">

          <h2>Outcome</h2>

          <p>
            The redesigned PPL Promotions experience creates a clearer path
            from discovering promotional products to evaluating individual
            products.
          </p>

          <p>
            The three redesigned pages work together as a connected
            e-commerce experience: the homepage introduces and guides users,
            the listing page helps them explore and narrow their choices, and
            the product detail page supports deeper evaluation.
          </p>

          <ul>
            <li>Clearer homepage hierarchy</li>
            <li>More structured product discovery</li>
            <li>Improved product-listing experience</li>
            <li>Better product information hierarchy</li>
            <li>More focused product-detail experience</li>
            <li>Consistent visual language across pages</li>
            <li>Responsive desktop and mobile layouts</li>
            <li>Reusable component-based design system</li>
            <li>Stronger connection between discovery and action</li>
          </ul>

        </div>


        {/* STANDOUT FEATURES */}
        <div className="case-block">

          <h2>Standout Features</h2>

          <div className="feature">

            <h3>01. Promotional Product Discovery</h3>

            <p>
              The homepage provides clear entry points into promotional
              product categories and helps users understand what PPL
              Promotions offers before entering the deeper shopping flow.
            </p>

          </div>


          <div className="feature">

            <h3>02. Structured Product Browsing</h3>

            <p>
              The product listing experience prioritizes scanning, filtering,
              sorting, and comparing products so users can narrow down a large
              promotional catalog more efficiently.
            </p>

          </div>


          <div className="feature">

            <h3>03. Product Evaluation</h3>

            <p>
              The product detail page brings important product information,
              imagery, specifications, and primary actions into a clearer
              hierarchy.
            </p>

          </div>


          <div className="feature">

            <h3>04. Brand & Customization Context</h3>

            <p>
              Because promotional products are used to represent businesses,
              branding and customization context were treated as important
              parts of the product experience.
            </p>

          </div>


          <div className="feature">

            <h3>05. Scalable Design System</h3>

            <p>
              Reusable components, variables, responsive layouts, and
              interaction states provide a foundation that can scale across
              additional product categories and future pages.
            </p>

          </div>

        </div>


        {/* LEARNINGS */}
        <div className="case-block">

          <h2>Key Learnings</h2>

          <p>
            This project reinforced that an e-commerce redesign is not only
            about visual improvement. The structure of information and the
            relationship between pages have a major impact on how easily
            users can discover and evaluate products.
          </p>

          <p>
            Working on PPL Promotions helped me think more deeply about
            catalog-heavy experiences, product discovery, information
            hierarchy, responsive design, and building reusable systems
            instead of one-off screens.
          </p>

          <p className="highlight">
            The biggest takeaway was to design the shopping journey as one
            connected experience — not as three individual pages.
          </p>

        </div>


      </section>

    </section>
  );
};

export default PPLPromotionsCaseStudy;