import React from 'react';
import "./MySkills.css"
import video2 from "../../../images/video2.gif"
const MySkills = () => {
    return (
        <div>
            <h1 data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2500"> <span className="my">My</span> <span className="skills">Skills</span></h1>

            <hr className="mb-5 hr1" data-aos="zoom-in" data-aos-duration="2500" />
            <div className="container d-flex row mx-auto p-4 " >
                <div className="col-md-5 ">
                    <div className="me-md-4 mb-3 pt-md-4">
                        <video
                            muted
                            autoPlay={"autoplay"}
                            preLoad="auto"
                            loop data-aos="fade-up"
                            data-aos-duration="2000" height="400px" className='img-fluid w-100 rounded-md '  >
                            <source src="https://cdn.dribbble.com/users/285475/videos/16198/instagram.mp4" type="video/mp4" />
                        </video>

                    </div>

                </div>
                <div data-aos="fade-up"
                    data-aos-duration="2000" className="col-md-7 p-4 rounded animation-img">
                    <div className="d-flex row g-4">
                        <div className="col-md-3 col-6">
                            <div className="skill" data-aos="zoom-in-up" data-aos-duration="1800">
                                <img className="img-fluid w-30" src="https://image.flaticon.com/icons/png/512/246/246185.png" alt="" />
                                <h6 className="m-2">HTML</h6>
                            </div>

                        </div>
                        <div className="col-md-3 col-6">
                            <div className="skill" data-aos="zoom-in-down" data-aos-duration="1800">
                                <img className="img-fluid w-30" src="https://image.flaticon.com/icons/png/512/919/919826.png" alt="" />
                                <h6 className="m-2">CSS</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="skill" data-aos="zoom-in-left" data-aos-duration="1800">
                                <img className="img-fluid w-30" src="https://image.flaticon.com/icons/png/512/919/919828.png" alt="" />
                                <h6 className="m-2">JS</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="skill" data-aos="zoom-in-right" data-aos-duration="1800">
                                <img className="img-fluid w-30" src="https://image.flaticon.com/icons/png/512/919/919851.png" alt="" />
                                <h6 className="m-2">React</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="skill" data-aos="zoom-in-right" data-aos-duration="1800">
                                <img className="img-fluid w-30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGOcsol5dozKeGqpVLC13viYimp-07xdOZA&usqp=CAU" alt="" />
                                <h6 className="m-2">MongoDB</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="skill" data-aos="zoom-in-down" data-aos-duration="1800">
                                <img className="img-fluid w-30" src="https://as1.ftcdn.net/v2/jpg/01/39/48/46/1000_F_139484626_cqPNhvfRtWrNMNmuSeBMBiCUkPJTzgjS.jpg" alt="" />
                                <h6 className="m-2">Bootstrap</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="skill" data-aos="zoom-in-up" data-aos-duration="1800">
                                <img className="img-fluid w-30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lLPsptpx5Dt_JSQzjCreddEweRBNUShVvQ&usqp=CAU" alt="" />
                                <h6 className="m-2">MongoDB</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="skill" data-aos="zoom-in-left" data-aos-duration="1800">
                                <img className="img-fluid w-30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX7p-_Zo1LqsEfO1v3B6Zw0Jgvhk4vo1fKA&usqp=CAU" alt="" />
                                <h6 className="m-2">Express JS</h6>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default MySkills;