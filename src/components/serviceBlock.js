import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

export default function serviceBlock({ value: { title, desc } }) {
    // const { title, desc } = data;
    // console.log(props);
    return (
        <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="box">
                <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}
