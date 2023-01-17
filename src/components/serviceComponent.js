import React from "react";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import ServiceBlock from './serviceBlock';

const servicesData = [
    {
        fontIcon: faDesktop,    //icons as name not string
        serviceTitle: 'Web Design',
        serviceDescription: 'I approach each project individually and always focus on the result.'
    },
    {
        fontIcon: faFileCode,
        serviceTitle: 'Web Development',
        serviceDescription: 'Your website will be build with a new proven technologies.'
    },
    {
        fontIcon: faFacebookF,
        serviceTitle: 'Facebook Ads SMM',
        serviceDescription: 'Your potential clients will see your services or product on Facebook.'
    },
    {
        fontIcon: faGoogle,
        serviceTitle: 'Google Ads',
        serviceDescription: 'Your service or product will appear at the top of the Google search.'
    }
];

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My services</h1>
            <div className="container">
                <div className="row">
                    {/* 'data' denotes the 1st object of the  loop */}
                    {servicesData.map((data) =>
                        <ServiceBlock value={data} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Services
