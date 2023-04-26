import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Ciphers from "../../pages/ciphers/Ciphers";
import CiphersForm from "../../components/forms/cipher/CipherForm";
import Rates from "../../pages/rates/Rates"
import RateForm from "../../components/forms/rates/RateForm";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogues/ciphers" element={<Ciphers />} />
      <Route path="/catalogues/ciphers/add" element={<CiphersForm />} />
      <Route path="/catalogues/ciphers/edit" element={<CiphersForm />} />
      <Route path="/catalogues/rates" element={<Rates />} />
      <Route path="/catalogues/rates/add" element={<RateForm />} />
      <Route path="/catalogues/rates/edit" element={<RateForm />} />
    </Routes>
  );
};

export default MainRouter;
