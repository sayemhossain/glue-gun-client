import React from "react";
import contact from "../../assets/contact/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMapLocationDot,
  faMobileRetro,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="px-5 md:px-10 py-5">
      <div className="text-center pt-10">
        <h1
          className="text-3xl font-bold uppercase"
          style={{ fontFamily: "Teko" }}
        >
          Get in touch
        </h1>
        <p className="text-orange-400">
          <small>Our Blog</small>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" md:mt-20 md:ml-20 mt-5 px-5 text-gray-600 order-2 md:order-1">
          <h1
            className="text-2xl md:text-3xl font-bold pb-5"
            style={{ fontFamily: "Macondo" }}
          >
            Call Us & Boost Your Confidance
          </h1>
          <p>
            “I like to listen. I have learned a great deal from listening
            carefully. Most people never listen.” – Ernest Hemingway, Author and
            Journalist
          </p>
          <div className="mt-5">
            <div className="flex">
              <FontAwesomeIcon
                className="mr-5 mt-1 text-3xl"
                icon={faMobileRetro}
              />
              <div className="">
                <p className="font-bold">646-872-4210</p>
                <p>Don’t hesitate to contact us</p>
              </div>
            </div>
            <div className="flex mt-5">
              <FontAwesomeIcon
                className="mr-5 mt-2 text-3xl"
                icon={faLocationDot}
              />
              <div className="">
                <p className="font-bold">Factory Address</p>
                <p>350 Flatbush ave New York</p>
                <p>New York</p>
                <p>10013</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img className="h-96" src={contact} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
