import React from "react";
import rsr from "../images/rsr.png";
import epikurean from "../images/epikurean.png";
import gulfoil from "../images/gulfoil.png";



function Portfolio() {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={rsr} alt="RSR project" />
                        <div className="overflow"></div>
                    </div>
                {/* - */}
               
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={epikurean} alt="Epikurean project" />
                        <div className="overflow"></div>
                    </div> 
           
                {/* - */}

                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={gulfoil} alt="Gulfoil project" />
                        <div className="overflow"></div>
                    </div>
                </div>
                {/* - */}
            </div>
        </div>
    )
}

export default Portfolio