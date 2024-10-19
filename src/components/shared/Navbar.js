import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar_menu">
      <div className="logo">
        <a href="#">Navbar</a>
      </div>

      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"about"}>About</Link>
        </li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
