import React from "react";
import "./DashboardBody.css";

function DashboardBody() {
  return (
    <div className="dashboard-body">
      <h1>Site status</h1>

      <div className="site-items">
        <div className="site-item">
          <p className="website-name">Website 1</p>
          <div className="status">
            <img src="/green.png" alt="up" />
            <p>Down</p>
          </div>
          <button>Delete</button>
        </div>
        <div className="site-item">
          <p className="website-name">Website 1</p>
          <div className="status">
            <img src="/green.png" alt="up" />
            <p>Down</p>
          </div>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default DashboardBody;
