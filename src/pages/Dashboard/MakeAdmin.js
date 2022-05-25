import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-xl text-center mb-5">All users: {users.length}</h2>
      <div className="px-5">
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User Gmail address</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <MakeAdminRow
                  key={user._id}
                  user={user}
                  index={index}
                  refetch={refetch}
                ></MakeAdminRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
