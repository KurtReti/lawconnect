import React from "react";
import "../css/Button.css";

export default function Button(props) {
  return <button className="button">{props.title}</button>;
}
