import React from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardBody from "../../components/DashboardBody/DashboardBody";

function Dashboard() {
  return (
    <div>
      <div className="dashboard">
        <Sidebar />
        <DashboardBody />
      </div>
    </div>
  );
}
export default Dashboard;
