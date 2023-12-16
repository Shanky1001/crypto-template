import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import Home from "../pages/home/Home";
import RoadMapPage from "../pages/roadmap/RoadMapPage";
import ServicesPage from "../pages/service/ServicesPage";

export const ROUTES = [
  { path: "/", element: Home },
  { path: "/about", element: AboutPage },
  { path: "/service", element: ServicesPage },
  { path: "/roadmap", element: RoadMapPage },
  { path: "/contact", element: ContactPage },
];
