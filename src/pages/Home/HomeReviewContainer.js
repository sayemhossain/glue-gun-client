import { faStar, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeReviewContainer = ({ review }) => {
  const { name, ratting, description } = review;
  return (
    <div className="text-center mt-10">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <FontAwesomeIcon className="text-7xl" icon={faUserTie} />
          <h2 class="text-xl font-bold" style={{ fontFamily: "Macondo" }}>
            {name}
          </h2>
          <p>
            <span className="font-bold">{ratting}</span>
            <FontAwesomeIcon
              className="text-yellow-400 ml-1"
              icon={faStar}
            ></FontAwesomeIcon>
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeReviewContainer;
