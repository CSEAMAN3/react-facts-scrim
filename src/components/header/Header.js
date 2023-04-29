import React from "react";
import "./Header.css";

import { FaReact } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="header-logo-container">
          <FaReact className="react-logo-shape" />
          <h1 className="react-logo-text">ReactFacts</h1>
        </div>
        <h2 className="header-sub-heading">React Course - Project 1</h2>
      </div>
    </header>
  );
}
