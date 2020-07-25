import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Aboutus from "./components/AboutUs/Aboutus";
import Contagion from "./components/Contagion/Contagion";
import Symptomps from "./components/Symptomps/Symptomps";
import Main from "./components/Main/Main";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Aboutus />
      <Contagion />
      <Symptomps />
      <Main />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
