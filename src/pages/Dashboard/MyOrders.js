import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderDetails from "./OrderDetails";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`https://api.gluegun.offerdoffer.com/order?user=${user.email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user, orders]);

  return (
    <div className="md:pb-20 ">
      <div>
        <div className="text-center py-5">
          <h1
            className="text-xl font-bold uppercase text-blue-300"
            style={{ fontFamily: "Macondo" }}
          >
            Orders Review
          </h1>
          <p className="text-orange-400">
            <small>Total order: {orders?.length}</small>
          </p>
        </div>
      </div>
      <div className="px-2">
        <div class="overflow-x-auto mx-auto md:w-11/12 border-2 rounded-lg shadow-xl">
          <table class="table w-full" style={{ fontFamily: "Macondo" }}>
            <thead>
              <tr>
                <th></th>
                <th>Product Details</th>
                <th>Customer Deatils</th>
                <th>Order Quantity</th>
                <th>Total cost</th>
                <th>Order Cancle</th>
                <th>payment status</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <OrderDetails
                  key={order._id}
                  order={order}
                  index={index}
                ></OrderDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
