import React from "react";
import "../../Styles/our_team.css";

const TeamCard = ({ name, role, image, linkedin, year, dept }) => {
  return (
    <div className="card" data-aos="zoom-in">
      <img src={image} alt={name} />
      <div className="name-role" data-aos="flip-down">
        <div className="name">{name}</div>
        <div className="role">{role}</div>
        <div className="year-dept">
          {year} Year, {dept}
        </div>
      </div>
      {/* <div className="social-links">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div> */}
    </div>
  );
};

export default TeamCard;
