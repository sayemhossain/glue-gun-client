import React, { useEffect, useState } from "react";
import AyyKoriOrdersContainer from "./AyyKoriOrdersContainer";

const AyyKoriOrders = () => {
  const [affOrders, setAffOrders] = useState([]);

  useEffect(() => {
    fetch(`https://intense-cove-25675.herokuapp.com/orders/userTrackId`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAffOrders(data));
  }, []);
  return (
    <div className="">
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          Orders From AyyKori
        </h3>
      </div>
      <hr />
      <div className="py-10 md:px-20">
        <div className="mb-2">
          <p className="bg-primary p-1 text-white font-semibold rounded text-center">
            Total Orders: {affOrders.length}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-compact  w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>User Emai</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Order Quantity</th>
                <th>Total Cost</th>
                <th>Phone</th>
                <th>User Track Id</th>
                <th>User Activity Id</th>
              </tr>
            </thead>
            <tbody>
              {affOrders?.map((affOrder, index) => (
                <AyyKoriOrdersContainer
                  key={affOrder._id}
                  affOrder={affOrder}
                  index={index}
                ></AyyKoriOrdersContainer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AyyKoriOrders;
