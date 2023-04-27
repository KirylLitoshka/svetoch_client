import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Ciphers from "../../pages/ciphers/Ciphers";
import CiphersForm from "../../components/forms/cipher/CipherForm";
import Rates from "../../pages/rates/Rates";
import RateForm from "../../components/forms/rates/RateForm";
import Meters from "../../pages/meters/Meters";
import MetersForm from "../../components/forms/meters/MetersForm";
import Areas from "../../pages/areas/Areas";
import AreasForm from "../../components/forms/areas/AreasForm";

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
      <Route path="/catalogues/meters" element={<Meters />} />
      <Route path="/catalogues/meters/add" element={<MetersForm />} />
      <Route path="/catalogues/meters/edit" element={<MetersForm />} />
      <Route path="/catalogues/areas" element={<Areas />} />
      <Route path="/catalogues/areas/add" element={<AreasForm />} />
      <Route path="/catalogues/areas/edit" element={<AreasForm />} />
    </Routes>
  );
};

export default MainRouter;
