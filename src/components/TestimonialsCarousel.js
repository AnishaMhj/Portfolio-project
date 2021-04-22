import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Avatar imports
import avatar1 from "../images/avatars/avatar1.png";
import avatar2 from "../images/avatars/avatar2.png";
import avatar3 from "../images/avatars/avatar3.png";
import avatar4 from "../images/avatars/avatar4.png";



const TestimonialsCarousel = () => {
    return (
        <Carousel
         showArrows = {true}
         infiniteLoop = {true}
         showThumbs = {false}
         showStatus = {false}
         autoPlay = {true}
         interval = {4000}
        >
            <>
                <img src={avatar1} alt="John Doe 1" />
                <div className="myCarousel">
                  <h3>John Doe 1</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. </p>
                </div>               
             </>
             <>
                <img src={avatar2} alt="Jane Doe 1" />
                <div className="myCarousel">
                  <h3>Jane Doe 2</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. </p> 
                </div>              
             </>
             <>
                <img src={avatar3} alt="John Doe 2" />
                <div className="myCarousel">
                  <h3>John Doe 2</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. </p> 
                </div>             
             </>
             <>
                <img src={avatar4} alt="Jane Doe 2" />
                <div className="myCarousel">
                  <h3>Jane Doe 2</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. </p>
                </div>
              
             </>
        </Carousel>
    )
}

export default TestimonialsCarousel
