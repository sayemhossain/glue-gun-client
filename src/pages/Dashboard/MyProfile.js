import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [user] = useAuthState(auth);

  const handleUpdate = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const email = user?.email;
    const userInfo = { phone, address };
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="">
      <div>
        <h3 className="text-xl md:px-20">Profile</h3>
      </div>
      <hr />
      <div className="pt-5">
        <div class="card md:px-20 md:py-10 mb-10 mx-5 md:mx-10 lg:card-side bg-base-100 shadow-xl">
          <div>
            <div class="card md:w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">
                  <FontAwesomeIcon className="mr-1" icon={faUser} />
                  {user.displayName}
                </h2>
                <p>Email : {user.email}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  voluptatibus est, sapiente laboriosam, perferendis recusandae
                  distinctio quasi sunt, itaque explicabo saepe.
                </p>
              </div>
            </div>
          </div>
          <div class=" md:pl-36 mt-14 mb-8 mx-auto md:mt-0">
            <div className="card w-72 px-5 py-3 shadow-lg">
              <div>
                <h3
                  className="text-xl text-center"
                  style={{ fontFamily: "Macondo" }}
                >
                  Update Your Information
                </h3>
              </div>
              <form action="" onSubmit={handleUpdate}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Address</span>
                  </label>
                  <textarea
                    name="address"
                    class="textarea textarea-bordered"
                    placeholder="Address"
                  ></textarea>
                </div>
                <div class="form-control mt-6">
                  <button type="submit" class="btn btn-sm btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
