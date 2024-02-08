import React from 'react';
import './SideBar.css'; // Make sure to create a corresponding CSS file

function SideBar() {
  return (
    <div className="user-profile">
      <div className="user-info">
        <div className="avatar">
          <span>G</span>
        </div>
        <div className="user-name">
          <h1 >Gogoria Yash</h1>
          <p>24 (M)</p>
        </div>
      </div>
      <nav className="navigation-menu">
        <ul className="navigation-menu-test">
          <li><button className="nav-button active"><i className="icon-doctors"></i>Doctors</button></li>
          <li><button className="nav-button"><i className="icon-patients"></i>Patients</button></li>
          <li><button className="nav-button"><i className="icon-records"></i>Health records</button></li>
          <li><button className="nav-button"><i className="icon-consultations"></i>Consultations</button></li>
          <li><button className="nav-button"><i className="icon-check"></i>Health check</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;