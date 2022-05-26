import React from "react";
import useTools from "../../hooks/useTools";
import ManageToolsRow from "./ManageToolsRow";

const ManageTools = () => {
  const [tools] = useTools();

  return (
    <div>
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          All Tool : {tools.length}
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
                <ManageToolsRow
                  key={tool._id}
                  index={index}
                  tool={tool}
                ></ManageToolsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTools;
