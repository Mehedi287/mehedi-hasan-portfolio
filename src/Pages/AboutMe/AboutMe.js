import React from 'react';
import "./AboutMe.css"
import mededi2 from "../../images/mehedi2.jpg"
const AboutMe = () => {
    return (
        <>
            <div className="container mt-5 p-4">
                <div className="container d-flex row g-3">
                    <div className="col-md-5 p-3 ">
                        <img className="img-fluid rounded mehedi2" src={mededi2} alt="" />
                    </div>
                    <div className="col-md-7 p-3">
                        <h1>This's Mehedi Hasan ,</h1>
                        <small>Junior web developer </small>
                        <p className="text">
                            I am a simple man who is trying to learn something every moment. I am learning font-end web development with the  Programming Hero community. I always love to upgrade myself to new programming skills. I try created and designed a super responsive website. I have one year experience with ,HTML,CSS,JS,React Router.
                            ,</p>
                    </div>

                </div>
                <div className="container d-flex row g-3 mt-5 ms-md-5">
                    <div className="col-md-4 education p-3">
                        <h4>Education : </h4>
                        <h5>Diploma in Engineering at Brahmnbaria Polytechnic Institute</h5>
                        <ul>
                            <li>
                                Computer Technology
                            </li>
                            <li>
                                Third semester
                            </li>
                        </ul>
                        <h5>Morjal K.M.B hight school(SSC)</h5>
                        <ul>
                            <li>
                                Science
                            </li>
                            <li>
                                GPA 4.39
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-4 education p-3">
                        <h3>Interest</h3>
                        <ul>
                            <li>Learning</li>
                            <li>Coding</li>
                            <li>Programming</li>
                            <li>Playing</li>
                        </ul>
                    </div>
                    <div className="col-md-4 education p-3">
                        <h4>Skills</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>React Router</li>
                            <li>Firebase</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;