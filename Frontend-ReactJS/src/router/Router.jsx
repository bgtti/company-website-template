import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
// Pages
import Home from '../pages/Home/Home';
import About from "../pages/About/About";
import WhatWeDo from "../pages/WhatWeDo/WhatWeDo";
import Impressum from "../pages/Impressum/Impressum";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Contact from "../pages/Contact/Contact";

const Router = () => {
 //Loader
 const loaderDisplay = useSelector((state) => state.loader.display);

 return (
  <BrowserRouter>
   {loaderDisplay ? <Loader></Loader> : ""}
   <Header />
   <Routes>
    <Route index element={<Home />} />
    <Route exact path="/" element={<Home />} />
    <Route exact path="what-we-do" element={<WhatWeDo />} />
    <Route exact path="about" element={<About />} />
    <Route exact path="contact" element={<Contact />} />
    <Route exact path="impressum" element={<Impressum />} />
    <Route exact path="privacy-policy" element={<PrivacyPolicy />} />
   </Routes>
   <Footer />
  </BrowserRouter>
 )
}
export default Router