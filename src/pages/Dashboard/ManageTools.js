import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useTools from "../../hooks/useTools";

const ManageTools = () => {
  const [tools] = useTools();
  return (
    <div>
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          All order : {tools.length}
        </h3>
      </div>
      <hr className="mb-5" />
      <div className="px-5  pb-20">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Product Name</th>
                <th>description</th>
                <th>available quantity</th>
                <th>minimum order quantity</th>
                <th>Price</th>
                <th>Delete product</th>
              </tr>
            </thead>
            <tbody>
              {tools?.map((tool, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={tool.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{tool.name}</td>
                  <td>
                    {tool.description.map((des) => (
                      <ul>
                        <li>-{des}</li>
                      </ul>
                    ))}
                  </td>
                  <td>{tool.available_quantity}</td>
                  <td>{tool.minimum_order_quantity}</td>
                  <td>${tool.price}</td>
                  <td>
                    <button className="btn btn-error btn-xs text-base-100">
                      <FontAwesomeIcon className=" mr-1" icon={faTrashCan} />{" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTools;
