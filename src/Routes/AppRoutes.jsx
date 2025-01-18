import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
const AppRoutes = () => {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
export default AppRoutes;