import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../navbar";
import Contact from "../Contact";
const baseApiUrl = "http://localhost:800/";
const ContactPage = () => {
  // const history = useHistory();
  //storing user registration form data
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
    console.log(setUser);
  };
  const PostData = async (e) => {
    e.preventDefault();
    //object destructing i.e writing name means getting value of user.name
    const { firstname, lastname, phone, email, address, message } = user;

    //using fetchapi

    const contactRegister = await fetch("http://localhost:800/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        phone,
        email,
        address,
        message,
      }),
    });

    //data perfectly contactRegister ma aairako xa ki xaina vanera check garna lai
    console.log(contactRegister.json());

    if (contactRegister.status === 422) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Sucessful Registration");

      // history.push("/videos");
    }
  };

  return (
    <>
      <Navbar />
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  {/* <p className='main-hero-para'>
                        Lorem ipsum, dolor sit amet consectetur adipiscing elit . Etquia quis?Lorem ipsum, dolor sit amet consectetur adipiscing elit . Etquia quis?  
                        </p> */}
                  <figure>
                    <img
                      src="./images/img320.jpg"
                      alt="contactUsImg"
                      className="img-fluid"
                    ></img>
                  </figure>
                </div>
                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form action="https://formspree.io/f/xvonbvbk" method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstname"
                          id=""
                          value={user.firstname}
                          onChange={handleInputs}
                          placeholder="First Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastname"
                          id=""
                          value={user.lastname}
                          onChange={handleInputs}
                          placeholder="Last Name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          value={user.phone}
                          onChange={handleInputs}
                          placeholder="Phone Number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          id=""
                          value={user.email}
                          onChange={handleInputs}
                          className="form-control"
                          placeholder="Email ID"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          id=""
                          value={user.address}
                          onChange={handleInputs}
                          className="form-control"
                          placeholder="Add Address"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="message"
                          id=""
                          value={user.message}
                          onChange={handleInputs}
                          className="form-control"
                          placeholder="Enter Your Message"
                        />
                      </div>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para"
                      >
                        I agree that the pay may contact me at the email address
                        or phone number above.
                      </label>
                    </div>
                    <button
                      type="submit"
                      value="register"
                      onClick={PostData}
                      className="btn btn-style w-100"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
