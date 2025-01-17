import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
// import SearchBar from "../components/SearchBar";
// import Weatherdisplay from "../components/Weather";
import About from "../pages/About";
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="SearchBar" element={<SearchBar/>} />
        <Route path="Weather" element={<Weatherdisplay />} /> */}
        <Route path="Footer" element={<Footer/>} />
      </Routes>
    );
  };
export default AppRoutes;