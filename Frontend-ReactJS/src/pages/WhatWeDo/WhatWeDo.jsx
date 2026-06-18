import "./whatWeDo.css"

/**
 * Component returns services page.
 *
 * @returns {React.ReactElement}
 */
function WhatWeDo() {
 return (
  <section className="Main-Section">

   <div className="Services-Hero">
    <h1>What We Do</h1>

    <p>
     We help businesses build, improve, and maintain modern web solutions.
    </p>
   </div>

   <div className="Services-Container">

    <section className="Service-Card">
     <h2>Website Development</h2>

     <p>
      We create professional websites tailored to your business needs,
      from simple informational websites to custom web platforms.
     </p>
    </section>

    <section className="Service-Card">
     <h2>Web Applications</h2>

     <p>
      We develop custom web applications that automate processes,
      improve efficiency, and provide better experiences for your users.
     </p>
    </section>

    <section className="Service-Card">
     <h2>Website Maintenance</h2>

     <p>
      We keep websites secure, updated, and operating smoothly through
      ongoing monitoring, updates, and technical support.
     </p>
    </section>

    <section className="Service-Card">
     <h2>API Integrations</h2>

     <p>
      We connect your systems with third-party services such as payment
      providers, booking platforms, CRMs, email systems, and other
      business tools.
     </p>
    </section>

    <section className="Service-Card">
     <h2>Hosting & Deployment</h2>

     <p>
      We assist with infrastructure setup, cloud deployments,
      monitoring, backups, and continuous delivery pipelines.
     </p>
    </section>

    <section className="Service-Card">
     <h2>Technical Consulting</h2>

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