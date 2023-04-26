import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Ciphers from "../../pages/ciphers/Ciphers"
import CiphersForm from "../../components/forms/cipher/CipherForm";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogues/ciphers" element={<Ciphers />} />
      <Route path="/catalogues/ciphers/add" element={<CiphersForm/>}/>
      <Route path="/catalogues/ciphers/edit" element={<CiphersForm/>}/>
    </Routes>
  );
};

export default MainRouter;
