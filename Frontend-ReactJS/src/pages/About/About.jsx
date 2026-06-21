import { Link } from "react-router-dom";
import AboutPicture from "../../assets/images/about_picture.jpg";
import "./about.css"

/**
 * Component returns about page.
 *
 * @returns {React.ReactElement}
 */
function About() {
 return (
  <section className="Main-Section">

   {/* Metadata */}
   <title>About us</title>
   <meta name="description" content="About us" />

   {/* Hero */}
   <div className="Main-Page-Hero">
    <h1>About Us</h1>

    <p>
     We build and maintain modern web applications with a strong focus on
     security, reliability, and long-term maintainability.
    </p>
   </div>

   {/* Image */}
   <div className="About-Image-Container">

    {/* Image source: by fauxels from Pexels. */}
    {/* Available at: https://www.pexels.com/photo/people-working-in-front-of-the-computer-3184357/ */}

    <img
     src={AboutPicture}
     alt="About our company"
     className="About-Image"
    />
   </div>

   <div className="About-Content">

    <section className="Main-Page-Subhero">
     <h2>Who We Are</h2>

     <p>
      We are a software development company specializing in custom web
      applications, website development, system integrations, and technical
      maintenance services.
     </p>
    </section>

    <section className="About-Section">
     <h3>Objectives</h3>

     <p>
      Our goal is to provide businesses with reliable software solutions that
      help them operate more efficiently and grow sustainably.
     </p>
    </section>

    <section className="About-Section">
     <h3>Our Approach</h3>

     <ul>
      <li>Security-first development</li>
      <li>Clean and maintainable code</li>
      <li>Modern development standards</li>
      <li>Long-term support and maintenance</li>
      <li>Transparent communication</li>
     </ul>
    </section>

    <section className="About-Section">
     <h3>Technologies</h3>

     <p>
      We work with modern technologies including React, JavaScript,
      TypeScript, Python, Flask, SQL databases, REST APIs, Docker,
      cloud infrastructure, and automated deployment pipelines.
     </p>
    </section>

    <section className="About-Section">
     <h3>Why Work With Us?</h3>

     <p>
      We believe software should be reliable, secure, and easy to maintain.
      Our focus is not only delivering projects but also ensuring they remain
      stable and valuable over time.
     </p>

     <Link
      to="/contact"
      className="About-CTA"
     >
      Contact Us
     </Link>
    </section>

   </div>

  </section>
 )
}

export default About