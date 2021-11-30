import React from 'react';
import { Link } from 'react-router-dom';
import mehedi from "../../../images/mehedi-removebg-preview.png"
import "./Banner.css"
const Banner = () => {
    return (
        <div className="mb-5">
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

                                <button class="button-24" role="button"><a className="text-decoration-none text-white" target="_blank" href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F13WjZZaGB1NpyGWEiHsafOhmBNnIP4p9l%2Fview%3Fusp%3Dsharing%26fbclid%3DIwAR2JffIXDPHSPbAZuanKhjNQsvHHLZbDbxIgBVRD7h_QjylxfeLSJ46tnaM&h=AT3giUC3ojcoDGi0TR5bNFjVFzOtQNxC5kU9Uj1ZWwruQtGWNE5bz-q84U42ZAHhKeLKq3_btLA5JEh0bvBrJRZuHKNMEMmaU5sDhcqyB0vl6dGEKGvwsuGGWFrMmyUr_GEJ2w">Download Resume</a></button>
                            </div>
                        </div>
                        <div className="btn-container col ms-0">
                            <button class="button-24" role="button"> <a href="#contact" className="text-decoration-none text-white">Contact</a> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;