import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import TextSection from "./components/Body/TextSection";
import FullWidthContainer from "./components/UI/FullWidthContainer";
import "./App.css";
import ImageSection from "./components/Body/ImageSection";

function App() {
  return (
    <Fragment>
      <Header />
      <FullWidthContainer>
        <TextSection />
        <ImageSection />
      </FullWidthContainer>
    </Fragment>
  );
}

export default App;
