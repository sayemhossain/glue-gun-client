import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order/userName=${user.email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  return (
    <div>
      <div className="text-center pt-10">
        <h1
          className="text-3xl font-bold uppercase"
          style={{ fontFamily: "Teko" }}
        >
          Get in touch: {orders.length}
        </h1>
        <p className="text-orange-400">
          <small>Our Blog</small>
        </p>
      </div>
    </div>
  );
};

export default MyOrders;
