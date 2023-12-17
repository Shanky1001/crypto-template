import { ICON3, ICON4, ICON5, ICON6, ICON7, ICON8 } from "../../assets";

function Features() {
  return (
    <section className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <h1 className="display-6">Why Us!</h1>
          <p className="text-primary fs-5 mb-5">
            The Best In The crypto Industry
          </p>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={ICON7} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">Easy To Start</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={ICON6} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">Safe & Secure</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={ICON5} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">Affordable Plans</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={ICON4} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">Secure Storage</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={ICON3} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">Protected By Insurance</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="d-flex align-items-start">
              <img className="img-fluid flex-shrink-0" src={ICON8} alt="" />
              <div className="ps-4">
                <h5 className="mb-3">24/7 Support</h5>
                <span>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
