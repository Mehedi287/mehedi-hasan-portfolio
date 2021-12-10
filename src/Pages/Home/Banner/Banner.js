import React from 'react';
import { Link } from 'react-router-dom';
import mehedi from "../../../images/mehedi-removebg-preview.png"
import "./Banner.css"
const Banner = () => {
    return (
        <div className="mb-5">
            <div className="container d-flex row p-5 align-item-center justify-content-center">
                <div className="col-md-5 p-5 rounded-circle  border-3 border-white" >
                    <img className="img-fluid mehedi" src={mehedi} alt="" data-aos="fade-up"
                        data-aos-duration="2000" />
                </div>
                <div className="col-md-5">
                    <div className="about-me text-align-left" data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="2000"  >

                        <small>Junior Web Developer</small><br />
                        <h1 className="name"> <span class="m">M</span>ehedi Hasan</h1><br />
                        <p className="text-align-left">I am a simple man who is trying to learn something every moment. I am learning font-end web development with the  Programming Hero community. I always love to upgrade myself to new programming skills. I try created and designed a super responsive website. I have one year experience with ,HTML,CSS,JS,React Router.</p><br />
                    </div>
                    <div className="d-flex row g-4">
                        <div className="col-md-4 ">
                            <a className="text-decoration-none" href="mehedihasan@gmail.com">
                                <i class=" icon fas fa-envelope"></i>
                            </a>
                        </div>
                        <div className="col-md-4 ">
                            <a href="https://github.com/Mehedi287">
                                <i class="icon fab fa-github"></i>
                            </a>
                        </div>
                        <div className="col-md-4 ">
                            <a href="https://www.linkedin.com/in/mehedi-hasan-617040227">
                                <i class="col-md-4 icon fab fa-linkedin"></i>
                            </a>
                        </div>



                    </div>
                    <div className="d-flex row m-3">
                        <div className="btn-container col">
                            <div className="center m-2">

                                <button class="button-24" role="button" data-aos="zoom-out-right" data-aos-duration="1000"><a className="text-decoration-none text-white" target="_blank" href="https://drive.google.com/file/d/13WjZZaGB1NpyGWEiHsafOhmBNnIP4p9l/view?usp=sharing">Download Resume</a></button>
                            </div>
                        </div>
                        <div className="btn-container col ms-0 m-2">
                            <button class="button-24" role="button" data-aos="zoom-out-left" data-aos-duration="1000"> <a href="#contact" className="text-decoration-none text-white">Contact</a> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;