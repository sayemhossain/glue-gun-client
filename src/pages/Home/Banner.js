import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.bond-tech-industries.com/wp-content/uploads/2020/03/Small-glue-gun.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 banner-container"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="banner-header text-5xl font-bold">Hello there</h1>
            <h4 className=" banner-subheader mb-5 mt-1 text-sm text-yellow-100">
              This is Glue Gun official website
            </h4>
            <p className="mb-5 banner-txt text-2xl">
              Hot Melt Glue Gun Kit Is Environmental-Friendly, It Has Super
              Strong Adhesive When Glue Between 2 Different Parts, But Easy To
              Clean When Forced Apart These 2 Stickup Parts, It Will Always Keep
              Your Items Clean.
            </p>
            <button className="btn btn-primary">
              Read Mor <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
