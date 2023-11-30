import React from "react";
import "./practices.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import bl from "../../Assets/Rectangle 3652.png";
import pl from "../../Assets/Rectangle 3651.png";
import rl from "../../Assets/Rectangle 3653.png";
import bul from "../../Assets/Rectangle 3654.png";
import ld from "../../Assets/Rectangle 3656.png";
import eb from "../../Assets/Rectangle 3655.png";

const Practices = () => {
  const aop = [
    {
      image: bl,
      title: "Business Law",
      mobile: "12", // Full width on mobile
      desktop: "1", // Half width on desktop
    },
    {
      image: pl,
      title: "Partnership law",
      mobile: "12",
      desktop: "2",
    },
    {
      image: rl,
      title: "Real Estate law",
      mobile: "12",
      desktop: "4",
    },
    {
      image: bul,
      title: "Business Law",
      mobile: "12",
      desktop: "3",
    },
    {
      image: ld,
      title: "Landlord Disputes",
      mobile: "12",
      desktop: "5",
    },
    {
      image: eb,
      title: "Elder Abuse",
      mobile: "12",
      desktop: "6",
    },
  ];

  return (
    <>
      <h1 style={{display:'flex', justifyContent:'center', fontSize:'50px',color:'white'}}>Area of Prattices</h1>
      <div className="row grid-container">
        {aop.map((item, index) => (
          <div
            key={index}
            className={`col-${item.mobile} ${
              item.desktop ? "odd" : ""
            } grid-item`}
          >
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Practices;
