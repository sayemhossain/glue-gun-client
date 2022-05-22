import React from "react";
import aboutImg from "../../assets/about-img/home-about.jpg";
import sign from "../../assets/about-img/John_McCain_Signature.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <section className="py-5 md:pt-20 px-5 md:px-20">
      <div className="grid grid-cols-1 md:flex text-center md:text-left">
        <div>
          <img className="rounded-lg shadow-xl" src={aboutImg} alt="" />
        </div>
        <div className="px-2 md:px-10 pt-7">
          <h1 className="text-4xl mb-5 md:mb-10 text-gray-500 homeAbout-header">
            Our Capabilities
          </h1>
          <p>
            Stop by today; our talented staff will be happy to help you find
            what you’re searching for!
          </p>
          <p className="mt-5 mb-5">CEO: Steven Rogers</p>
          <img className="w-28 mx-auto md:mx-0" src={sign} alt="" />
          <button className="btn btn-primary mt-7">
            About Us <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
