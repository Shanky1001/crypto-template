import { Link } from "react-router-dom";
import { SERVICES } from "../../constant";

function Services() {
  return (
    <section className="container-xxl bg-light py-5 my-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <h1 className="display-6">Services</h1>
          <p className="text-primary fs-5 mb-5">
            Buy, Sell And Exchange Cryptocurrency
          </p>
        </div>
        <div className="row g-4">
          {SERVICES.map((val) => {
            return (
              <div
                key={val.id}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item bg-white p-5">
                  <img
                    className="img-fluid mb-4"
                    src={val.img} loading="lazy"
                    alt=""
                  />
                  <h5 className="mb-3">{val.heading}</h5>
                  <p>{val.data}</p>
                  <Link to="/feature">Read More</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
