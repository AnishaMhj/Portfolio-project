import React from "react";
import {
    FacebookIcon, FacebookShareButton,
    TwitterIcon, TwitterShareButton,
    LinkedinIcon, LinkedinShareButton
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Harrison 2914, Canberra, Australian Capital Teritory</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:0455 555 555 ">+67 0455 555 555 </a>
                        </div>
                        <div className="d-flex">
                            <p>anishamhrzn47@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a href="#" className="footer-nav">Home</a> <br />
                                <a href="#" className="footer-nav">About-me</a> <br />
                                <a href="#" className="footer-nav">Services</a> <br />
                            </div>
                            <div className="col">
                                <a href="#" className="footer-nav">Experience</a> <br />
                                <a href="#" className="footer-nav">Portfolio</a> <br />
                                <a href="#" className="footer-nav">Contacts</a> <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">

                            {/* Share button functions is used to share the developers linked content to the viewer's twitter, facebook and linkedin.
                        Need to add icons just for visiting the developer's social media pages.
                    */}
                            <FacebookShareButton
                                url={"https://twitter.com/home?lang=en"}
                                quote={"Developer Programmer"}
                                hashtag="#javascript"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={"https://twitter.com/home?lang=en"}
                                quote={"Developer Programmer"}
                                hashtag="#javascript"
                            >
                                <TwitterIcon url={"https://twitter.com/home?lang=en"} className="mx-3" size={36} />
                            </TwitterShareButton>

                            <LinkedinShareButton
                                url={"https://twitter.com/home?lang=en"}
                                quote={"Developer Programmer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Anisha | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
