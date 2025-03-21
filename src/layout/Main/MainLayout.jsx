import React from "react"
import { Outlet } from "react-router";
import Navbar from "../../pages/Share/Navebar";
import Footer from "../../pages/Share/Footer";


const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
};

export default MainLayout;
