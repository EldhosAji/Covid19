import React from "react";
import "./Style.css";
import Logo from "../../assets/Logo.png";
function Nav() {
  return (
    <div className="nav">
      <img src={Logo} alt="" />
      <div className="link">
        <ul>
          <li>
            <a href="#overview">Overview</a> <span>.</span>
          </li>
          <li>
            <a href="#contagion">Contagion</a>
            <span>.</span>
          </li>
          <li>
            <a href="#Symptomps">Symptoms</a>
            <span>.</span>
          </li>
          <li>
            <a href="#Prevention">Prevention</a>
            <span>.</span>
          </li>
        </ul>

        <div className="cont">
          <span>
            <a href="#Contact">Contact</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
