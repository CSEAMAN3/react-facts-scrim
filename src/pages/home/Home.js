import React from "react";
import "./Home.css";

import { FaReact } from "react-icons/fa";

export default function Home() {
  return (
    <main className="home-main">
      <FaReact className="react-icon" />
      <div className="home-main-container container">
        <h3 className="main-heading">Fun facts about react</h3>
        <ul className="main-list">
          <li className="main-list-item">Was origionally created by Jordan Walke</li>
          <li className="main-list-item">Was first released in 2013</li>
          <li className="main-list-item">Has well over 100k stats on GitHub</li>
          <li className="main-list-item">Is maintained by facebook</li>
          <li className="main-list-item">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  );
}
