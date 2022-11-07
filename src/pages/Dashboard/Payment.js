import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1rB9J1SvemP9KBSWYsv07hEcXus8uWOEaw7YkkJkmVq6rDOkO7AjP65OrfrAzODqWPHRoPOQrBv4BTlFiorVnv00rNDhJrJr"
);
const Payment = () => {
  const { id } = useParams();

  const url = `https://intense-cove-25675.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="text-center py-5">
        <h1
          className="text-xl font-bold uppercase text-blue-300"
          style={{ fontFamily: "Macondo" }}
        >
          Payment leaderboard
        </h1>
      </div>
      <div>
        <div class=" pt-14 min-h-screen bg-base-200">
          <div className="grid grid-cols-1 md:flex h-80 items-center justify-center">
            <div className="card bg-base-100">
              <div class=" px-10 py-5 flex items-center">
                <div>
                  <img className="w-36 mr-5" src={order.img} alt="" />
                </div>
                <div>
                  <h2>
                    <span className="text-sm">
                      Hello, {order.customerNamer}
                      <br></br>
                    </span>{" "}
                    <span className="font-bold">
                      Please pay for : {order.productName}
                    </span>
                  </h2>
                  <p>Order quantity : {order.orderQuantity}</p>
                  <p>Total cost : ${order.totalCost}</p>
                </div>
              </div>
            </div>

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 md:ml-10 mt-16 md:mt-0">
              <div class="card-body">
                <Elements stripe={stripePromise}>
                  <CheckoutForm order={order} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
