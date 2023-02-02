import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <section id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Web development and website promotions</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                {/* <a href="#" className="btn-main-offer">Contact me</a> */}
            </div>
        </section>
    )
}

export default Header;
