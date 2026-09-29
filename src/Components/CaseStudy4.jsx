
import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudy.css";

const SilvoraCaseStudy = () => {
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

          <h1>Silvora — Premium Jewellery Experience</h1>

          <p className="subtitle">
            Designing a refined, aesthetic-first jewellery experience that
            combines premium visual storytelling, elegant product presentation,
            and a mobile-first browsing experience.
          </p>


          <div className="meta-grid">

            <div>
              <span>Year</span>
              <p>2026</p>
            </div>

            <div>
              <span>Type of Project</span>
              <p>UI/UX · E-commerce · Mobile-First Design</p>
            </div>

            <div>
              <span>My Role</span>
              <p>UI/UX Designer · Product Designer</p>
            </div>

          </div>

        </div>


        {/* Hero Image */}
        <a
          href="https://www.figma.com/proto/c1wKuvwe9EI6JCsxHwM1io/Internship-Kaushalam-starting-phase?node-id=380-1674&viewport=14127%2C5740%2C0.12&t=PrHSWoB49ERK7G8V-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=266%3A2183&page-id=0%3A1"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-image"
        >
          <img
            src="/images/silvora.png"
            alt="Silvora Premium Jewellery Website"
          />

          <span className="image-hint">
            View Silvora website →
          </span>
        </a>

      </header>


      {/* Case Study Content */}
      <section className="case-content">


        {/* OVERVIEW */}
        <div className="case-block">

          <h2>Overview</h2>

          <p>
            Silvora is a premium jewellery website concept designed around
            aesthetics, elegance, and visual storytelling. The experience
            focuses on presenting jewellery as more than a product — it is
            presented as a statement of personal style, craftsmanship, and
            sophistication.
          </p>

          <p>
            The design was created with a strong emphasis on premium visual
            composition, refined typography, spacious layouts, high-quality
            imagery, and a calm browsing experience.
          </p>

          <p>
            I designed the homepage as the primary brand and discovery
            experience, while also approaching the interface with a
            mobile-first mindset so that the visual character of the brand
            remains consistent across smaller screens.
          </p>

        </div>


        {/* OBJECTIVE */}
        <div className="case-block">

          <h2>Objective</h2>

          <p>
            The objective was to create a premium digital jewellery experience
            that communicates the brand's visual identity immediately while
            keeping product discovery simple and intuitive.
          </p>

          <p>
            The design needed to balance luxury aesthetics with usability,
            ensuring that visual elements enhance the product rather than
            competing with it.
          </p>

          <ul>
            <li>Create a strong premium brand impression</li>
            <li>Use visual storytelling to communicate the jewellery collection</li>
            <li>Build a refined and minimal interface</li>
            <li>Give jewellery imagery a strong visual presence</li>
            <li>Create clear paths toward product discovery</li>
            <li>Maintain strong typography and spacing hierarchy</li>
            <li>Design the experience mobile-first</li>
            <li>Create a responsive foundation for future pages</li>
          </ul>

        </div>


        {/* PROBLEM */}
        <div className="case-block">

          <h2>Design Challenge</h2>

          <p>
            Jewellery websites operate in a highly visual space where users
            often form their first impression through imagery, typography,
            composition, and overall brand atmosphere.
          </p>

          <p>
            The challenge was to create an interface that felt premium without
            becoming visually excessive. Every section needed enough breathing
            space to allow the jewellery to remain the primary visual focus.
          </p>

          <ul>
            <li>
              Premium products require strong visual presentation
            </li>

            <li>
              Excessive visual elements can reduce the sense of luxury
            </li>

            <li>
              Typography needs to communicate elegance while remaining readable
            </li>

            <li>
              Jewellery imagery needs sufficient space and visual hierarchy
            </li>

            <li>
              The homepage needs to tell a brand story without overwhelming users
            </li>

            <li>
              Mobile layouts require careful prioritization of content
            </li>

            <li>
              The experience needs to remain visually consistent across devices
            </li>
          </ul>

          <p className="highlight">
            The core design challenge was to create a digital experience where
            aesthetics and usability support each other — allowing the jewellery
            to remain the hero of the experience.
          </p>

        </div>


        {/* DESIGN DIRECTION */}
        <div className="case-block">

          <h2>Design Direction</h2>

          <p>
            The visual direction for Silvora was built around the idea of
            understated luxury. Instead of filling the interface with
            decorative elements, the design uses composition, whitespace,
            typography, imagery, and controlled visual hierarchy to create a
            premium atmosphere.
          </p>

          <p>
            The interface was intentionally kept clean so that jewellery
            photography could remain the strongest visual element throughout
            the experience.
          </p>

          <ul>
            <li>Minimal and sophisticated visual language</li>
            <li>Editorial-inspired compositions</li>
            <li>Generous whitespace</li>
            <li>Strong jewellery imagery</li>
            <li>Elegant typography hierarchy</li>
            <li>Controlled use of visual accents</li>
            <li>Clear and intentional CTA placement</li>
            <li>Premium product-focused presentation</li>
          </ul>

        </div>


        {/* USER JOURNEY */}
        <div className="case-block">

          <h2>User Journey</h2>

          <p>
            The homepage was structured around a simple journey that allows
            users to first experience the brand and then progressively discover
            the jewellery collection.
          </p>

          <ul>

            <li>
              <strong>Discover</strong> — Experience the Silvora brand through
              the visual identity and hero presentation
            </li>

            <li>
              <strong>Explore</strong> — Discover featured jewellery and
              collection-focused content
            </li>

            <li>
              <strong>Understand</strong> — Learn more about the collection,
              aesthetic, and brand story
            </li>

            <li>
              <strong>Evaluate</strong> — Focus on jewellery imagery and
              supporting product information
            </li>

            <li>
              <strong>Continue</strong> — Move toward collection or product
              exploration
            </li>

          </ul>

          <p className="highlight">
            The homepage was designed as a visual journey rather than simply a
            collection of sections — gradually moving users from brand discovery
            toward jewellery exploration.
          </p>

        </div>


        {/* INFORMATION ARCHITECTURE */}
        <div className="case-block">

          <h2>Information Architecture</h2>

          <p>
            The information structure was kept intentionally focused so that
            users can understand the brand and discover the jewellery collection
            without unnecessary complexity.
          </p>

          <p>
            The homepage acts as the primary entry point and establishes a
            visual relationship between the brand, collection, storytelling, and
            product discovery.
          </p>

          <ul>

            <li>
              <strong>Hero Section</strong> — Establishes the Silvora identity
              and creates the first visual impression
            </li>

            <li>
              <strong>Collection Discovery</strong> — Introduces jewellery
              collections and encourages exploration
            </li>

            <li>
              <strong>Featured Jewellery</strong> — Gives selected pieces a
              stronger visual presence
            </li>

            <li>
              <strong>Brand Story</strong> — Communicates the aesthetic and
              identity behind Silvora
            </li>

            <li>
              <strong>Exploration CTA</strong> — Guides users toward discovering
              more jewellery
            </li>

          </ul>

          <p>
            This structure keeps the experience focused while giving each
            section a clear purpose in the overall brand journey.
          </p>

        </div>


        {/* PAGE 01 */}
        <div className="case-block">

          <h2>01 — Homepage</h2>

          <p>
            The homepage was designed as the central expression of the Silvora
            brand. Rather than treating it as a conventional e-commerce
            homepage, the design gives equal importance to brand atmosphere and
            product discovery.
          </p>

          <p>
            The visual hierarchy gradually introduces the brand, creates
            interest through jewellery imagery, and guides users toward
            exploring the collection.
          </p>

          <ul>
            <li>Strong premium hero section</li>
            <li>Clear visual hierarchy</li>
            <li>Large-scale jewellery imagery</li>
            <li>Elegant typography</li>
            <li>Generous whitespace</li>
            <li>Collection-focused sections</li>
            <li>Editorial-style visual composition</li>
            <li>Clear calls to action</li>
            <li>Brand storytelling</li>
            <li>Responsive section structure</li>
          </ul>

        </div>


        {/* MOBILE FIRST */}
        <div className="case-block">

          <h2>02 — Mobile-First Experience</h2>

          <p>
            Silvora was designed with a mobile-first mindset rather than simply
            shrinking the desktop design for smaller screens.
          </p>

          <p>
            Since jewellery is highly visual, mobile screens require careful
            control over image proportions, spacing, typography, navigation, and
            content priority. Each section was considered in terms of how it
            would translate into a smaller viewport.
          </p>

          <ul>
            <li>Mobile-first content hierarchy</li>
            <li>Responsive navigation structure</li>
            <li>Optimized jewellery imagery</li>
            <li>Touch-friendly interaction areas</li>
            <li>Readable typography on smaller screens</li>
            <li>Responsive spacing system</li>
            <li>Flexible content sections</li>
            <li>Clear mobile CTAs</li>
            <li>Preserved visual identity across breakpoints</li>
          </ul>

          <p className="highlight">
            The mobile experience was treated as a primary design experience,
            ensuring that the premium character of Silvora remains intact even
            within a compact viewport.
          </p>

        </div>


        {/* VISUAL HIERARCHY */}
        <div className="case-block">

          <h2>Visual Hierarchy</h2>

          <p>
            Because the project is strongly aesthetic-driven, visual hierarchy
            played a major role in determining how users perceive the brand and
            jewellery collection.
          </p>

          <p>
            The interface uses scale, spacing, typography, imagery, and
            positioning to establish a clear order of attention.
          </p>

          <ul>
            <li>Jewellery imagery as the primary visual anchor</li>
            <li>Strong hero composition</li>
            <li>Clear heading hierarchy</li>
            <li>Controlled text density</li>
            <li>Generous whitespace around key content</li>
            <li>Focused CTA placement</li>
            <li>Consistent visual rhythm between sections</li>
          </ul>

        </div>


        {/* TYPOGRAPHY & COLOR */}
        <div className="case-block">

          <h2>Typography & Visual Language</h2>

          <p>
            Typography was treated as part of the brand identity rather than
            simply a method of displaying information.
          </p>

          <p>
            The visual language focuses on creating contrast between expressive
            display typography and readable supporting content, helping the
            interface feel editorial and premium while maintaining usability.
          </p>

          <ul>
            <li>Elegant display typography</li>
            <li>Readable supporting text</li>
            <li>Clear heading hierarchy</li>
            <li>Controlled font sizing across breakpoints</li>
            <li>Balanced line lengths</li>
            <li>Consistent typographic rhythm</li>
            <li>Minimal and sophisticated color usage</li>
            <li>Strong contrast between content and background</li>
          </ul>

        </div>


        {/* DESIGN SYSTEM */}
        <div className="case-block">

          <h2>Design System</h2>

          <p>
            Even though the project is centered around a single homepage
            experience, the design was approached with scalability in mind.
          </p>

          <p>
            Reusable patterns and consistent visual rules were established so
            that the experience can be extended to collection, product detail,
            and other future pages without losing the Silvora identity.
          </p>

          <ul>
            <li>Typography hierarchy</li>
            <li>Color styles</li>
            <li>Spacing system</li>
            <li>Responsive layout rules</li>
            <li>Reusable buttons</li>
            <li>Navigation components</li>
            <li>Image presentation patterns</li>
            <li>Content section patterns</li>
            <li>Responsive auto-layout structures</li>
            <li>Desktop and mobile breakpoints</li>
            <li>Consistent interaction patterns</li>
          </ul>

        </div>


        {/* RESPONSIVE DESIGN */}
        <div className="case-block">

          <h2>Responsive Experience</h2>

          <p>
            The Silvora experience was designed to remain visually consistent
            across different screen sizes while adapting the composition to the
            available space.
          </p>

          <p>
            Instead of relying on a single fixed layout, sections, imagery,
            typography, spacing, and navigation were considered as responsive
            elements.
          </p>

          <ul>
            <li>Mobile-first layout decisions</li>
            <li>Adaptive hero composition</li>
            <li>Responsive imagery</li>
            <li>Flexible section layouts</li>
            <li>Responsive typography</li>
            <li>Touch-friendly mobile interactions</li>
            <li>Adaptive spacing</li>
            <li>Consistent brand presentation across breakpoints</li>
          </ul>

        </div>


        {/* OUTCOME */}
        <div className="case-block">

          <h2>Outcome</h2>

          <p>
            The Silvora homepage creates a premium digital environment where
            jewellery remains the central focus of the experience.
          </p>

          <p>
            The final design combines aesthetic storytelling with a structured
            browsing experience, allowing the brand identity, jewellery
            imagery, typography, and content hierarchy to work together.
          </p>

          <ul>
            <li>Premium and refined visual direction</li>
            <li>Strong jewellery-focused presentation</li>
            <li>Clear homepage hierarchy</li>
            <li>Minimal and sophisticated interface</li>
            <li>Mobile-first design approach</li>
            <li>Responsive desktop and mobile experience</li>
            <li>Consistent visual language</li>
            <li>Scalable design foundation</li>
            <li>Clear connection between brand storytelling and product discovery</li>
          </ul>

        </div>


        {/* STANDOUT FEATURES */}
        <div className="case-block">

          <h2>Standout Features</h2>


          <div className="feature">

            <h3>01. Premium Visual Storytelling</h3>

            <p>
              The homepage uses imagery, composition, whitespace, and typography
              to establish a sophisticated visual identity before users begin
              exploring the jewellery collection.
            </p>

          </div>


          <div className="feature">

            <h3>02. Jewellery-Centered Design</h3>

            <p>
              Jewellery imagery remains the primary visual focus throughout the
              experience, with surrounding elements designed to support rather
              than compete with the products.
            </p>

          </div>


          <div className="feature">

            <h3>03. Mobile-First Thinking</h3>

            <p>
              The experience was designed with smaller screens in mind from the
              beginning, ensuring that hierarchy, imagery, typography, spacing,
              and interactions remain effective on mobile devices.
            </p>

          </div>


          <div className="feature">

            <h3>04. Editorial Aesthetic</h3>

            <p>
              The interface takes inspiration from premium editorial layouts,
              using large imagery, controlled typography, whitespace, and
              intentional composition to create a luxury-oriented experience.
            </p>

          </div>


          <div className="feature">

            <h3>05. Scalable Design Foundation</h3>

            <p>
              Reusable visual patterns and responsive structures provide a
              foundation for expanding Silvora into collection pages, product
              pages, and additional e-commerce experiences.
            </p>

          </div>

        </div>


        {/* LEARNINGS */}
        <div className="case-block">

          <h2>Key Learnings</h2>

          <p>
            This project reinforced that premium design is not simply about
            adding decorative elements or making an interface visually
            sophisticated. The experience depends on how effectively imagery,
            typography, spacing, hierarchy, and content work together.
          </p>

          <p>
            Designing Silvora also strengthened my understanding of
            mobile-first thinking, visual storytelling, responsive composition,
            and the importance of giving premium products enough space to
            communicate their own character.
          </p>

          <p className="highlight">
            The biggest takeaway was that luxury in digital design often comes
            from restraint — giving every visual element enough space and purpose
            to create a focused and memorable experience.
          </p>

        </div>


      </section>

    </section>
  );
};

export default SilvoraCaseStudy;

