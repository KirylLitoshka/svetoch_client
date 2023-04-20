import "./App.css";
import React from "react";
import PageWrapper from "../components/wrappers/page/PageWrapper";
import Header from "../components/ui/header/Header";
import MainRouter from "../routes/main/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <PageWrapper>
      <Router>
        <Header />
        <MainRouter>

        </MainRouter>
      </Router>
    </PageWrapper>
  );
};

export default App;
