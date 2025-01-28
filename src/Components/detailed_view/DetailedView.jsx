import React from 'react';
import '../../Styles/detailed_view.css';
import events from "../../data/events.json"
import { useParams } from 'react-router-dom';

const DetailedView = () => {

  const params = useParams();
  const title = params.id;

  const event = events[title];

  console.log(import.meta.env.PUBLIC_URL);
  
  

  return (
    <section className="event-details">
      <div className="card-container">
        <div className="event-card">
          {/* Event Title */}
          <h1 className="event-title">{title}</h1>

          <div className="new-container">
            <div className="poster-container">
              <img src={"../"+event.image} alt="Event Poster" className="poster-image" />
            </div>
            <div className="content-container">
              <p>📍 <strong>Venue:</strong> {event.venue}</p>
              <p>📅 <strong>Date:</strong> {event.date}</p>
              <p>⏳ <strong>Timing:</strong> {event.time}</p>
            </div>
          </div>

          {/* Prizes Section */}
          <div className="prizes-container">
            <div className="prizes">
              <h3>🏅 Prizes 🏅</h3>
              <div className="prize-icons">
                <div className="prize gold">
                  <span role="img" aria-label="gold-medal">🥇</span>
                  <p><strong>&#8377;{event.prize.Winner}</strong> </p>
                </div>
                <div className="prize silver">
                  <span role="img" aria-label="silver-medal">🥈</span>
                  <p><strong>&#8377;{event.prize["Runner Up"]}</strong></p>
                </div>
                <div className="prize bronze">
                  <span role="img" aria-label="bronze-medal">🥉</span>
                  <p><strong>&#8377;{event.prize["2nd Runner Up"]}</strong></p>
                </div>
              </div>
            </div>
          </div>


          <div className="event-info">
            {event.description}
          </div>

          {/* Register Button and Contact Info */}
          <div className="registration-container">
            <div className="registration">
              <a href={event.form} target='_blank'>Register Now</a>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <p><strong>Contact:</strong></p>
              {
                Object.keys(event.contact).map((item) => (
                  <p style={{textIndent:"20px"}}>{item}: {event.contact[item]}</p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedView;
