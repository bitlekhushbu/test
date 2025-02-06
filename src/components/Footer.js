import "./stylepage/Footer.css";
import img1 from"./images/logo-image1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="page-width">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={img1} alt="Carbon Footprint" title="Carbon Footprint" />
          </div>
          <ul>
            <li><a href="#how_it_work">How it works</a></li>
            <li><a href="#FaqSection">FAQ</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Contact">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <div className="bottom">
            <p className="copyright">
              A project by Eco-Friendly Web Alliance to raise awareness on website emissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
