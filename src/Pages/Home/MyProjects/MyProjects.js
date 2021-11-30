import React from 'react';
import "./MyProjects.css"
import tesla from "../../../images/tesla.png"
import health from "../../../images/health-care.png"
import slider from "../../../images/create-slider.png"
import mak from "../../../images/mack-book.png"
const Myservices = () => {
    return (
        <div className="mt-5">
            <h1>My Projects</h1>
            <hr />
            <div className="container d-flex row g-2 g-md-4 mx-auto">
                <div className="col-md-6 ">
                    <div className="service w-100">

                        <img className="img-fluid mb-2" src={tesla} alt="" />

                        <div className="d-flex g-2 btn-container">
                            <button class="button-24 " role="button">Details</button>
                            <button class="button-24 ms-2" role="button ms-2">Preview</button>
                        </div>


                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service">
                        <img className="img-fluid mb-2" src={health} alt="" />
                        <div className="d-flex g-2 ">
                            <button class="button-24 " role="button">Details</button>
                            <button class="button-24 ms-2" role="button">Preview</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="service">
                        <img className="img-fluid mb-2" src={slider} alt="" />
                        <div className="d-flex g-2 ">
                            <button class="button-24 " role="button">Details</button>
                            <button class="button-24 ms-2" role="button">Preview</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="service">
                        <img className="img-fluid mb-2" src={mak} alt="" />
                        <div className="d-flex g-4 ">
                            <button class="button-24 " role="button">Details</button>
                            <button class="button-24 ms-2" role="button">Preview</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myservices;