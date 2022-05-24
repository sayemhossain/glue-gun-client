import React from "react";

const ProfileDetails = () => {
  return (
    <div>
      <div class="card px-20 py-10 mb-10 mx-10 lg:card-side bg-base-100 shadow-xl">
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">
                <FontAwesomeIcon className="mr-1" icon={faUser} />
                {user.displayName}
              </h2>
              <p>Email : {user.email}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                voluptatibus est, sapiente laboriosam, perferendis recusandae
                distinctio quasi sunt, itaque explicabo saepe. Asperiores
                voluptate molestias corporis velit est mollitia alias autem
                dicta similique explicabo, debitis minus beatae repellendus
                nobis neque hic.
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-body">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
