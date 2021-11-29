import React from 'react';
import mehedi from "../../../images/mehedi-removebg-preview.png"
import "./Banner.css"
const Banner = () => {
    return (
        <div>
            <div className="container d-flex row p-5 align-item-center justify-content-center">
                <div className="col-md-5 p-5 rounded-circle  border-3 border-white">

                    <img className="img-fluid mehedi" src={mehedi} alt="" />

                </div>
                <div className="col-md-5">
                    <div className="about-me text-align-left">

                        <small>Junior Web Developer</small><br />
                        <h1>Mehedi Hasan</h1><br />
                        <p className="text-align-left">Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p><br />
                    </div>
                    <div className="d-flex row">
                        <div className="btn-container col">
                            <div className="center">
                                <button className="btn">
                                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                                    </svg>
                                    <span>Download CV</span>
                                </button>
                            </div>
                        </div>
                        <div className="btn-container col ms-0">
                            <div className="center">
                                <button className="btn">
                                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                                    </svg>
                                    <span>Contact</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;