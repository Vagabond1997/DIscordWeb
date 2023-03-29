import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand" href="#">
            <img src="images/myproject.png" alt="logo" className="img-fluid"/>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            //   onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                   
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/videos">
                    Videos
                  </a>
                </li>
                <li class="nav-item" game="rese">
                  <a class="nav-link" game="rese" href="/aboutus">
                    About
                  </a>
                </li>
                <li class="nav-item" game="rese">
                  <a class="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
              <form class="d-flex">
              <a href="https://www.facebook.com/DISCORDx">
                                <i className="fab fa-facebook-f fontawesome-style"></i>
                            </a>
                            <a href="https://www.youtube.com/@discordgrind8885">
                                <i className="fab fa-youtube fontawesome-style"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram fontawesome-style"></i>
                            </a>

              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
