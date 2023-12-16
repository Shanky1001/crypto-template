import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      className="container-fluid bg-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6">
            <h1 className="text-primary mb-4">
              <img
                className="img-fluid me-2"
                src="/src/assets/img/icon-1.png"
                alt=""
                style={{ width: "45px" }}
              />
              Crypto
            </h1>
            <span>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam
              ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem
              et sit.
            </span>
          </div>
          <div className="col-md-6">
            <h5 className="mb-4">Newsletter</h5>
            <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p>
            <div className="position-relative">
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Get In Touch</h5>
            <p className="d-flex align-items-center gap-1">
              <FaMapMarkerAlt />
              123 Street, New York, USA
            </p>
            <p className="d-flex align-items-center gap-1">
              <FaPhoneAlt />
              +012 345 67890
            </p>
            <p className="d-flex align-items-center gap-1">
              <FaEnvelope />
              shashank.rai2808@gmail.com
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Our Services</h5>
            <Link className="btn btn-link" to="/">
              Currency Wallet
            </Link>
            <Link className="btn btn-link" to="/">
              Currency Transaction
            </Link>
            <Link className="btn btn-link" to="/">
              Bitcoin Investment
            </Link>
            <Link className="btn btn-link" to="/">
              Token Sale
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Quick Links</h5>
            <Link to={"/about"} className="btn btn-link">
              About Us
            </Link>
            <Link to={"/contact"} className="btn btn-link">
              Contact Us
            </Link>
            <Link to={"/service"} className="btn btn-link">
              Our Services
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Follow Us</h5>
            <div className="d-flex">
              <Link className="btn btn-square rounded-circle me-1" to="/">
                <FaSquareXTwitter />
              </Link>
              <Link className="btn btn-square rounded-circle me-1" to="/">
                <FaFacebook />
              </Link>
              <Link className="btn btn-square rounded-circle me-1" to="/">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
