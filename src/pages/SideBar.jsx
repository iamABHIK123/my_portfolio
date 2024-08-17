import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="col-md-3 p-5 text-white side">
      <img src="./assets/images/profile_img.png" className="img-thumb mb-3" alt="Profile" />
      <div className="status" id="downResume">
        <p><i className='bx bxs-cloud-download'></i>Download Resume</p>
      </div>
      <div className="mt-4 mb-3 clock-container">
        <div id="date" className="date"></div>
        <div id="clock" className="clock"></div>
      </div>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item active" id="home">
            <Link to="/" className="nav-link"><i className='bx bxs-home'></i> Home</Link>
          </li>
          <li className="nav-item" id="about">
            <Link to="/about" className="nav-link"><i className='bx bxs-user-circle'></i> About</Link>
          </li>
          <li className="nav-item" id="projects">
            <Link to="/projects" className="nav-link"><i className='bx bxs-grid'></i> Projects</Link>
          </li>
          <li className="nav-item" id="achievements">
            <Link to="/achievements" className="nav-link"><i className='bx bxs-award'></i> Achievements</Link>
          </li>
          <li className="nav-item" id="contact">
            <Link to="/contact" className="nav-link"><i className='bx bxs-envelope'></i> Contact</Link>
          </li>
        </ul>
      </nav>
      {/* This is where your routed components will be rendered */}
      <Outlet />
    </div>
  );
}

export default Sidebar;
