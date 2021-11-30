import React from 'react';
import "./MyService.css"
const MyService = () => {
    return (
        <div className="mt-5">
            <h1><span className="my2">My</span> <span className="ser">Services</span></h1>
            <hr className="mb-5 hr3" />
            <div className="d-flex row g-4 mx-auto">
                <div className="col-md-4 ">
                    <div className="service">
                        <img className="img-fluid w-50" src="https://image.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="" />
                        <h5 className="m-2">Web Design</h5>
                        <p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design</p>
                    </div>
                </div>
                <div className="col-md-4 mx-auto">
                    <div className="service">
                        <img className="img-fluid w-50" src="https://image.freepik.com/free-vector/software-developers-working-script-coding-engineer-character-programming-php-python-javascript-other-languages_90220-243.jpg" alt="" />
                        <h5 className="m-2">Web Development</h5>
                        <p>Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                    </div>
                </div>
                <div className="col-md-4 mx-auto">
                    <div className="service">
                        <img className="img-fluid w-50" src="https://image.freepik.com/free-psd/multi-device-responsive-mockup_106244-1609.jpg" alt="" />
                        <h5 className="m-2">Responsive  Design</h5>
                        <p>Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, media queries.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyService;