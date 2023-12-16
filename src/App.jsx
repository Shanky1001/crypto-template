import { Route } from "react-router-dom";
import Home from "./pages/home/Home";
import RouterProvider from "./providers/RouterProvider";

function App() {
  return (
    <RouterProvider>
      <Route path="/" element={<Home />} />
    </RouterProvider>
  );
}

export default App;
