import { COMPANY } from "../../config_variables.js";
import "./privacyPolicy.css"

/**
 * Component returns privacy policy page.
 *
 * @returns {React.ReactElement}
 */
function PrivacyPolicy() {
 return (
  <section className="Main-Section">
   <div className="Legal-Container">

    <h1>Privacy Policy</h1>

    <section className="Legal-Section">
     <h2>1. General Information</h2>
     <p>
      We take the protection of personal data seriously. This Privacy Policy
      explains how we collect, use, store, and protect personal data when you
      visit our website or contact us through our contact form.
     </p>
    </section>

    <section className="Legal-Section">
     <h2>2. Responsible Entity</h2>
     <p>
      <strong>{COMPANY.NAME}</strong><br />
      {COMPANY.STREET}<br />
      {COMPANY.CITY}<br />
      {COMPANY.COUNTRY}<br />
      Email: {COMPANY.EMAIL}
     </p>
    </section>

    <section className="Legal-Section">
     <h2>3. Data We Collect</h2>
     <p>
      When you use our contact form, we may collect your name, email address,
      company name, subject, message content, and any other information you
      voluntarily provide.
     </p>
     <p>
      Our website may also process technical data such as IP address, browser
      type, device information, access time, and pages visited.
     </p>
    </section>

    <section className="Legal-Section">
     <h2>4. Purpose of Processing</h2>
     <p>
      We use personal data to respond to inquiries, provide information about
      our services, maintain website security, improve our website, and comply
      with legal obligations.
     </p>
    </section>

    <section className="Legal-Section">
     <h2>5. Contact Form</h2>
     <p>
      If you contact us through the website, the information you submit will be
      used to process and respond to your inquiry. We do not sell this data to
      third parties.
     </p>
    </section>

    <section className="Legal-Section">
     <h2>6. Cookies and Analytics</h2>
     <p>
      Our website may use cookies or similar technologies to ensure proper
      functionality and improve user experience. If analytics tools are used,
      they may collect information about website usage.
     </p>
     <p>
      Please replace this section with the exact tools used, such as Google
      Analytics, Plausible, Matomo, or no analytics.
     </p>
    </section>

    <section className="Legal-Section">
     <h2>7. Hosting and Third-Party Services</h2>
     <p>
      Our website may be hosted by external service providers. These providers
      may process technical data necessary for operating and securing the
      website.
     </p>
    </section>

    <section className="Legal-Section">
     <h2>8. Data Retention</h2>
     <p>
      We retain personal data only for as long as necessary for the purposes
      described in this Privacy Policy, unless longer retention is required by
      law.
     </p>
    </section>

    <section className="Legal-Section">
     <h2>9. Your Rights</h2>
     <p>
      You may have the right to request information about your personal data,
      request correction or deletion, object to processing, or request
      restriction of processing, subject to applicable legal requirements.
     </p>
    </section>

    <section className="Legal-Section">
     <h2>10. Changes to This Privacy Policy</h2>
     <p>
      We may update this Privacy Policy from time to time. The version
      published on this website is the current version.
     </p>
    </section>

   </div>
  </section>
 )
}

export default PrivacyPolicy