import React from "react";
import "./Style.css";
import air from "../../assets/air.png";
import contacts from "../../assets/contacts.png";
import containted from "../../assets/containted.png";
import AltHeader from "../comp/AltHeader";

function Card({ img, title, cont }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <span>
        <h2>{title}</h2>
        <p>{cont}</p>
      </span>
    </div>
  );
}

function Contagion() {
  return (
    <div className="contagion" id="contagion">
      <div className="head">
        <AltHeader
          title={"Covid-19"}
          head={"Contagion"}
          cont={
            "Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type"
          }
        />
      </div>
      <div className="container">
        <Card
          img={air}
          title={"Air Transmission"}
          cont={
            "Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify"
          }
        />
        <Card
          img={contacts}
          title={"Human Contacts"}
          cont={"Washing your hands is one of thesimplest ways you can protect"}
        />
        <Card
          img={containted}
          title={"Containted Objects"}
          cont={
            "Use the tissue while sneezing,In this way, you can protect your droplets."
          }
        />
      </div>
    </div>
  );
}

export default Contagion;
