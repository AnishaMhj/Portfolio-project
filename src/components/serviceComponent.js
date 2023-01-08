import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";


const serviceDetail = [
    {
        title: 'Web Design',
        desc: 'I approach each project individually and always focus on the result.'
    },
    {
        title: 'Web Development',
        desc: 'Your website will be build with a new proven technologies.'
    }
]

const Services = (props) => {
    // const serV = props.servi;
    return (
        <div id="services" className="services">
            <h1 className="py-5">My services</h1>
            <div className="container">
                <div className="row">
                    {/* {props.serviceDetail.map(serv)} */}
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                            </div>
                            <h3>Web Design</h3>
                            <p>I approach each project individually and always focus on the result.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Services
