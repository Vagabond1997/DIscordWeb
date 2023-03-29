import React, { useState } from "react";
import galleryapi from "./API/galleryapi.js";

const Gallery = () => {
  const [serviceData, setServiceData] = useState(galleryapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Photo Gallery 
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
                // object destructuring
                const{id, img} = curElem;
              return (
                <>
                  <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                    <img src={img} alt="pic" className="img-fluid"/>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;


