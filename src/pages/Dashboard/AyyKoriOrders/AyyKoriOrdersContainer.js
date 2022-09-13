import React from "react";

const AyyKoriOrdersContainer = ({ affOrder, index }) => {
  const {
    productName,
    user,
    price,
    orderQuantity,
    totalCost,
    phone,
    userTrackId,
    userActivityId,
  } = affOrder;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user}</td>
      <td>{productName}</td>
      <td>{price} tk</td>
      <td>{orderQuantity}</td>
      <td>{totalCost} tk</td>
      <td>{phone}</td>
      <td>{userTrackId}</td>
      <td>{userActivityId}</td>
    </tr>
  );
};

export default AyyKoriOrdersContainer;
