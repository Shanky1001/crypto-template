import { Link } from "react-router-dom";
import { FaLinkedinIn,FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-6">Contact Us</h1>
            <p className="text-primary fs-5 mb-0">
              If You Have Any Query, Please Contact Us
            </p>
          </div>
          <div className="col-lg-6 text-lg-end">
            <Link className="btn btn-primary py-3 px-4" to="/contact">
              Say Hello
            </Link>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="mb-2">Our office:</p>
            <h4>Lucknow, Uttar Pradesh, India</h4>
            <hr className="w-100" />
            <p className="mb-2">Call us:</p>
            <h4>+91-8840337523</h4>
            <hr className="w-100" />
            <p className="mb-2">Mail us:</p>
            <h4>shashank.rai2808@gmail.com</h4>
            <hr className="w-100" />
            <p className="mb-2">Follow us:</p>
            <div className="d-flex pt-2">
            <a
                className="btn btn-square btn-primary rounded-circle me-2"
                href="https://github.com/Shanky1001/crypto-template"
              >
                <FaGithub />
              </a>
              <a
                className="btn btn-square btn-primary rounded-circle me-2"
                href=""
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <p className="mb-4">
              The contact form is currently inactive.{" "}
            </p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary py-3 px-4" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
