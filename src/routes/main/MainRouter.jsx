import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Ciphers from "../../pages/ciphers/Ciphers"

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogues/ciphers" element={<Ciphers />} />
    </Routes>
  );
};

export default MainRouter;
