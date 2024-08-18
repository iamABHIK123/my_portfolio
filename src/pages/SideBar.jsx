import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css"
function Sidebar() {
  const [activeTab, setActiveTab] = useState("/"); // Default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div class="mt-4 mb-3 clock-container">
        <div id="date" class="date"></div>
        <div id="clock" class="clock"></div>
      </div>
      {/* Sidebar Section */}
      <div className="sidebar">
        <img
          src="./assets/images/profile_img.png"
          className="img-thumb mb-3"
          alt="Profile"
        />
        <div className="status" id="downResume">
          <p>
            <i className="bx bxs-cloud-download"></i>Download Resume
          </p>
        </div>
        {/* <div className="mt-4 mb-3 clock-container">
          <div id="date" className="date"></div>
          <div id="clock" className="clock"></div>
        </div> */}
        <nav style={{width:'100%'}}>
          <ul className="nav flex-column" style={{padding:0}}>
            <li
              className={`nav-item ${activeTab === "/" ? "active" : ""}`}
              id="home"
            >
              <Link
                to="/"
                className="nav-link"
                onClick={() => handleTabClick("/")}
              >
                <i className="bx bxs-home"></i> Home
              </Link>
            </li>
            <li
              className={`nav-item ${activeTab === "/about" ? "active" : ""}`}
              id="about"
            >
              <Link
                to="/about"
                className="nav-link"
                onClick={() => handleTabClick("/about")}
              >
                <i className="bx bxs-user-circle"></i> About
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeTab === "/projects" ? "active" : ""
              }`}
              id="projects"
            >
              <Link
                to="/projects"
                className="nav-link"
                onClick={() => handleTabClick("/projects")}
              >
                <i className="bx bxs-grid"></i> Projects
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeTab === "/achievements" ? "active" : ""
              }`}
              id="achievements"
            >
              <Link
                to="/achievements"
                className="nav-link"
                onClick={() => handleTabClick("/achievements")}
              >
                <i className="bx bxs-award"></i> Achievements
              </Link>
            </li>
            <li
              className={`nav-item ${activeTab === "/contact" ? "active" : ""}`}
              id="contact"
            >
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => handleTabClick("/contact")}
              >
                <i className="bx bxs-envelope"></i> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        {/* This is where your routed components will be rendered */}
        <Outlet />
      </div>
    </div>
  );
}

export default Sidebar;
