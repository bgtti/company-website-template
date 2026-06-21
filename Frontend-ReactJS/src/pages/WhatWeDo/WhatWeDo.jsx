import "./whatWeDo.css"

/**
 * Component returns services page.
 *
 * @returns {React.ReactElement}
 */
function WhatWeDo() {
 return (
  <section className="Main-Section">

   {/* Metadata */}
   <title>What we do</title>
   <meta name="description" content="What we do" />

   {/* Hero */}

   <div className="Main-Page-Hero">
    <h1>What We Do</h1>

    <p>
     We help businesses build, improve, and maintain modern web solutions.
    </p>
   </div>

   {/* Features */}
   <div className="Service-Features">

    <div className="Service-Feature-Card">
     <div className="Service-Feature-Icon">⚡</div>
     <h3>Fast Delivery</h3>
     <p>
      Efficient development processes that help bring
      projects from idea to production quickly.
     </p>
    </div>

    <div className="Service-Feature-Card">
     <div className="Service-Feature-Icon">🔒</div>
     <h3>Security</h3>
     <p>
      Modern development practices focused on reliability,
      security, and maintainability.
     </p>
    </div>

    <div className="Service-Feature-Card">
     <div className="Service-Feature-Icon">🛠️</div>
     <h3>Maintenance</h3>
     <p>
      Continuous support and maintenance to keep your
      systems running smoothly.
     </p>
    </div>

   </div>

   <div className="Main-Page-Subhero">

    <h2>Building Solutions That Last</h2>

    <p>
     We help businesses create, improve, and maintain
     web solutions that are reliable, scalable, and
     built according to modern development standards.
     From company websites to custom web applications,
     we focus on long-term quality rather than quick fixes.
    </p>

   </div>

   {/* Services Cards */}

   <div className="Services-Container">

    <section className="Service-Card">
     <h3>Website Development</h3>

     <p>
      We create professional websites tailored to your business needs,
      from simple informational websites to custom web platforms.
     </p>
    </section>

    <section className="Service-Card">
     <h3>Web Applications</h3>

     <p>
      We develop custom web applications that automate processes,
      improve efficiency, and provide better experiences for your users.
     </p>
    </section>

    <section className="Service-Card">
     <h3>Website Maintenance</h3>

     <p>
      We keep websites secure, updated, and operating smoothly through
      ongoing monitoring, updates, and technical support.
     </p>
    </section>

    <section className="Service-Card">
     <h3>API Integrations</h3>

     <p>
      We connect your systems with third-party services such as payment
      providers, booking platforms, CRMs, email systems, and other
      business tools.
     </p>
    </section>

    <section className="Service-Card">
     <h3>Hosting & Deployment</h3>

     <p>
      We assist with infrastructure setup, cloud deployments,
      monitoring, backups, and continuous delivery pipelines.
     </p>
    </section>

    <section className="Service-Card">
     <h3>Technical Consulting</h3>

     <p>
      We help businesses evaluate existing systems, identify
      improvements, and plan future software initiatives.
     </p>
    </section>

   </div>



  </section>
 )
}

export default WhatWeDo