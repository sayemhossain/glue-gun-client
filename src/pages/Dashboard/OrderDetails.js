import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteConfirmOrder from "./DeleteConfirmOrder";

const OrderDetails = ({ order, index }) => {
  const [deletingOrder, setDeletingOrder] = useState(false);
  const {
    _id,
    orderId,
    productName,
    img,
    price,
    customerNamer,
    address,
    phone,
    totalCost,
    user,
    paid,
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
          {price && !paid && (
            <button
              onClick={() => {
                setDeletingOrder(order);
              }}
              className="btn btn-outline btn-xs btn-error px-5"
            >
              Cancle
            </button>
          )}
          {price && paid && (
            <button className="btn btn-outline btn-xs btn-error px-5" disabled>
              Cancle
            </button>
          )}
        </td>
        <td>
          {price && !paid && (
            <Link to={`/dashboard/payment/${_id}`}>
              <button className="btn btn-primary px-8 btn-outline btn-xs">
                pay
              </button>
            </Link>
          )}
          {price && paid && (
            <span className=" flex items-center px-8">
              <FontAwesomeIcon
                className="text-green-400 mr-1"
                icon={faCircleCheck}
              />
              <span className="text-xl">paid</span>
            </span>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrderDetails;
