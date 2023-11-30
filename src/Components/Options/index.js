import React, { useState } from "react";
import "./options.css";
import image from "./Group 19.png";

const Options = () => {
  const cards = [
    {
      image: image,
      title: "98% Success Rate",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      image: image,
      title: "100% Success Rate",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      image: image,
      title: "100% Success Rate",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  ];
  const [activeCard, setactiveCard] = useState(null);
  const handleCardClick = (index) =>{
    setactiveCard (index === activeCard ? null :index)
  }
  const renderCards = () => {
    return cards.map((card, index) => (
      <div
        key={index}
        className={`card ${index === activeCard ? "active" : ""}`}
        onClick={()=> handleCardClick(index)}
      >
        <img src={card.image} alt={card.title} />
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <button>Read More</button>
      </div>
    ));
  };

  return (
    <div className="optionSection">
      <h1 style={{display:'flex', justifyContent:'center', fontSize:'50px',color:'white'}}>Why Choose us?</h1>
      <section className="cardsContainer">{renderCards()}</section>
    </div>
  );
};

export default Options;
