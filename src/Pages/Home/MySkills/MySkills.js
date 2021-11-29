import React from 'react';
import "./MySkills.css"
import html from "../../../images/html_and_css-removebg-preview.png"
const MySkills = () => {
    return (
        <div>
            <h1>My Skills</h1>

            <hr />
            <div className="container d-flex row mx-auto p-4">
                <div className="col-md-5">
                    <img className="img-fluid w-75" src={html} alt="" />

                </div>
                <div className="col-md-7">
                    <div className="d-flex row g-4">
                        <div className="col-md-3">
                            <div className="skill">
                                <img className="img-fluid w-30" src="https://image.flaticon.com/icons/png/512/246/246185.png" alt="" />
                                <h6 className="m-2">HTML</h6>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="skill">
                                <img className="img-fluid w-30" src="https://image.flaticon.com/icons/png/512/919/919826.png" alt="" />
                                <h6 className="m-2">CSS</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="skill">
                                <img className="img-fluid w-30" src="https://image.flaticon.com/icons/png/512/919/919828.png" alt="" />
                                <h6 className="m-2">JS</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="skill">
                                <img className="img-fluid w-30" src="https://image.flaticon.com/icons/png/512/919/919851.png" alt="" />
                                <h6 className="m-2">React</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="skill">
                                <img className="img-fluid w-30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGOcsol5dozKeGqpVLC13viYimp-07xdOZA&usqp=CAU" alt="" />
                                <h6 className="m-2">MongoDB</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="skill">
                                <img className="img-fluid w-30" src="https://as1.ftcdn.net/v2/jpg/01/39/48/46/1000_F_139484626_cqPNhvfRtWrNMNmuSeBMBiCUkPJTzgjS.jpg" alt="" />
                                <h6 className="m-2">MongoDB</h6>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default MySkills;