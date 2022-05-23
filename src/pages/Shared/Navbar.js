import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="px-2 md:px-20 py-0 md:py-5">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" class="btn w-52 btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          {user ? (
            <button onClick={handleSignOut} className="btn btn-outline">
              Logout
            </button>
          ) : (
            <Link className="btn btn-outline" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
