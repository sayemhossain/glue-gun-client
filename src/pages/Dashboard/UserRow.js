import React from "react";
import { toast, ToastContainer } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { _id, email, phone, address } = user;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{_id}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default UserRow;
