import React from "react";
import "./Blog.css";
import blog4 from "../../assets/blog/blog4.webp";
import blog2 from "../../assets/blog/blog2.jpg";
import blog3 from "../../assets/blog/blog3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faEye } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <div className="px-5 md:px-20">
      <div className="text-center pt-10">
        <h1
          className="text-3xl font-bold uppercase"
          style={{ fontFamily: "Teko" }}
        >
          Recent posts
        </h1>
        <p className="text-orange-400">
          <small>Our Blog</small>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="blog-card">
          <div className="">
            <img className="w-full h-60" src={blog4} alt="" />
            <h1 className="text-xl mt-5 mb-4 text-gray-600 blog-header">
              What are the Benefits of using Industrial Glue Guns?
            </h1>
            <p>
              Benefits of a hot glue gun You can dispose of them as your other
              waste material. A glue gun does not create a huge waste. Most of
              its part is utilized in work, and you don’t have to clean the
              mess. There are no volatile alternatives...
              <a href="" className="text-primary">
                Read more
              </a>
            </p>
            <div className="flex justify-between bg-amber-100 mt-5 p-4">
              <div className="flex items-center">
                <h3 className="mr-3 text-4xl font-bold">25</h3>
                <p>
                  September <br /> 2021
                </p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon className="ml-2 mr-1" icon={faEye} />
                <p className="mr-2">3412</p>

                <FontAwesomeIcon className="ml-2 mr-1" icon={faCommentDots} />
                <p>43</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img className="w-full h-60" src={blog2} alt="" />
            <h1 className="text-xl mt-5 text-gray-600 mb-4 blog-header">
              Fugitive Gummy Glue & Dispensing Options?
            </h1>
            <p>
              Fugitive glue, also called gummy glue, credit card glue, e-z
              release glue, or booger glue is a low-tack adhesive that produces
              a removable non-permanent joint. The type of duration of folding
              and gluing operations...
              <a href="" className="text-primary">
                Read more
              </a>
            </p>
            <div className="flex justify-between bg-amber-100 mt-5 p-4">
              <div className="flex items-center">
                <h3 className="mr-3 text-4xl font-bold">19</h3>
                <p>
                  February <br /> 2022
                </p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon className="ml-2 mr-1" icon={faEye} />
                <p className="mr-2">1487</p>

                <FontAwesomeIcon className="ml-2 mr-1" icon={faCommentDots} />
                <p>189</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img className="w-full h-60" src={blog3} alt="" />
            <h1 className="text-xl mt-5 text-gray-600 mb-4  blog-header">
              Save on Gummy Glue with a Pneumatic Dispensing Applicator.
            </h1>
            <p>
              If applying fugitive glue by hand is costing you too much time and
              money, it may be time to upgrade to a bulk tank pneumatic
              dispensing system. The Infinity Bond EasyMelt Benchtop is offers
              some big long-term advantages...
              <a href="" className="text-primary">
                Read more
              </a>
            </p>
            <div className="flex justify-between bg-amber-100 mt-5 p-4">
              <div className="flex items-center">
                <h3 className="mr-3 text-4xl font-bold">05</h3>
                <p>
                  March <br /> 2022
                </p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon className="ml-2 mr-1" icon={faEye} />
                <p className="mr-2">1712</p>

                <FontAwesomeIcon className="ml-2 mr-1" icon={faCommentDots} />
                <p>265</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
