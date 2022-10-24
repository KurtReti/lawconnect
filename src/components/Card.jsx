import React from "react";
import "../css/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card__top" src={props.img}></img>
      <div className="card__bottom">
        <h4 className="card__bottom--title">{props.title}</h4>
        <p className="card__bottom--content">{props.content}</p>
      </div>
    </div>
  );
}
