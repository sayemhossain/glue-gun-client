import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OrderDetails = ({ order, index }) => {
  const {
    orderId,
    productName,
    img,
    price,
    customerNamer,
    address,
    phone,
    user,
    orderQuantity,
  } = order;

  const totalCost = orderQuantity * price;
  const handleOrder = () => {
    console.log("Clicked");
    //   send data to the server for updating the quantiry after order
    // const url = `http://localhost:5000/tools/${_id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ newQuantity }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => toast.success("Your order is Successfull!"));
    // event.target.reset();
  };
  const handleDeleteOrder = (orderId) => {
    fetch(`http://localhost:5000/order/${orderId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data.deletedCount) {
        //   toast.success(`Doctor deleted.`);
        //   // setDeletingDoctor(null);
        //   // refetch();
        // }
      });
  };
  return (
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
            handleDeleteOrder(orderId);
          }}
          className="btn btn-outline btn-xs btn-error px-5"
        >
          Cancle
        </button>
      </td>
      <td>
        <button class="btn btn-primary px-8 btn-outline btn-xs">Pay</button>
      </td>
    </tr>
  );
};

export default OrderDetails;
