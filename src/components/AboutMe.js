import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12 ">
                    <div className="photo-wrap mb-5">
                        <img className="profileImg" src={author} alt="author.." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12 ">
                    <h1 className="about-heading">About me</h1>
                    <p>Hello!!</p>
                    <p>I'm a Master of Information Systems graduate eager to contribute as a Web Developer. Enthusiastic,  flexible, and a learner, always open to feedback.

</p>

                </div>
            </div>
        </div>
    )
}

export default AboutMe
