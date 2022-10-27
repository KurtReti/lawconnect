import React from "react";
import "../css/Hero.css";
import Button from "./button";
import herosplash from "../assets/images/lc-hero-desktop@2x.png";
import herosplashmobile from "../assets/images/lc-hero-mobile@2x.png"
import herobackground from "../assets/logos/LawConnect-lcon-RGB.png";
import ResponsiveImage from "./ResponsiveImage";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="heroContainer">
        <img src={herobackground} className="hero__background"></img>
        <div className="hero__intro">
          <h1 className="hero__intro--heading">
           {props.title}
          </h1>
          <p className="hero__intro--content">
           {props.content} 
          </p>
          <div className="hero__intro--button">
            <Button title="Create Free Account" />
          </div>
        </div>
        <div className="hero__splash">
         <ResponsiveImage 
         imagemobile={herosplashmobile}
         imagedesktop={herosplash}
         desktopwidth="600px"
         mobilewidth="200px" />
        </div>
      </div>
    </div>
  );
}
