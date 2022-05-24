import React from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/google.svg";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Shared/Loading";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user || googleUser);
  const navigate = useNavigate();

  let signInError;
  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // this is for email pass signup
    await createUserWithEmailAndPassword(email, password);
    toast("Email verification send.");
    // for verification email
    await sendEmailVerification();
    // for update name
    await updateProfile({ displayName: name });
    // for toast
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
  if (token) {
    navigate("/");
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
              Signup Glue Gun & get the best products!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form action="" onSubmit={handleSignup}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
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
                </div>
                <p>{signInError}</p>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
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
              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-primary"
              >
                {" "}
                <img className="mr-2" src={googleLogo} alt="" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Signup;
