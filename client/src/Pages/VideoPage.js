import React, { useState }  from 'react';
import Navbar from '../navbar';
import Footer from '../Footer';
import videoapi from '../API/videoapi';

function VideoPage() {
    const [serviceData, setServiceData] = useState(videoapi);
    return(
        <div>
            <Navbar></Navbar>
            <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Video Gallery 
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
                // object destructuring
                const{id, URL} = curElem;
              return (
                <>
                  <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                    <iframe src={URL} alt="pic"/>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
             <Footer></Footer>
    </div>

    )
}

export default VideoPage;