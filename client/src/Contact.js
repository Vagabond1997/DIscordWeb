import React from 'react';

const Contact = () => {
    return <>
    <section className='contactus-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                  <div className='row'>
                  <div className='contact-leftside col-12 col-lg-5'>
                        <h1 className='main-heading fw-bold'>
                            Connect With Our <br /> Sales Team.
                        </h1>
                        {/* <p className='main-hero-para'>
                        Lorem ipsum, dolor sit amet consectetur adipiscing elit . Etquia quis?Lorem ipsum, dolor sit amet consectetur adipiscing elit . Etquia quis?  
                        </p> */}
                        <figure>
                            <img src="./images/img320.jpg" alt="contactUsImg" className='img-fluid'></img>
                        </figure>
                    </div>
                    {/* right side contact form  */}
                <div className='contact-rightside col-12 col-lg-7'>
                    <form method='POST'>
                        <div className='row'>
                        <div className='col-12 col-lg-6 contact-input-field'>
                            <input
                            type='text'
                            name='firstname'
                            id=''
                            
                            placeholder='First Name'
                            className='form-control'
                            />
                        </div>
                        <div className='col-12 col-lg-6 contact-input-field'>
                            <input
                            type='text'
                            name='lastname'
                            id=''
                          
                            placeholder='Last Name'
                            className='form-control'
                            />
                        </div>
                        </div>
                        <div className='row'>
                        <div className='col-12 col-lg-6 contact-input-field'>
                            <input
                            type='text'
                            name='phone'
                            id=''
                            
                            placeholder='Phone Number'
                            className='form-control'
                            />
                        </div>
                        <div className='col-12 col-lg-6 contact-input-field'>
                            <input
                            type='text'
                            name='email'
                            id=''
                           
                            className='form-control'
                            placeholder='Email ID'
                            />
                        </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 contact-input-field'>
                                <input type='text' name='address' id=''   className='form-control' placeholder='Add Address'/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 contact-input-field'>
                                <input type='text' name='message' id=''    className='form-control' placeholder='Enter Your Message'/>
                            </div>
                        </div>
                        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label class="form-check-label" 
  className='main-hero-para'>
I agree that the pay may contact me at the 
email address or phone number above.
  </label>
</div>
    <button type='submit' className='btn btn-style w-100'>
        Submit
    </button>
                    </form>
                </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
    </>;
};

export default Contact;