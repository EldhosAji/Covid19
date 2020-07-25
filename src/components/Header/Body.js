import React from "react";
import main from "../../assets/main.png";
import "./Style.css";
function Body() {
  return (
    <div className="body">
      <div className="cont">
        <span>
          <h2>COVID-19 Alert</h2>
          <h1>Stay At Home Quarantine</h1>
          <h1>To stop Corona Virus</h1>
          <p>
            There is no specific medicine to prevent or treat coronavirus
            disease (COVID-19). People may need supportive care to .
          </p>
          <div className="btn">
            <span>Let Us Help</span>
          </div>
        </span>
      </div>
      <img src={main} alt="" />
    </div>
  );
}

export default Body;
