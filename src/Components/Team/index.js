import React, { useState } from "react";
import DD from "./teamImages/Ellipse 15.png";
import Sa from "./teamImages/Ellipse 16.png";
import Ce from "./teamImages/Ellipse 15 (1).png";
import Co from "./teamImages/Ellipse 15 (2).png";
import Ha from "./teamImages/Ellipse 15 (3).png";
import NJ from "./teamImages/Ellipse 15 (4).png";
import "./Team.css"; // Import your CSS for styling

const Team = () => {
  const team = [
    {
      Image: DD,
      title: "Danial Def",
      nocases: 301,
    },
    {
      Image: Sa,
      title: "Sanfole",
      nocases: 850,
    },
    {
      Image: Ce,
      title: "Cesforila",
      nocases: 470,
    },
    {
      Image: Co,
      title: "Collen",
      nocases: 180,
    },
    {
      Image: Ha,
      title: "Haldone",
      nocases: 212,
    },
    {
      Image: NJ,
      title: "NIk jeo",
      nocases: 350,
    },
  ];
  
  const [activeClass , setActiveClass] = useState(1);

  const handelActiveClass = (classs) =>{
    setActiveClass(classs)
  }

  return (
    <>
      <div className="teamSection">
        <h1>Our Team</h1>
        <div className="card-container">
          {team.map((person, index) => (
            <div key={index} className={`card ${index === activeClass ? "active" : ""} profile-card`}
            onClick={()=> handelActiveClass(index)}
            >
              <div className="card-body">
                <div className="card-image">
                  <img src={person.Image} alt={person.title} />
                </div>
                <div className="card-details">
                  <h2>{person.title}</h2>
                  <p>No. of Cases: {person.nocases}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
