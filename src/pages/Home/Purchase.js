import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import useToolDetails from "../../hooks/useToolDetails";

const Purchase = () => {
  // Here we are catch the link from url
  const url = window.location.href;

  // This is for finding the user info (to see whose link has been clicked)
  const affInfo = url?.split("?").pop();

  const userTrack = affInfo?.split("&")[0];
  const userActivity = affInfo?.split("&")[1];

  const userTrackId = userTrack?.split("=")[1];
  const userActivityId = userActivity?.split("=")[1];

  const data = {
    userTrackId,
    userActivityId,
  };

  // geting ayykori user trace value from localstorage
  const affUserTrackId = localStorage.getItem("affUserTrackId");
  const affUserActivityId = localStorage.getItem("affUserActivityId");

  if (userActivityId && userTrackId) {
    // this post api for ayykori start
    // fetch(`http://localhost:5000/clientuseractivity/${userActivityId}`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    // this post api for ayykori end

    // fetch(`http://localhost:5000/useractivity/${userActivityId}`, {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const id = data[0]._id;
    //   });

    const fetchUrl = `https://intense-cove-25675.herokuapp.com/affsite/${userActivityId}`;
    fetch(fetchUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // const affUsersDBId = result.insertedId;
        localStorage.setItem("affUserTrackId", userTrackId);
        localStorage.setItem("affUserActivityId", userActivityId);
      });
  }

  const [user] = useAuthState(auth);
  const toolId = useParams();
  const [tool] = useToolDetails(toolId);
  const {
    _id,
    name,
    img,
    price,
    description,
    minimum_order_quantity,
    available_quantity,
  } = tool;

  const handleOrder = (event) => {
    event.preventDefault();

    const orderQuantity = event.target.order.value;
    // const newQuantity = parseInt(available_quantity) - parseInt(orderQuantity);
    const address = event.target.address.value;
    const phone = event.target.phone.value;

    if (orderQuantity > available_quantity) {
      return toast.error("Sorry we don't have enough products !");
    }
    if (orderQuantity < minimum_order_quantity) {
      return toast.error("You have to fulfil our minimum orders requirment !");
    }
    const totalCost = orderQuantity * price;

    if (affUserTrackId && affUserActivityId) {
      const affOrder = {
        orderId: _id,
        productName: name,
        price,
        orderQuantity,
        totalCost,
        deliveryStatus: "pending",
        affUserTrackId,
        affUserActivityId,
      };
      const order = {
        orderId: _id,
        productName: name,
        customerNamer: user?.displayName,
        user: user.email,
        img,
        price,
        available_quantity,
        orderQuantity,
        totalCost,
        address,
        phone,
        affUserTrackId,
        affUserActivityId,
      };
      const newQuantity = available_quantity - orderQuantity;

      // this post api for ayykori start
      fetch(`http://localhost:5000/clientorders`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(affOrder),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      // this post api for ayykori end

      fetch(`https://intense-cove-25675.herokuapp.com/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          const url = `https://intense-cove-25675.herokuapp.com/tools/${_id}`;
          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ newQuantity }),
          })
            .then((res) => res.json())
            .then((data) => toast.success("Your order is Pending!"));
        });
      event.target.reset();
    } else {
      const order = {
        orderId: _id,
        productName: name,
        customerNamer: user?.displayName,
        user: user.email,
        img,
        price,
        available_quantity,
        orderQuantity,
        totalCost,
        address,
        phone,
      };
      const newQuantity = available_quantity - orderQuantity;

      fetch(`https://intense-cove-25675.herokuapp.com/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          const url = `https://intense-cove-25675.herokuapp.com/tools/${_id}`;
          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ newQuantity }),
          })
            .then((res) => res.json())
            .then((data) => toast.success("Your order is Pending!"));
        });
      event.target.reset();
    }
  };

  // this setTimeOut for expiring the token
  setTimeout(() => {
    localStorage.removeItem("affUserActivityId");
    localStorage.removeItem("affUserTrackId");
  }, 604800 * 1000);
  // 604800 * 1000(7day)
  // 1296000 * 1000(15day)

  return (
    <section>
      <div className="py-10 md:py-20 md:pl-5 md:pr-20 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:pl-20">
          <div>
            <img className="rounded-2xl  w-96" src={img} alt="" />
          </div>
          <div
            className="md:pl-7 md:mt-12 mt-7 md:ml-5"
            style={{ fontFamily: "Macondo" }}
          >
            <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>
            <p class="py-3">
              {description?.map((des) => (
                <ul>
                  <li>- {des}</li>
                </ul>
              ))}
            </p>
            <p>
              Per piece price:{" "}
              <span className="text-gray-600 font-bold border-4 border-gray-50 rounded-2xl">
                ${price}
              </span>
            </p>
            <div className="mb-5">
              <p>
                Available Quantity :{" "}
                <span className="text-red-500 font-bold">
                  {available_quantity}
                </span>
              </p>
              <p>
                Minimu Order Quantity :{" "}
                <span className="text-red-500 font-bold">
                  {minimum_order_quantity}
                </span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                  <div>
                    <h2 class="text-center" style={{ fontFamily: "Koulen" }}>
                      <span className="text-2xl"> Order Glue Gun!</span>
                    </h2>
                    <form action="" onSubmit={handleOrder}>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          value={user.displayName}
                          disabled
                          class="input input-bordered input-sm w-full max-w-xs"
                        />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          value={user.email}
                          disabled
                          class="input input-bordered input-sm w-full max-w-xs"
                        />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Phone</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter your phone number"
                          class="input input-bordered input-sm w-full max-w-xs"
                          required
                        />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Address</span>
                        </label>
                        <textarea
                          name="address"
                          class="textarea textarea-bordered"
                          placeholder="Your address"
                          required
                        ></textarea>
                      </div>

                      <div className="text-center mt-3">
                        <h3
                          className="font-bold my-1"
                          style={{ fontFamily: "Macondo" }}
                        >
                          Amount you need
                        </h3>
                        <input
                          type="text"
                          name="order"
                          placeholder={minimum_order_quantity}
                          class="input input-bordered input-sm w-full max-w-xs"
                        />
                      </div>
                      <div class="card-actions justify-center mt-3">
                        <button class="btn btn-primary btn-sm">
                          place the order
                        </button>
                      </div>
                    </form>
                    <p
                      className="text-center mt-2"
                      style={{ fontFamily: "Macondo" }}
                    >
                      If you want to see your orders then click here <br></br>
                      <Link
                        to="/dashboard/myorders"
                        className="text-blue-500 underline"
                      >
                        My orders
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default Purchase;
