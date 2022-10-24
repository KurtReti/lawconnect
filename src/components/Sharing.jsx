import React from "react";
import "../css/Sharing.css";

export default function Sharing(props) {
  return (
    <div className="sharing">
      <div className="sharingContainer">
        <div className="sharing__text">
          <h2 className="sharing__text--title global__title">{props.title}</h2>
          <p className="sharing__text--content">{props.content1}</p>
          <p className="sharing__text--content">{props.content2}</p>
        </div>
        <img className="sharing__image" src={props.img}></img>
      </div>
    </div>
  );
}
