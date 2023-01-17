import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function serviceBlock({ value: { fontIcon, serviceTitle, serviceDescription } }) {
    // const { title, desc } = data;
    // console.log(props);
    return (
        <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="box">
                <div className="circle">
                    <FontAwesomeIcon className="icon" icon={fontIcon} size="2x" />

                </div>
                <h3>{serviceTitle}</h3>
                <p>{serviceDescription}</p>
            </div>
        </div>
    )
}
