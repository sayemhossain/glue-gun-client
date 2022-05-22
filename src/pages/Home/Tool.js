import React from "react";

const Tool = ({ tool }) => {
  const { name, img, price, description } = tool;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-48 h-48" src={img} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {name}
            <div class="badge badge-secondary">${price}</div>
          </h2>
          <p>
            {description.map((des) => (
              <ul>
                <li>- {des}</li>
              </ul>
            ))}
          </p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
