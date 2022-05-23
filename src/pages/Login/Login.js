import React from "react";
import { Link } from "react-router-dom";
import googleLogo from "../../assets/google.svg";

const Login = () => {
  return (
    <div className="">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content px-5 md:px-52 flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left ">
            <h1 class="text-5xl font-bold" style={{ fontFamily: "Zen Loop" }}>
              Login Glue Gun!
            </h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form action="">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    class="input input-bordered"
                  />
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="text-center text-sm">
                New in glue gun?{" "}
                <Link to="/signup" className="text-red-400">
                  Create an account.
                </Link>
              </p>
              <button className="btn btn-outline btn-primary mt-5">
                <img className="mr-2" src={googleLogo} alt="" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
