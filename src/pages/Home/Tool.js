import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Tool.css";

const Tool = ({ tool }) => {
  const {
    name,
    img,
    price,
    description,
    minimum_order_quantity,
    available_quantity,
  } = tool;
  return (
    <div className="px-5">
      <div class="card tool-card md:w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-48 h-48" src={img} />
        </figure>
        <div class="card-body tool-card-body">
          <h2 class="card-title" style={{ fontFamily: "Macondo" }}>
            {name}
            <div class="badge badge-secondary">${price}</div>
          </h2>
          <p className="text-sm">
            <small>
              <FontAwesomeIcon className=" text-yellow-400" icon={faStar} />
              <FontAwesomeIcon className="ml-2 text-yellow-400" icon={faStar} />
              <FontAwesomeIcon className="ml-2 text-yellow-400" icon={faStar} />
              <FontAwesomeIcon className="ml-2 text-yellow-400" icon={faStar} />
              <FontAwesomeIcon className="ml-2 text-yellow-400" icon={faStar} />
            </small>
          </p>
          <p style={{ fontFamily: "Macondo" }}>
            {description.map((des) => (
              <ul>
                <li>- {des}</li>
              </ul>
            ))}
          </p>
          <p style={{ fontFamily: "Macondo" }}>
            Minimum order quantity :
            <span className="font-bold text-gray-500">
              {" "}
              {minimum_order_quantity}
            </span>
          </p>
          <p style={{ fontFamily: "Macondo" }}>
            Available quantity :{" "}
            <span className="font-bold text-gray-500">
              {available_quantity}
            </span>
          </p>
          <div class="card-actions justify-end">
            <Link to="/purchase">
              <button class="btn tool-btn btn-xs btn-primary">
                Purchase <FontAwesomeIcon className="ml-2" icon={faCartPlus} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
