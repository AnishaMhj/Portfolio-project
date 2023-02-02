import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
// import Services from "./components/Services";
import Services from "./components/serviceComponent";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts.js";
import Footer from "./components/Footer.js";


// import Particles from "react-particles-js";

function App() {
  return (
    <div>
      {/* 
      <Particles
        className="particles-canvas"
        params={{
          Particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      /> */}
      {/* <PreLoader /> */}
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </div>


  );
}

export default App;