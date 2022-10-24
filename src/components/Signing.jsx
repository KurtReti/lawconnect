import React from "react";
import "../css/Signing.css";

export default function Signing(props) {
  return (
    <div className="signing">
      <div className="signingContainer">
        <img className="signing__image" src={props.img}></img>
        <div className="signing__text">
          <h2 className="signing__text--title global__title">{props.title}</h2>
          <p className="signing__text--content">{props.content1}</p>
          <p className="signing__text--content">{props.content2}</p>
        </div>
      </div>
    </div>
  );
}
