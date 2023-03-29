import React, { useState } from "react";
import serviceapi from "./API/serviceapi.js";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
          Upcoming Shows 
          </h1>
          <div className="row">
          <div className='col-12 col lg-6 d-flex justify-content-center align-items-center main-werosection-images'>
                    <img src='./images/img555.jpg' alt='heroimg' className='img-fluid'></img>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
