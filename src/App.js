import React from "react";
import { HashRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./components/Footer";
import "./components/components.css";
import "./pages/pages.css";
const App = () => {
  return (
        <Router>
            <Header />
            <AppRoutes />
            <Footer/>
        </Router>
  );
};
export default App;
