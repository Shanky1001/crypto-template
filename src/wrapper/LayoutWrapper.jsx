import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import PropTypes from "prop-types";

function LayoutWrapper({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default LayoutWrapper;

LayoutWrapper.propTypes = {
  children: PropTypes.element,
};
