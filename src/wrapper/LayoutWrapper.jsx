import { Link, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import PropTypes from "prop-types";

function LayoutWrapper({ children }) {
  const location = useLocation();
  return (
    <>
      <NavBar />
      {location.pathname !== "/" && (
        <div className="container-fluid hero-header bg-light py-5 mb-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 mb-3 animated slideInDown">
                  {location.pathname.toUpperCase()}
                </h1>
                <nav aria-label="breadcrumb animated slideInDown">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <span>Pages</span>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {location.pathname.replace(/\//g, '')}
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-lg-6 animated fadeIn">
                <img
                  className="img-fluid animated pulse infinite"
                  src="/src/assets/img/hero-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {children}
      <Footer />
    </>
  );
}

export default LayoutWrapper;

LayoutWrapper.propTypes = {
  children: PropTypes.element,
};
