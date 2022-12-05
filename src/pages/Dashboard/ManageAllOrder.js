import { faBan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const ManageAllOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://api.gluegun.offerdoffer.com/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(orders);
  return (
    <div className="pb-10">
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          All order : {orders.length}
        </h3>
      </div>
      <hr className="mb-5" />
      <div className="px-5">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Produc Information</th>
                <th>User Information</th>
                <th>Order Information</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div class="flex items-center space-x-1">
                      <div class="avatar">
                        <div class="mask mask-squircle w-16 h-16">
                          <img src={order.img} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold text-sm">
                          <small>{order.productName}</small>
                        </div>
                        <div class="text-sm opacity-50">
                          <span>Cost per unit : ${order.price}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {order.customerNamer}
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Address : {order.address}
                    </span>
                    <br></br>
                    <span class="badge badge-ghost badge-sm">
                      phone : {order.phone}
                    </span>
                    <br></br>
                    <span class="badge badge-ghost badge-sm">
                      Email : {order.user}
                    </span>
                  </td>

                  <td>
                    <span className="text-xs">
                      TransactionId : <br />
                      {order.transactionId
                        ? order.transactionId
                        : "XXXXXXXXXXXX"}
                    </span>
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Order Id : {order.orderId}
                    </span>
                    <br></br>
                    <span class="badge badge-ghost badge-sm">
                      orderQuantity : {order.orderQuantity}
                    </span>
                    <br></br>
                    <span class="badge badge-ghost badge-sm">
                      Total Cost : {order.totalCost}
                    </span>
                  </td>
                  <td>
                    {order.paid ? (
                      <div className="flex justify-center">
                        <FontAwesomeIcon
                          className="text-2xl text-green-500"
                          icon={faCircleCheck}
                        />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <FontAwesomeIcon
                          className="text-2xl text-red-600"
                          icon={faBan}
                        />
                      </div>
                    )}
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

export default ManageAllOrder;
