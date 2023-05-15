import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import TextSection from "./components/Body/TextSection";
import Features from "./components/Body/Features";
import FullWidthContainer from "./components/UI/FullWidthContainer";
import "./App.css";
import ImageSection from "./components/Body/ImageSection";
import BrandBar from "./components/Body/BrandBar";

function App() {
  return (
    <Fragment>
      <Header />
      <FullWidthContainer>
        <TextSection />
      </FullWidthContainer>
      <FullWidthContainer className="hide-overflow">
        <ImageSection />
      </FullWidthContainer>
      <BrandBar />
      <Features />
    </Fragment>
  );
}

export default App;
