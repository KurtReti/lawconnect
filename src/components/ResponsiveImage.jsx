import React from "react";

export default function ResponsiveImage (props) {
    return (
      <picture className="img">
        <source 
          media="(max-width: 1120px)"
          srcSet={`${props.imagemobile} 1120w`}
          sizes="1120px"
          width={`${props.mobilewidth}`}
        />
        <source 
          srcSet={`${props.imagedesktop} 1280w`}
          sizes="1280px"
          width={`${props.desktopwidth}`}
        />
        <img src={`${props.imagedesktop}`}/>
      </picture>
    );
   }