import { Link } from "react-router-dom";
import "./notFound.css";

function NotFound() {
 return (
  <section className="Main-Section">

   <div className="NotFound-Container">
    <h1>404</h1>

    <h2>Page Not Found</h2>

    <p>
     The page you are looking for does not exist or may have been moved.
    </p>

    <Link
     to="/"
     className="NotFound-Button"
    >
     Return Home
    </Link>

   </div>

  </section>
 );
}

export default NotFound;