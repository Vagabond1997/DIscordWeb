import React, { useState } from "react";
import merchapi from "./API/merchapi.js";

const Merch = () => {
  const [serviceData, setServiceData] = useState(merchapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Band Merch 
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
        <button className="btn-stylez btn-style-border">
                SHOP NOW
              </button>
      </section>
      
    </>
  );
};

export default Merch;


