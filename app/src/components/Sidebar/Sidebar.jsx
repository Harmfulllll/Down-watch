import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="name">
        <h1>Dashboard</h1>
        <p>Email</p>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <button>Dashboard</button>
        </li>

        <li className="sidebar-list-item">
          <button>Add website</button>
        </li>

        <li className="sidebar-list-item">
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
