import React from "react";
import about from "../../assets/about.png";
import Gb from "../../assets/Gg.png";
import "./Style.css";
function Aboutus() {
  return (
    <div className="aboutus" id="overview">
      <img src={about} alt="" />
      <div className="cont">
        <span>
          <h2>What Is Covid-19</h2>
          <h1>Coronavirus</h1>
          <p>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response
          </p>
          <div className="btn">
            <span>Learn More</span>
          </div>
        </span>
        <div id="dt">
          <img src={Gb} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
