import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "../../Styles/sponsors.css"; // Import custom CSS
import sponsors from "../../data/sponsors.json";

const Sponsors = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100, // Offset from the top of the viewport
      easing: "ease-in-out",
      once: true, // Animation happens only once
    });
  }, []);
  
  console.log(sponsors);
  
  
  return (
    <div className="sponsors-container">
      <h1>
        Our Sponsors
      </h1>
      <div className="sponsors-grid">
        {sponsors.sponsers.map((sponsor, index) => (
          <div
            key={index}
            className="sponsor-card"
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={`${sponsor.name} Logo`} />
            </a>
            <p>{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
