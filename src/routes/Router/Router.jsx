import React from "react"
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../../layout/Main/MainLayout";
import Home from "../../pages/Home/Home";
import ForgotPass from "../../pages/Auth/ForgotPass";


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="forgot-pass" element={<ForgotPass />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
};

export default Router;
