import { Route } from "react-router-dom";
import RouterProvider from "./providers/RouterProvider";
import LayoutWrapper from "./wrapper/LayoutWrapper";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { ROUTES } from "./routes/index.js";
import NotFound from "./pages/404/NotFound.jsx";

function App() {
  return (
    <RouterProvider>
      {ROUTES.map((val) => (
        <Route
          key={val.path}
          path={val.path}
          element={<LayoutWrapper>{<val.element />}</LayoutWrapper>}
        />
      ))}
      <Route
        path={"*"}
        element={<LayoutWrapper>{<NotFound />}</LayoutWrapper>}
      />
    </RouterProvider>
  );
}

export default App;
