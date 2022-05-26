import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const Reviews = () => {
  const [user] = useAuthState(auth);
  const handleReviews = (e) => {
    e.preventDefault();

    const name = user.displayName;
    const ratting = e.target.ratting.value;
    const description = e.target.description.value;
    console.log(ratting, description);
    const review = { name, ratting, description };

    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Thanks for your review..!");
      });
    e.target.reset();
  };
  return (
    <div>
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          Reviews
        </h3>
      </div>
      <hr className="mb-6" />
      <div>
        <div class="hero min-h-screen bg-base-200 px-10">
          <div class="hero-content flex-col lg:flex-row">
            <div
              class="text-center lg:text-left"
              style={{ fontFamily: "Macondo" }}
            >
              <h1 class="text-5xl font-bold">
                Review us for helping our service better!
              </h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div
              class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
              style={{ fontFamily: "Macondo" }}
            >
              <div class="card-body">
                <form action="" onSubmit={handleReviews}>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-bold">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={user.displayName}
                      disabled
                      class="input input-bordered input-sm"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-bold">
                        Your personal ratting
                      </span>
                    </label>
                    <select
                      name="ratting"
                      class="select select-bordered select-sm w-full max-w-xs"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option selected>5</option>
                    </select>
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text font-bold">
                        Your thught about us
                      </span>
                    </label>
                    <textarea
                      name="description"
                      class="textarea textarea-bordered"
                      placeholder="Description"
                      required
                    ></textarea>
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary">Review</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Reviews;
