import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="app">
      <div className="gradient-ellipse gradient-left"></div>
      <div className="gradient-ellipse gradient-right"></div>
      <div className="gradient-ellipse gradient-bottom-right"></div>

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
