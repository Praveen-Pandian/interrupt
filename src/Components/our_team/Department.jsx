import React from "react";
import TeamCard from "./TeamCard";
import "../../Styles/our_team.css";

const DepartmentSection = ({ departmentName, teamLead, teamMembers }) => {
  return (
    <div className="department" data-aos="flip-left">
      <h2>
        <center>{departmentName}</center>
      </h2>
      {teamLead.length > 0 && (
        <div className="team-lead">
          {teamLead.map((item) => {
            return (
              <>
                {
                  teamLead.length === 1 && <br/>
                }
                <TeamCard {...item} />
              </>
            );
          })}
        </div>
      )}
      {teamMembers.length > 0 && (
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DepartmentSection;
