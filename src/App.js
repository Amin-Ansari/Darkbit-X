import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import TextSection from "./components/Body/TextSection";
import Features from "./components/Body/Features";
import FullWidthContainer from "./components/UI/FullWidthContainer";
import ImageSection from "./components/Body/ImageSection";
import BrandBar from "./components/Body/BrandBar";
import BodySection from "./components/UI/BodySection";
import HowItWorks from "./components/Body/HowItWorks";
import AnalyticsTool from "./components/Body/AnalyticsTool";
import "./App.css";

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
      <BodySection>
        <HowItWorks />
      </BodySection>
      <BodySection>
        <AnalyticsTool />
      </BodySection>
    </Fragment>
  );
}

export default App;
