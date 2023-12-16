import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ROADMAP_DATA } from "../../constant";

const settings = {
  autoplay: true,
  smartSpeed: 1000,
  margin: 25,
  loop: true,
  dots: false,
  nav: true,
  navText: [<FaAngleLeft key={"left"} />, <FaAngleRight key={"right"} />],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

function RoadMap() {
  return (
    <section id="roadmap" className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <h1 className="display-6">Roadmap</h1>
          <p className="text-primary fs-5 mb-5">
            We Translate Your Dream Into Reality
          </p>
        </div>
        <OwlCarousel
          {...settings}
          className="owl-theme roadmap-carousel wow fadeInUp"
          data-wow-delay="0.1s"
        >
          {ROADMAP_DATA.map((val) => (
            <div key={val.id} className="roadmap-item">
              <div className="roadmap-point">
                <span></span>
              </div>
              <h5>{val.heading}</h5>
              <span>{val.data}</span>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}

export default RoadMap;
