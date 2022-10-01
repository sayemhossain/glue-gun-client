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
    affUserTrackId,
    affUserActivityId,
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
      <td>{affUserTrackId}</td>
      <td>{affUserActivityId}</td>
    </tr>
  );
};

export default AyyKoriOrdersContainer;
