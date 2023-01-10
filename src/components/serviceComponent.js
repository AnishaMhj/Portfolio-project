import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import ServiceBlock from './serviceBlock';

const servicesData = [
    {
        title: 'Web Design',
        desc: 'I approach each project individually and always focus on the result.'
    },
    {
        title: 'Web Development',
        desc: 'Your website will be build with a new proven technologies.'
    }
];

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My services</h1>
            <div className="container">
                <div className="row">
                    {servicesData.map((data) =>
                        <ServiceBlock />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Services
