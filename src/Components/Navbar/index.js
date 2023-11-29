import React from "react";
import logo from "../../Assets/Group 10386.png";
import fb from "./Logos/fb.png";
import x from "./Logos/x.png";
import pin from "./Logos/pin.png";
import insta from "./Logos/insta.png";
import "./Navbar.css";

const Navbar = ({ children }) => {
  let navitems = [
    {
      title: "Home",
      Link: "/",
    },
    {
      title: "Attorneys",
      Link: "/attorneys",
    },
    {
      title: "Pratice Areas",
      Link: "/pratice",
    },
    {
      title: "About Us",
      Link: "/about",
    },
  ];
  let socialMediaLinks = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/example",
      logo: fb,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/example",
      logo: insta,
    },
    {
      title: "Pinterest",
      link: "https://www.pinterest.com/example",
      logo: pin,
    },
    {
      title: "X",
      link: "https://www.example.com",
      logo: x,
    },
  ];
  return (
    <div className="nav-section">
      <section className="nav-logo">
        <img src={logo} alt="main-logo" />
      </section>
      <nav>
        <ul className="navbar-links">
          {navitems.map((item, i) => (
            <li key={i}>
              <a href={item.Link}>{item.title}</a>
            </li>
          ))}
        </ul>
        {/* {children ? (
          <ul className="social-nav">
            {socialMediaLinks.map((item, i) => (
              <li key={i}>
                <a href={item.link}>
                  <img src={item.logo} alt={item.title} />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <button className="nav-button">Contact Now</button>
        )} */}
      </nav>
      {children ? (
        <>
          <ul className="social-nav">
            {socialMediaLinks.map((item, i) => (
              <li key={i}>
                <a href={item.link}>
                  <img src={item.logo} alt={item.title} />
                </a>
              </li>
            ))}
          </ul>
{/* 
          <div className="nav-footer">
            <li>
              <a href="/">2020 Acme.All right reserved</a>
            </li>
            <li>
              <a href="/">Privacy Policay</a>
            </li>
            <li>
              <a href="/">Terms of SErvice</a>
            </li>
          </div> */}
        </>
      ) : (
        <button className="nav-button">Contact Now</button>
      )}
    </div>
  );
};

export default Navbar;
