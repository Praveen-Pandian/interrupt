import React, { useEffect } from 'react';
import teamData from '../../data/teamData.json';
import DepartmentSection from './Department';
import "../../Styles/our_team.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="team-page">
      <h1 data-aos="fade-down">Meet Our Crew</h1>
      {teamData.departments.map((department, index) => (
        <DepartmentSection
          key={index}
          departmentName={department.name}
          teamLead={department.teamLead}
          teamMembers={department.members}
        />
      ))}
    </div>
  );
};

export default TeamPage;
