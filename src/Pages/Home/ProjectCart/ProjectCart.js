import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCart = (props) => {
    const { img1, id, liveLink } = props.project
    return (
        <div>

            <div className="service w-100">

                <img className="img-fluid mb-2" src={img1} alt="" />

                <div className="d-flex g-2 btn-container">
                    <Link className="text-decoration-none" to={`/details/${id}`}>
                        <button class="button-24 " role="button">Details</button>
                    </Link>
                    <a className="text-decoration-none" href={liveLink}>
                        <button class="button-24 ms-2" role="button ms-2">Preview</button>
                    </a>
                </div>



            </div>
        </div >
    );
};

export default ProjectCart;