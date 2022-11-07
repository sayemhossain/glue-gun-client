import React from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";

const ManageToolsRow = ({ tool, index }) => {
  const { _id } = tool;
  const handleDeleteTool = () => {
    fetch(`http://localhost:5000/tools/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Delete successfull.");
      });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={tool.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{tool.name}</td>
        <td>
          {tool.description.map((des) => (
            <ul>
              <li>-{des.length > 80 ? des.slice(0, 40) + "..." : des}</li>
            </ul>
          ))}
        </td>
        <td>{tool.available_quantity}</td>
        <td>{tool.minimum_order_quantity}</td>
        <td>${tool.price}</td>
        <td>
          <button
            onClick={handleDeleteTool}
            className="btn btn-error btn-xs text-base-100"
          >
            <FontAwesomeIcon className=" mr-1" icon={faTrashCan} /> Delete
          </button>
        </td>
      </tr>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default ManageToolsRow;
