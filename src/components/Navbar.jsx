import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>
            <button className="btn1">Home</button>
          </Link>
        </li>
        <li>
          <Link to={"/form"}>
            <button className="btn1">Employee Form</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
