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
import Workshops from "../../pages/workshops/Workshops";
import WorkshopsForm from "../../components/forms/workshops/WorkshopsForm";
import Objects from "../../pages/objects/Objects";
import ObjectForm from "../../components/forms/objects/ObjectForm";
import SubObjects from "../../pages/subobjects/SubObjects";
import Limits from "../../pages/limits/Limits";
import SubObjectsForm from "../../components/forms/subobjects/SubObjectsForm";
import LimitForm from "../../components/forms/limits/LimitForm";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/objects" element={<Objects />} />
      <Route path="/objects/add" element={<ObjectForm />} />
      <Route path="/objects/edit" element={<ObjectForm />} />
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
      <Route path="/catalogues/workshops" element={<Workshops />} />
      <Route path="/catalogues/workshops/add" element={<WorkshopsForm />} />
      <Route path="/catalogues/workshops/edit" element={<WorkshopsForm />} />
      <Route path="/subobjects" element={<SubObjects />} />
      <Route path="/subobjects/add" element={<SubObjectsForm />} />
      <Route path="/subobjects/edit" element={<SubObjectsForm />} />
      <Route path="/limits" element={<Limits />} />
      <Route path="/limits/add" element={<LimitForm />} />
      <Route path="/limits/edit" element={<LimitForm />} />
    </Routes>
  );
};

export default MainRouter;
