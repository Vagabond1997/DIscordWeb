import React from 'react';
import Footer from '../Footer';
import Navbar from '../navbar';

function AboutPage() {
    return(
        <div>
            <Navbar></Navbar>
        <section className='container main-zero-container'>
            <div className='row'>
                <div className='col-12 col lg-6 d-flex justify-content-center align-items-center main-zerosection-images'>
                    <img src='./images/img61.jpg' alt='heroimg' className='img-fluid'></img>
                </div>
                <h1 className="main-headzing text-center">Biography</h1>
                <p className='main-zero-para  text-center'>
                'Discord' a grindcore band from Bhaktapur, was formed in 2016 with Keroz on vocals, Uzwal on guitars, Zaman on bass, and Bikesh on drums later Ridesh joined the band on 2019.
                 Grindcore with hardcore overtones is the band's style. They've established themselves as a committed, passionate, and tight band, performing original songs with lyrics dealing with societal stigmas, political dishevelment, corruption, freedom, and other social concerns. 
                 They've carved out a name for themselves in the Nepal Metal Scene.
                  Discord released its debut album record called "Blood, Sweat & Grind" on 2020 from Lower Class kid Records, Germany & Demo 2020 on GCBT(Gurkha Commando Blast Team) records, U.S.A.
                </p>
                <Footer></Footer>
            </div>

        </section>
        </div>
    )
}

export default AboutPage;