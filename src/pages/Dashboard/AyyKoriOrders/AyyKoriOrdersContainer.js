import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AyyKoriOrdersContainer = ({ affOrder, index }) => {
  const {
    productName,
    user,
    price,
    orderQuantity,
    totalCost,
    phone,
    affUserInfo,
    userActivityId,
  } = affOrder;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user}</td>
      <td>{productName}</td>
      <td>
        <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
        {price}
      </td>
      <td>{orderQuantity}</td>
      <td>
        <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
        {totalCost}
      </td>
      <td>{phone}</td>
      <td>{affUserInfo}</td>
      <td>{userActivityId}</td>
    </tr>
  );
};

export default AyyKoriOrdersContainer;
