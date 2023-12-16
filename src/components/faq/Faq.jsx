import { FAQ } from "../../constant";

function Faq() {
  return (
    <section id="faq" className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <h1 className="display-6">FAQs</h1>
          <p className="text-primary fs-5 mb-5">Frequently Asked Questions</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="accordionExample">
              {FAQ.map((val) => {
                return (
                  <div
                    key={val.id}
                    className="accordion-item wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <h2 className="accordion-header" id={`heading${val.id}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${val.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse${val.id}`}
                      >
                        {val.buttonText}
                      </button>
                    </h2>
                    <div
                      id={`collapse${val.id}`}
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">{val.data}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
