import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../../Styles/events.css";
import events from "../../data/events.json";
import { Link } from "react-router-dom";

const Events = () => {
  console.log(events);
  console.log(Object.keys(events));
  console.log(events["AI Workshop"]["day"]);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="events-event-card" data-aos="fade-up">
      <div className="upcoming-events" data-aos="fade-down">
        <p>Events</p>
        <div className="scroll-icon" data-aos="fade-left">
          &#8595;
        </div>
      </div>

      <div className="events-event-images">
        {Object.keys(events).map((title, index) => {
          let event = events[title]          
          return(
          <div className="image-item" data-aos="zoom-in" data-aos-delay={index * 100} key={index}>
            <Link to={`/events/${title}`}>
              <img src={event.image} alt={title} className="events-event-image" />
            </Link>
            <div className="events-event-details">
              <p className="events-event-name">{title}</p>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Events;
