import React from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useToolDetails from "../../hooks/useToolDetails";

const Purchase = () => {
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
    const newQuantity = parseInt(available_quantity) - parseInt(orderQuantity);
    console.log(newQuantity);

    if (orderQuantity > available_quantity) {
      return toast.error("Sorry we don't have enough products !");
    }
    if (orderQuantity < minimum_order_quantity) {
      return toast.error("You have to fulfil our minimum orders requirment !");
    }

    // send data to the server for updating the quantiry
    const url = `http://localhost:5000/tools/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => toast.success("Your order is Successfull!"));
    event.target.reset();
  };

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
                  <h2 class="text-center" style={{ fontFamily: "Koulen" }}>
                    <span className="text-2xl">Order Glue Gun!</span>
                  </h2>
                  <form action="" onSubmit={handleOrder}>
                    <div className="text-center">
                      <input
                        type="text"
                        name="order"
                        placeholder="Enter quantity"
                        class="input input-bordered input-sm w-full max-w-xs"
                      />
                    </div>
                    <div class="card-actions justify-center mt-3">
                      <button class="btn btn-primary btn-sm">Buy Now</button>
                    </div>
                  </form>
                  <p className="text-center" style={{ fontFamily: "Macondo" }}>
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
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default Purchase;