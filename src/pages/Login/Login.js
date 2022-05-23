import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/google.svg";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let signInError;
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  if (loading || googleLoading) {
    return <Loading></Loading>;
  }
  if (error || googleError) {
    signInError = (
      <p className="mb-2 text-red-500">
        <small>{error?.message || googleError?.message}</small>
      </p>
    );
  }
  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200 py-10 md:py-0">
        <div className="hero-content px-5 md:px-52 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1
              className="text-5xl font-bold"
              style={{ fontFamily: "Zen Loop" }}
            >
              Login Glue Gun!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="text-center text-sm">
                New in glue gun?{" "}
                <Link to="/signup" className="text-red-400">
                  Create an account.
                </Link>
              </p>
              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-primary"
              >
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
