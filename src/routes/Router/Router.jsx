import React from "react"
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../../layout/Main/MainLayout";
import Home from "../../pages/Home/Home";


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      
      </Route>
    </Routes>
  </BrowserRouter>
  )
};

export default Router;
