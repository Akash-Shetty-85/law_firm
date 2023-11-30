import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const faqdata = [
    {
      tilte: "Do I need a personal injury report?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      tilte: "How much is my case worth?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      tilte: "What should I do right after car accidect",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      tilte: "How much is my case worth?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faqSection">
      <div className="faq-title" >
        <h1 style={{fontSize:"54px", lineHeight:'54px', fontWeight:"600", color:`var(--css-pure-white)`}}>FAQ</h1>
        <p style={{fontSize:"18px",fontWeight:"500", lineHeight:"30px",opacity:'70%'}}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className="fqa-query">
        {faqdata.map((data, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">
              <h1>{data.tilte}</h1>
              <button
                className="toggle-btn"
                onClick={() => toggleAccordion(index)}
              >
                {activeIndex === index ? "-" : "+"}
              </button>
              {/* <h3>{data.tilte}</h3> */}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{data.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
