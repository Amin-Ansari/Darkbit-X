import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import TextSection from "./components/Body/TextSection";
import FullWidthContainer from "./components/UI/FullWidthContainer";
import EmailSubmit from "./components/Body/EmailSubmit";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <FullWidthContainer>
        <TextSection />
      </FullWidthContainer>
    </Fragment>
  );
}

export default App;
