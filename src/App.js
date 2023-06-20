import React from "react";
import "./App.css";
import MainNavigation from "./components/Navigation/MainNavigation";
import Intro from "./components/Intro/Intro";
import Hobby from "./components/Hobby/Hobby";
import Gallery from "./components/Gallery/Gallery";
import Form from "./components/form/Form";


function App() {
  return (
    <React.Fragment>
      <MainNavigation />

      <main>
        <Intro />
        <Hobby />
      </main>

      <Gallery />

      <Form />
    
    </React.Fragment>
  );
}

export default App;
