import "./home.css"
import { Link } from "react-router-dom";

/**
 * Component returns home page.
 * 
 * @returns {React.ReactElement}
 */
function Home() {
 return (
  <section className="Main-Section">
   {/* Metadata */}
   <title>Homepage</title>

   {/* Homepage Image*/}

   <div className="Homepage-Image">
    <div className="Homepage-Hero">
     <h1>Website Development and Maintenance Services</h1>

     <p>
      Building solutions with high technical standards.
     </p>

     <div className="Homepage-Hero-Buttons">
      <Link
       to="/what-we-do"
       className="Secondary-Button"
      >
       Learn More
      </Link>

      <Link
       to="/contact"
       className="Primary-Button"
      >
       Contact Us
      </Link>
     </div>

    </div>
   </div>

  </section>
 )
}

export default Home