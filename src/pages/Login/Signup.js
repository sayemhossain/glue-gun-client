import React from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/google.svg";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (googleUser) {
    navigate("/home");
  }
  return (
    <div className="">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content px-5 md:px-52 flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left ">
            <h1 class="text-5xl font-bold" style={{ fontFamily: "Zen Loop" }}>
              Signup Glue Gun & get the best products!
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
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
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
                    name="password"
                    placeholder="password"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control mt-6">
                  <button type="submit" class="btn btn-primary">
                    Signup
                  </button>
                </div>
              </form>
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-red-400">
                  Please login here.
                </Link>
              </p>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-primary mt-5"
              >
                {" "}
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

export default Signup;
