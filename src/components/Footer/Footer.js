import React from "react";
import "./Style.css";
import Logo from "../../assets/Logo.png";
import f from "../../assets/f.png";
import y from "../../assets/y.png";
import v from "../../assets/v.png";
import twitter from "../../assets/twitter.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <img src={Logo} alt="" />
        <div className="footer_nav">
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#contagion">Contagion</a>
            </li>
            <li>
              <a href="#Symptomps">Symptoms</a>
            </li>
            <li>
              <a href="#Prevention">Prevention</a>
            </li>
          </ul>
        </div>
        <div className="footer_media">
          <ul>
            <li>
              <a href="#">
                <img src={f} alt="f" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={y} alt="y" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={v} alt="v" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="t" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="down">
        <p>2020 @ All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
