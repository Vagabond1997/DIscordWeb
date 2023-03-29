
import React from "react";
import Navbar from "./navbar";
import Header from "./Header"
import HowWorks from "./HowWorks";
import Aboutus  from "./Aboutus";
import Services from "./services";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Merch from "./Merch";
import Caron from "./carousel";


const App = () => {
  return <>
   <Navbar/>
   {/* <Header/> */}
   <Caron/>
   {/* <Carousel/> */}
   {/* <HowWorks/> */}
   <Aboutus/>
   <Gallery/>
   <Merch/>
   <Services/>
   {/* <Contact/> */}
   <Footer/>
  </>;
};


export default App;

