import React, { useState } from "react";
import ReactPlayer from "react-player";
import howtouse from "./API/howtouse.js";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howtouse);
  return (
    <div>
      <section className="common-section our-services">
        <div className="container mb-5">
        <h1 className="main-heading text-center fw-bold">
            RELEASED RECORDS
          </h1>
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
              <img src="./images/img003.jpeg" alt="aboutusImg" />
              <h1 className="main-headzing">Album art by Anjila Manandhar</h1>
            </div>
            {/*1 section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">

            
               
              <div className="video-container">
      <iframe
        className="video-frame"
        src="https://www.youtube.com/embed/EYv8KNC7vPw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
      ></iframe>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <h2 className="main-headoing text-center">Mixed and Mastered By Sushil Manandhar(Rollling Studio)<br/>
    Released by Lower Class kid Records</h2>
                 
      

              <br />
              {/* <button className="btn-style btn-style-border">
                learn more{" "}
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/*2nd section right side data  */}

      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
              <img src="./images/merch123.jpg" alt="aboutusImg" />
              <h1 className="main-headzing">Album art by Meloo</h1>
            </div>
            {/*1 section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">

            
               
              <div className="video-container">
      <iframe
        className="video-frame"
        src="https://www.youtube.com/embed/w0rwT8FCS1E"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
      ></iframe>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <h2 className="main-headoing text-center">Mixed and Mastered By Saurav Tamrakar<br/>
    Released by Gurkha Commando Blast Team Records</h2>
                 
      

              <br />
              {/* <button className="btn-style btn-style-border">
                learn more{" "}
              </button> */}
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Aboutus;
