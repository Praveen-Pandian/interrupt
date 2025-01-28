import "../Styles/footer.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../assets/interrupt-footer.png";
export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <footer>
      <div class="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img className="logo" src={logo} alt="acelogo" />
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-section">
            <h3>Participate</h3>
            <ul>
              <li>
                <a href="/events">Events</a>
              </li>
              <li>
                <a href="/workshops">Workshops</a>
              </li>
              <li>
                <a href="/home">Home</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Know More</h3>
            <ul>
              <li>
                <a href="/schedule">Schedule</a>
              </li>
              <li>
                <a href="/sponsors">Sponsors</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} ACE, SVCE Sriperumbudur. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
