import React from "react";
import "../css/Highlights.css";
import Button from "./button";
import Card from "./Card";
import card1 from '../assets/images/lc-safe-docs.jpg'
import card2 from '../assets/images/lc-work-remote.jpg'
import card3 from '../assets/images/lc-greater-collab.jpg'


export default function Highlights() {
  return (
    <div className="highlights">
    <div className="highlightsContainer">
        <h1 className="highlights__title">One Solution Designed to Make Your Firm More Money</h1>
        <div className="highlights__cardsContainer">
            <Card title="Safe Documents" content="LawConnect stores its data on servers provided by Amazon Web Services and is safer than email." img={card1}/>
            <Card title="Work Remotely" content="You can sign in to LawConnect and view, collaborate and share your documents from anywhere.." img={card2}/>
            <Card title="Greater Collaboration" content="Collaborate on documents with clients, lawyers and other parties with LawConnect’s Comment and Reply." img={card3}/>
        </div>
    </div>
    </div>
  );
}
