import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer = (charac) => {
  return (
    <nav className="nav">
      <div className="page2">
        <Link to="/characters" className="link">
          <h1>Characters</h1>
        </Link>

        <Link to="/houses" className="link">
          <h1>Houses</h1>
        </Link>

        <Link to="/chronology" className="link">
          <h1>Chronology</h1>
        </Link>
      </div>
    </nav>
  );
};
