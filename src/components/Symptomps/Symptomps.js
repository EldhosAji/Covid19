import React from "react";
import "./Style.css";
import AltHeader from "../comp/AltHeader";
import symptomps from "../../assets/symptomps.png";
function Symptomps() {
  return (
    <div className="symp" id="Symptomps">
      <AltHeader
        title={"Covid-19"}
        head={"Symptomps"}
        cont={
          "Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory"
        }
      />
      <img src={symptomps} alt="" />
    </div>
  );
}

export default Symptomps;
