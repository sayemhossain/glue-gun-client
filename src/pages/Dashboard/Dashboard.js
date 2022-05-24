import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-blue-50">
      <div class="drawer  drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <div className="flex items-center justify-end md:justify-center">
            <h2
              className="text-4xl text-center pt-10 pb-3 text-base-400"
              style={{ fontFamily: "Teko" }}
            >
              Welcome to your Dashboard
            </h2>
            <label
              for="dashboard-sidebar"
              class=" drawer-button pt-5 px-5 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>

          <ul
            class="menu p-4 overflow-y-auto w-48 md:w-72  shadow-2xl text-base-content"
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
