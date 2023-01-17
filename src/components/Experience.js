import React from "react";

const Experiences = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-Present</h3>
                        <h4>Frontend Developer</h4>
                        <h5>Self Learner/ Freelancer</h5>
                        <p>Working as a freelancer. Learned Next.js and built clone projects for Airbnb, Personal Portfolio (Under Construction). Integrated Tailwind CSS, Calendar Picker, Mapbox, and more.
                            ​Worked with  Styled Components, MongoDB. </p>
                    </div>

                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020</h3>
                        <h4>React Developer Inter</h4>
                        <h5>Pulp You Media</h5>
                        <p>Worked as a React Developer intern. Developed website for project "Inner Art Inner Soul".
                            Built website using React JS. Gathered data through web framework research. Integrated Github for project MVP. </p>
                    </div>

                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2018</h3>
                        <h4>Frontend Developer</h4>
                        <h5>Pagoda Labs</h5>
                        <p>Worked as an intern for 6 months in 2016 and later joined the company as a Frontend Developer.
                        Built websites using HTML, CSS, and JavaScript. Also worked on content management system using WordPress and Concrete5.
                        Was responsible for maintaining websites, reporting the outcomes, and utilizing SDLC.  </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Experiences
