import React from "react";
import rsr from "../images/rsr.png";
import epikurean from "../images/epikurean.png";
import gulfoil from "../images/gulfoil.png";

//Font Awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

//React popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

     /* RSR
    =============================*/

    const openPopupboxRsr = () => {

        const content = (
            <>
            <img className="portfolio-image-popupbox" src={rsr} alt="RSR project" />
                <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. </p>
                <b>Demo:</b> <a className="hyperlink" onClick = {() => window.open("https://www.rsr.com.np/", "_blank")}>https://www.rsr.com.np/</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigRsr = {
        titleBar: {
            enable: true,
            text: "Rsr Website link"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    
    /* EPIKUREAN
    =============================*/

    const openPopupboxEpikurean = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={epikurean} alt="RSR project" />
                <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. </p>
                <b>Demo:</b> <a className="hyperlink" onClick = {() => window.open("https://epikureanresorts.com/", "_blank")}>https://epikureanresorts.com/</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigEpikurean = {
        titleBar: {
            enable: true,
            text: "Epikurean Resorts Website link"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    /* GULF OIL
    =============================*/

    const openPopupboxGulfoil = () => {

        const content = (
            <>
            <img className="portfolio-image-popupbox" src={gulfoil} alt="RSR project" />
                <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. </p>
                <b>Demo:</b> <a className="hyperlink" onClick = {() => window.open("http://nepallubeoil.com/", "_blank")}>http://nepallubeoil.com/</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigGulfoil = {
        titleBar: {
            enable: true,
            text: "Gulf Oil Website link"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }



    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick = {openPopupboxRsr}>
                        <img className="portfolio-image" src={rsr} alt="RSR project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
               
                    <div className="portfolio-image-box" onClick = {openPopupboxEpikurean}>
                        <img className="portfolio-image" src={epikurean} alt="Epikurean project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div> 
           
                {/* - */}

                    <div className="portfolio-image-box" onClick = {openPopupboxGulfoil}>
                        <img className="portfolio-image" src={gulfoil} alt="Gulfoil project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box"onClick = {openPopupboxEpikurean}>
                        <img className="portfolio-image" src={epikurean} alt="Epikurean project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div> 
           
                {/* - */}
                </div>
               

                
            </div>
            <PopupboxContainer {...popupboxConfigRsr} />
            <PopupboxContainer {...popupboxConfigEpikurean} />
            <PopupboxContainer {...popupboxConfigGulfoil} />
        </div>
    )
}

export default Portfolio;
