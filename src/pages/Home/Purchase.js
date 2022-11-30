import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import useToolDetails from "../../hooks/useToolDetails";

const Purchase = () => {
  // Here we are catch the user_activity_id from url
  const params = new URLSearchParams(window.location.search);
  const user_activity_id = params.get("user_activity_id");

  const data = {
    user_activity_id,
  };

  // geting ayykori user trace value from localstorage
  const user_activity_key = localStorage.getItem("user_activity_key");

  if (user_activity_id) {
    if (user_activity_key === user_activity_id) {
    } else {
      // this post api for ayykori start
      fetch(`https://api.mkadsdigital.com/userativity/track`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ user_activity_id }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result == true) {
            console.log("found");
            localStorage.setItem("user_activity_key", user_activity_id);

            const fetchUrl = `https://intense-cove-25675.herokuapp.com/affsite/${user_activity_id}`;
            fetch(fetchUrl, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
                // localStorage.setItem("user_activity_key", user_activity_id);
              });
          } else {
            console.log("not found");
          }
        });
    }
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

    if (user_activity_key) {
      const affOrder = {
        user_activity_key,
        order_details: {
          products: [
            {
              product_id: _id,
              product_name: name,
              quantity: orderQuantity,
              regular_price: price,
              offer_status: false,
            },
          ],
          total_amount: totalCost,
          subtotal_amount: totalCost,
          discount_amount: "",
          coupon_code: "",
          deliveryStatus: "pending",
        },
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
        user_activity_key,
      };
      const newQuantity = available_quantity - orderQuantity;

      // this post api for ayykori start
      fetch(`https://api.mkadsdigital.com/client/orders/track`, {
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
    localStorage.removeItem("user_activity_key");
    localStorage.removeItem("affUserTrackId");
  }, 1296000 * 1000);
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
                Minimum Order Quantity :{" "}
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
