import React, { useEffect, useState } from 'react';
import "./MyProjects.css"
import tesla from "../../../images/tesla.png"
import health from "../../../images/health-care.png"
import slider from "../../../images/create-slider.png"
import mak from "../../../images/mack-book.png"
import ProjectCart from '../ProjectCart/ProjectCart';
const Myservices = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("./FakeData.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);
    const handleOnclick = () => {

    }
    return (
        <div className="mt-5">
            <h1>My Projects {projects.length}</h1>
            <hr />

            <div className="container project-container">

                {
                    projects.slice(0, 4).map(project => <ProjectCart className="col" project={project} key={project.id}></ProjectCart>)
                }


            </div>

        </div>
    );
};

export default Myservices;