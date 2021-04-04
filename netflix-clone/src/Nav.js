import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe?format=jpg&name=small"
        alt="Account Icon"
      />
    </div>
  );
}

export default Nav;
