import React from "react";
import "../css/header.css";
import rgblogo from "../assets/logos/LawConnect-logo-reverse-RGB.png";
import Button from "./button";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={rgblogo}></img>
      <div className="header__links">
        <a href="" className="header__links--linkText">
          For People
        </a>
        <a href="" className="header__links--linkText">
          For Businesses
        </a>
        <a href="" className="header__links--linkText">
          Contact
        </a>
      </div>
      <div className="header__account">
        <a href="" className="header__account--login">
          Login
        </a>
        <Button title="Create Free Account" />
      </div>
      <div className="burger">
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>

      </div>
    </div>
  );
}
