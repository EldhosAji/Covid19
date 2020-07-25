import React, { useEffect, useState } from "react";
import "./Style.css";
import AltHeader from "../comp/AltHeader";
import Mask from "../../assets/Mask.png";
import wash from "../../assets/wash.png";
import nose from "../../assets/nose.png";
import avoid from "../../assets/avoid.png";

const mql = window.matchMedia("(max-width: '820px')");

function Banner({ img, title, cont, direction, op }) {
  const [state, setState] = useState();
  useEffect(() => {
    setState(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <div
      className="banner"
      style={{
        flexDirection:
          state < 820 ? "column-reverse" : !direction ? "row" : "row-reverse",
      }}
    >
      <img src={img} alt="" />
      <div className="cont">
        <div className="cont_base">
          <img src={op} alt="" />
          <div className="data">
            <h1>{title}</h1>
            <p>{cont}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Main() {
  return (
    <div className="main_body" id="Prevention">
      <div className="head">
        <AltHeader
          title={"Covid-19"}
          head={"What should we do"}
          cont={
            "Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused"
          }
        />
      </div>
      <Banner
        img={Mask}
        title={"wear masks"}
        cont={
          'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively'
        }
        direction={true}
        op={require("../../assets/1.png")}
      />
      <Banner
        img={wash}
        title={"Wash Your Hands"}
        cont={
          'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals'
        }
        direction={false}
        op={require("../../assets/2.png")}
      />
      <Banner
        img={nose}
        title={"Use nose - rag"}
        cont={
          'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively'
        }
        direction={true}
        op={require("../../assets/3.png")}
      />
      <Banner
        img={avoid}
        title={"Avoid contacts"}
        cont={
          "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic"
        }
        direction={false}
        op={require("../../assets/4.png")}
      />
    </div>
  );
}

export default Main;
