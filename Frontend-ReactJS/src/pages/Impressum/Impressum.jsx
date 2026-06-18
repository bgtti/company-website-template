import { COMPANY } from "../../config_variables.js";
import "./impressum.css"

/**
 * Component returns impressum page.
 *
 * @returns {React.ReactElement}
 */
function Impressum() {
 return (
  <section className="Main-Section">

   <div className="Legal-Container">

    <h1>Impressum</h1>

    <section className="Legal-Section">
     <h2>Company Information</h2>

     <p>
      <strong>{COMPANY.NAME}</strong><br />
      {COMPANY.STREET}<br />
      {COMPANY.CITY}<br />
      {COMPANY.COUNTRY}
     </p>
    </section>

    <section className="Legal-Section">
     <h2>Contact</h2>

     <p>
      Email: {COMPANY.EMAIL}<br />
      Website: {COMPANY.WEBSITE}
     </p>
    </section>

    <section className="Legal-Section">
     <h2>Authorized Representative</h2>

     <p>
      {COMPANY.REPRESENTATIVE}
     </p>
    </section>

    <section className="Legal-Section">
     <h2>Commercial Register</h2>

     <p>
      {COMPANY.COMMERCIAL_REGISTER}<br />
      Commercial Register Number: {COMPANY.COMMERCIAL_REGISTER_NUMBER}
      {COMPANY.HAS_VAT_NUMBER && (
       <>
        <br />
        VAT Number: {COMPANY.VAT_NUMBER}
       </>
      )}
     </p>
    </section>

    <section className="Legal-Section">
     <h2>Disclaimer</h2>

     <p>
      The contents of this website are created with great care.
      However, no guarantee is given for the accuracy,
      completeness, or timeliness of the information provided.
     </p>
    </section>

   </div>

  </section>
 )
}

export default Impressum