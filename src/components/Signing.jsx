import React from "react";
import "../css/Signing.css";
import signingsplash from "../assets/images/lc-sign-docs-desktop@2x.png"
import signingsplashmobile from "../assets/images/lc-sign-docs-mobile@2x.png"
import ResponsiveImage from "./ResponsiveImage";

export default function Signing(props) {
  return (
    <div className="signing">
      <div className="signingContainer">
        <ResponsiveImage 
        imagemobile={signingsplashmobile}
        imagedesktop={signingsplash} 
        mobilewidth="200px"
        desktopwidth="300px" />
        <div className="signing__text">
          <h2 className="signing__text--title global__title">{props.title}</h2>
          <p className="signing__text--content">{props.content1}</p>
          <p className="signing__text--content">{props.content2}</p>
        </div>
      </div>
    </div>
  );
}
