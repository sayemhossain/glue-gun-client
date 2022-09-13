import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="bg-gray-50">
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

          <ul class="menu p-4 bg-gray-100 overflow-y-auto w-48 md:w-72  shadow-2xl text-base-content">
            <Link
              className="w-full text-center bg-slate-600 py-2 text-violet-50"
              to="/dashboard"
            >
              Dashboard
            </Link>

            <hr />
            <li>
              <Link className=" uppercase" to="/dashboard/myprofile">
                My Profile
              </Link>
            </li>
            <li>
              {admin ? (
                <>
                  <Link to="/dashboard/ayykoriorders">AyyKori Orders</Link>
                  <Link to="/dashboard/addtool">Add New Tool</Link>
                  <Link to="/dashboard/managetools">Manage Tools</Link>
                  <Link to="/dashboard/manageorder">Manage All orders</Link>
                  <Link to="/dashboard/alluser">All user</Link>
                  <Link to="/dashboard/makeadmin">Make admin</Link>
                </>
              ) : (
                <>
                  <Link className=" uppercase" to="/dashboard/myorders">
                    My Orders
                  </Link>
                  <Link className=" uppercase" to="/dashboard/reviews">
                    Add A Review
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
