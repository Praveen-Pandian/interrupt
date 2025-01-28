import "../Styles/about.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="about">
      <div className="container">
        <div className="about-interrupt" data-aos="flip-left">
          <h2>ABOUT INTERRUPT</h2>
          <p>
            Interrupt is the National-level Technical Symposium conducted annually by ACE on behalf of the Department of Computer Science and Engineering at SVCE. It is a platform where talents find the spotlight they deserve, offering participants the chance to showcase and celebrate their best
            selves. The event features a diverse range of activities, including workshops, coding competitions, ideathons, web development challenges, and more. Students also have the opportunity to acquire cutting-edge technical skills through hands-on workshops led by industry experts. With a
            focus on innovation, networking, and skill-building, Interrupt fosters an environment where students can explore emerging technologies and expand their horizons in the tech world.
          </p>
        </div>
        <div className="about-ace" data-aos="flip-right">
          <h2>ABOUT ACE</h2>
          <p>
            The Association of Computer Engineers (ACE), established in 1992, is the founding club of the Department of Computer Science and Engineering at SVCE. Over the years, ACE has been pivotal in nurturing talent, fostering innovation, and promoting a culture of learning and collaboration
            among students. It organizes a diverse range of events annually, including technical workshops, presentations, quizzes, and interactive sessions aimed at enhancing technical expertise and professional skills. Its flagship events, the symposium Interrupt and the hackathon Hackerrupt,
            attract participants from various institutions, providing a platform to showcase creativity and problem-solving abilities. By adapting to emerging technologies, ACE continues to shape future-ready professionals and drive academic and extracurricular excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
