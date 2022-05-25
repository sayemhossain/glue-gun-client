import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirmOrder from "./DeleteConfirmOrder";

const OrderDetails = ({ order, index }) => {
  const [deletingOrder, setDeletingOrder] = useState(false);
  const {
    orderId,
    productName,
    img,
    price,
    customerNamer,
    address,
    phone,
    totalCost,
    user,
    orderQuantity,
  } = order;

  const handleDeleteOrder = (orderId) => {
    fetch(`http://localhost:5000/order/${orderId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setDeletingOrder(null);
      });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div class="flex items-center space-x-1">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar" />
              </div>
            </div>
            <div>
              <div class="font-bold text-sm">
                <small>{productName}</small>
              </div>
              <div class="text-sm opacity-50">Price: ${price}</div>
            </div>
          </div>
        </td>
        <td>
          {customerNamer}
          <br />
          <span class="badge badge-ghost badge-sm">Address : {address}</span>
          <br></br>
          <span class="badge badge-ghost badge-sm">phone : {phone}</span>
        </td>
        <td>Quantity : {orderQuantity}</td>
        <td>${totalCost}</td>
        <td>
          <button
            onClick={() => {
              setDeletingOrder(order);
            }}
            className="btn btn-outline btn-xs btn-error px-5"
          >
            Cancle
          </button>
        </td>
        <td>
          {price && !order.paid && (
            <Link to={`/dashboard/payment/${orderId}`}>
              <button className="btn btn-primary px-8 btn-outline btn-xs">
                pay
              </button>
            </Link>
          )}
          {price && order.paid && (
            <button className="btn btn-primary px-8 btn-outline btn-xs">
              paid
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrderDetails;
