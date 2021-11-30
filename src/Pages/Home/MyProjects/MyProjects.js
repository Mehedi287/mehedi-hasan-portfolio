import React, { useEffect, useState } from 'react';
import "./MyProjects.css"

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
            <h1>My <span className="pro">Projects</span></h1>
            <hr className="mb-5 hr4" />

            <div className="container project-container">

                {
                    projects.slice(0, 4).map(project => <ProjectCart className="col" project={project} key={project.id}></ProjectCart>)
                }


            </div>

        </div>
    );
};

export default Myservices;