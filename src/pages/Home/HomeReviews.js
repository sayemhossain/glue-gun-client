import React, { useEffect, useState } from "react";
import HomeReviewContainer from "./HomeReviewContainer";

const HomeReviews = () => {
  const [reviews, setReiews] = useState([]);

  useEffect(() => {
    fetch(`https://intense-cove-25675.herokuapp.com/reviews`, {
      method: "GEt",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReiews(data));
  }, []);
  return (
    <div className=" md:px-20 mt-10">
      <div className="text-center pt-10">
        <h1
          className="text-3xl font-bold uppercase"
          style={{ fontFamily: "Teko" }}
        >
          Reviews on us
        </h1>
        <p className="text-orange-400">
          <small>reviews</small>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <HomeReviewContainer
            key={review._id}
            review={review}
          ></HomeReviewContainer>
        ))}
      </div>
    </div>
  );
};

export default HomeReviews;
