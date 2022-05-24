import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-blue-50">
      <div class="drawer  drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <h2
            className="text-4xl font-bold text-center pt-7 pb-3 text-base-400"
            style={{ fontFamily: "Teko" }}
          >
            Welcome to your Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul
            class="menu p-4 overflow-y-auto w-72  shadow-2xl text-base-content"
            style={{ backgroundColor: "#3D4451" }}
          >
            <li>
              <Link className="text-white uppercase" to="/dashboard">
                My Orders
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase" to="/dashboard/addreview">
                Add A Review
              </Link>
            </li>
            <li>
              <Link className="text-white uppercase" to="/dashboard/myprofile">
                My Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
