import React from "react";
import image from "./Image.png";
import "./Hero.css"; // Import your CSS file

const Herosection = () => {
  return (
    <div className="hero-section">
      <section className="hero-text">
        <h1>You don't have to</h1>
        <h1>Fight them Alone</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          suscipit necessitatibus ipsam omnis nemo. Illo hic magni molestiae
          quasi! Dolor voluptate minus odio ipsa officiis possimus ab autem,
          obcaecati blanditiis, laudantium debitis officia ut necessitatibus,
          aspernatur eum ex asperiores ipsum accusamus impedit tempora quis
          recusandae facilis ipsam quaerat! Tempora, quos?
        </p>
        <article className="hero-input">
          <input type="text" placeholder="Enter your email adress" />
          <button>Let's Talk</button>
        </article>
      </section>
      <section className="hero-image">
        <div>
          <img src={image} alt="Hero" />
        </div>
      </section>
    </div>
  );
};

export default Herosection;
