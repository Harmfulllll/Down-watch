import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import useLogout from "../../Hooks/useLogout";
import { BeatLoader } from "react-spinners";

function Sidebar() {
  const user = useSelector((state) => state.auth.user);
  const { loading, logoutUser } = useLogout();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logoutUser();
  };
  return (
    <div className="sidebar">
      <div className="name">
        <h1>{user ? user?.data[0]?.username : "User"}</h1>
        <p>{user ? user?.data[0]?.email : "email"}</p>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <button>Dashboard</button>
        </li>

        <li className="sidebar-list-item">
          <button>Add website</button>
        </li>

        <li className="sidebar-list-item">
          <button onClick={(e) => handleLogout(e)} disabled={loading}>
            {loading ? <BeatLoader /> : "Logout"}
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
