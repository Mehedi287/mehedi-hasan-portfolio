import React, { useEffect, useState } from 'react';
import { Carousel, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./Details.css"
const Details = () => {
    const [detailse, setDetailse] = useState([]);
    const { serviceId } = useParams();
    const serviceIdNum = parseInt(serviceId);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
                const d = data.filter(detail => detail.id === serviceIdNum);
                setDetailse(d[0])
            })

    }, []);

    const { img1, img2, img3, details, name, id, clientSide, serverSiteLink, clientLink, liveLink, Hosting, database } = detailse;


    return (
        <div className=" p-md-2 mt-sm-4 mx-auto" >
            <h1>Project Details</h1>
            <div className="details">
                <div className="">
                    <Carousel className="w-50 mx-auto">
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt=""
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                    </Carousel></div>
                <h3 className="m-3">Name:{name}</h3>
                <div className="w-50 mx-auto m-3">
                    <p>{details}</p>
                </div>
                <div className="w-50 mx-auto">
                    <h5>Technology:</h5>
                    <ul>
                        <li>{clientSide}</li>
                        <li>{database}</li>
                        <li>{Hosting}</li>

                    </ul>
                </div>
                <div className="">
                    <a href={liveLink}>
                        <button className="btn btn-primary m-2">Preview</button>
                    </a>
                    <a href={clientLink}>
                        <button className="btn btn-primary m-2">Client Side Code Link</button>
                    </a>
                    <a href={serverSiteLink}>
                        <button className="btn btn-primary m-2">Server Side Code Link</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Details;


