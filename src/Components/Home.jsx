import { useEffect } from "react";
import "../styles/home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Interrupt from "../assets/interrupt.png";
import Countdown from "./Countdown";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="homepage-container" id="home">
      <div className="home-content">
        <div className="content" data-aos="flip-right">
          <h1>Welcome to Interrupt '25</h1>
          <h2>
            The Annual Technical Fest of ACE, <br /> Sri Venkateswara College of
            Engineering
          </h2>
          <h2> 21th February 2025,</h2>
          <p>
            Craving excitement? You're in the perfect spot! Interrupt, our
            flagship techfest, is designed to ignite the passion and intellect
            of students from colleges
          </p>
          <a href="/events">Explore Events</a>
        </div>

        <div className="image" data-aos="zoom-in">
          <img src={Interrupt} alt="about interrupt" />
        </div>
      </div>
      {<Countdown />}
      {<About />}
      {<Footer />}
    </div>
  );
}
