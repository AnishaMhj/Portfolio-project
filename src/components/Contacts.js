import React from "react";

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form and describe your project needs and 
                    I'll contact you as soon as possible. Thank you.</p>
            </div>      
            <div className="container">
                <div className="row">
                    <div className="col-md-6 cold-xs-12">
                        {/* Name input */}
                        <div className="text-center">
                            <input
                                id="name"
                                type="text"
                                className="form-control" 
                                placeholder="Name"
                                name="name"
                            />
                            <div className="line"></div>
                        </div>
                       
                        {/* Phone input */}
                        <div className="text-center">
                            <input
                                id="phone"
                                type="number"    
                                className="form-control" 
                                placeholder="Phone"
                                phone="phone"
                            />
                            <div className="line"></div>
                        </div>
                        
                        {/* Email input */}
                        <div className="text-center">
                            <input
                                id="email"
                                type="email"
                                className="form-control" 
                                placeholder="Email"
                                email="email"
                            />
                            <div className="line"></div>
                        </div>
                        
                        {/* Subject input */}
                        <div className="text-center">
                            <input
                                id="subject"
                                type="text"
                                className="form-control" 
                                placeholder="Subject"
                                subject="subject"
                            />
                            <div className="line"></div>    
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* Description input */}
                        <div className="text-center">
                            <textarea
                                id="description"
                                type="text"
                                className="form-control" 
                                placeholder="Description"
                                name="description"
                                // rows="6"
                            />
                            <div className="line"></div>
                        </div>
                       
                        <button
                            className="btn-main-offer contact-btn"
                            type="submit"
                        >Contact Me</button>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Contacts
