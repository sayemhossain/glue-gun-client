import { faUserCheck, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const MakeAdminRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`Successfully make an admin`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button class="btn btn-primary btn-xs" onClick={makeAdmin}>
            <FontAwesomeIcon
              className="mr-1 text-base-100"
              icon={faUserCheck}
            />
            Make Admin
          </button>
        ) : (
          <p className="text-sm">Already an admin</p>
        )}
      </td>

      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default MakeAdminRow;
