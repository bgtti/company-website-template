import "./about.css"

/**
 * Component returns about page.
 *
 * @returns {React.ReactElement}
 */
function About() {
 return (
  <section className="Main-Section">

   <div className="About-Hero">
    <h1>About Us</h1>

    <p>
     We build and maintain modern web applications with a strong focus on
     security, reliability, and long-term maintainability.
    </p>
   </div>

   <div className="About-Content">

    <section className="About-Section">
     <h2>Who We Are</h2>

     <p>
      We are a software development company specializing in custom web
      applications, website development, system integrations, and technical
      maintenance services.
     </p>

     <p>
      Our goal is to provide businesses with reliable software solutions that
      help them operate more efficiently and grow sustainably.
     </p>
    </section>

    <section className="About-Section">
     <h2>Our Approach</h2>

     <ul>
      <li>Security-first development</li>
      <li>Clean and maintainable code</li>
      <li>Modern development standards</li>
      <li>Long-term support and maintenance</li>
      <li>Transparent communication</li>
     </ul>
    </section>

    <section className="About-Section">
     <h2>Technologies</h2>

     <p>
      We work with modern technologies including React, JavaScript,
      TypeScript, Python, Flask, SQL databases, REST APIs, Docker,
      cloud infrastructure, and automated deployment pipelines.
     </p>
    </section>

    <section className="About-Section">
     <h2>Why Work With Us?</h2>

     <p>
      We believe software should be reliable, secure, and easy to maintain.
      Our focus is not only delivering projects but also ensuring they remain
      stable and valuable over time.
     </p>
    </section>

   </div>

  </section>
 )
}

export default About