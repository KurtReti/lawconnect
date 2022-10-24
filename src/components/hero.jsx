import React from "react";
import "../css/Hero.css";
import Button from "./button";
import herosplash from "../assets/images/lc-hero-desktop@2x.png"
import herobackground from "../assets/logos/LawConnect-lcon-RGB.png"

export default function Hero() {
  return (
    <div className="hero">
      <div className="heroContainer">
      <img src={herobackground} className="hero__background"></img>
      <div className="hero__intro">
        <h1 className="hero__intro--heading">
          The place to work with your lawyer
        </h1>
        <p className="hero__intro--content">
          Your lawyer uses LawConnect to share information with you about your legal case in a private, convenient and secure way.
        </p>
        <div className="hero__intro--button">
          <Button title="Create Free Account" />
        </div>
      </div>
      <img className="hero__splash" src={herosplash}>
        
      </img>
      </div>
    </div>
  );
}
