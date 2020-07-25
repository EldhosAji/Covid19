import React from "react";
import "./Style.css";
function AltHeader({ title, head, cont }) {
  return (
    <div className="head">
      <h2>{title}</h2>
      <h1>{head}</h1>
      <p>{cont}</p>
    </div>
  );
}

export default AltHeader;
