import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
      <a href="index.html" className="navbar-brand d-flex align-items-center">
        <h2 className="m-0 text-primary">
          <img
            className="img-fluid me-2"
            src="/src/assets/img/icon-1.png"
            alt=""
            style={{ width: "45px" }}
          />
          Crypto
        </h2>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-4 py-lg-0">
          <Link to={"/"} className="nav-item nav-link active">
            Home
          </Link>
          <Link to={"/about"} className="nav-item nav-link">
            About
          </Link>
          <Link to={"/service"} className="nav-item nav-link">
            Service
          </Link>
          <Link to={"/roadmap"} className="nav-item nav-link">
            Roadmap
          </Link>
          <Link to={"/contact"} className="nav-item nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
