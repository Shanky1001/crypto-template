import { ICON10, ICON2, ICON9 } from "../../assets";

function Facts() {
  return (
    <div className="container-xxl bg-light py-5 my-5">
      <div className="container py-5">
        <div className="row g-5">
          <div
            className="col-lg-4 col-md-6 text-center wow fadeIn"
            data-wow-delay="0.1s"
          >
            <img
              className="img-fluid mb-4"
              src={ICON9}
              alt="today-transaction" loading="lazy"
            />
            <h1 className="display-4" data-toggle="counter-up">
              123456
            </h1>
            <p className="fs-5 text-primary mb-0">Today Transactions</p>
          </div>
          <div
            className="col-lg-4 col-md-6 text-center wow fadeIn"
            data-wow-delay="0.3s"
          >
            <img
              className="img-fluid mb-4"
              src={ICON10}
              alt="monthly-transaction" loading="lazy"
            />
            <h1 className="display-4" data-toggle="counter-up">
              123456
            </h1>
            <p className="fs-5 text-primary mb-0">Monthly Transactions</p>
          </div>
          <div
            className="col-lg-4 col-md-6 text-center wow fadeIn"
            data-wow-delay="0.5s"
          >
            <img
              className="img-fluid mb-4"
              src={ICON2}
              alt="total-transaction" loading="lazy"
            />
            <h1 className="display-4" data-toggle="counter-up">
              123456
            </h1>
            <p className="fs-5 text-primary mb-0">Total Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
