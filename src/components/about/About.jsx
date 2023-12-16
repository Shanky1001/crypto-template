import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

function About() {
  return (
    <section className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img className="img-fluid" src="/src/assets/img/about.png" alt="" />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h1 className="display-6">About Us</h1>
              <p className="text-primary fs-5 mb-4">
                The Most Trusted Cryptocurrency Platform
              </p>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <div className="d-flex align-items-center mb-2">
                <FaCheck className="bg-light text-primary btn-sm-square rounded-circle me-3 fs-6 fw-bold" />
                <span>Tempor erat elitr rebum at clita</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaCheck className="bg-light text-primary btn-sm-square rounded-circle me-3 fs-6 fw-bold" />
                <span>Tempor erat elitr rebum at clita</span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <FaCheck className="bg-light text-primary btn-sm-square rounded-circle me-3 fs-6 fw-bold" />
                <span>Tempor erat elitr rebum at clita</span>
              </div>
              <Link className="btn btn-primary py-3 px-4" to="/about">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
