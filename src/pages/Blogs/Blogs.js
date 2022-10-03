import React from "react";
import Blog from "../Home/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faEye } from "@fortawesome/free-solid-svg-icons";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.webp";

const Blogs = () => {
  return (
    <div className="pb-16 px-5 md:px-20">
      <div className="text-center pt-10">
        <h1
          className="text-3xl font-bold uppercase"
          style={{ fontFamily: "Teko" }}
        >
          Our recent blogs
        </h1>
        <p className="text-orange-400">
          <small>Top Blog</small>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10">
        <div className="shadow-xl">
          <div>
            <img className="w-full h-44" src={blog1} alt="" />
          </div>
          <h3 className="text-xl mt-5 mb-4 px-1 text-gray-600 blog-header">
            Optimizing performance in a React application
          </h3>
          <p className="pl-2">
            <ul>
              <li>1. Keeping component state local wher necessary.</li>
              <li>
                2. Memoizin React components to prevent unnecessary re-renders.
              </li>
              <li>3. Code-splitting in React using dynamic import()</li>
              <li>4. Windowing or list virtualization in React.</li>
              <li>5. Lazy loading images in React.</li>
            </ul>
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
        <div className="shadow-xl">
          <div>
            <img className="w-full h-44" src={blog5} alt="" />
          </div>
          <h3 className="text-xl mt-5 mb-4 px-1 text-gray-600 blog-header">
            What is a unit test? Why should write unit tests?
          </h3>

          <div className="pl-2">
            <p>
              Unit tests are typically automated tests written and run by
              software developers to ensure that a section of an application
              (known as the "unit") meets its design and behaves as intended. In
              procedural programming, a unit could be an entire module, but it
              is more commonly an individual function or procedure.
            </p>
          </div>
          <div className="flex justify-between items-baseline bg-amber-100 mt-5 p-4">
            <div className="flex items-center">
              <h3 className="mr-3 text-4xl font-bold">28</h3>
              <p>
                April <br /> 2022
              </p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon className="ml-2 mr-1" icon={faEye} />
              <p className="mr-2">6532</p>

              <FontAwesomeIcon className="ml-2 mr-1" icon={faCommentDots} />
              <p>1261</p>
            </div>
          </div>
        </div>
        <div className="shadow-xl">
          <div>
            <img className="w-full h-44" src={blog2} alt="" />
          </div>
          <h3 className="text-xl mt-5 mb-4 px-1 text-gray-600 blog-header">
            What are the different ways to manage a state in a React
            application?
          </h3>

          <div className="pl-2">
            <span>The Four Kinds of React State to Manage : </span>
            <br />
            <p className="mt-2">
              <span className="font-bold">Local (UI) state –</span> Local state
              is data we manage in one or another component.
            </p>
            <p className="mt-1">
              <span className="font-bold">Global (UI) state – </span> Global
              state is data we manage across multiple components.
            </p>
            <p className="mt-1">
              <span className="font-bold">Server state – </span> Data that comes
              from an external server that must be integrated with our UI state.
            </p>
            <p className="mt-1">
              <span className="font-bold">URL state – </span> Data that exists
              on our URLs, including the pathname and query parameters.
            </p>
          </div>
          <div className="flex justify-between items-baseline bg-amber-100 mt-5 p-4">
            <div className="flex items-center">
              <h3 className="mr-3 text-4xl font-bold">16</h3>
              <p>
                May <br /> 2022
              </p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon className="ml-2 mr-1" icon={faEye} />
              <p className="mr-2">897</p>

              <FontAwesomeIcon className="ml-2 mr-1" icon={faCommentDots} />
              <p>532</p>
            </div>
          </div>
        </div>
        <div className="shadow-xl">
          <div>
            <img className="w-full h-44" src={blog3} alt="" />
          </div>
          <h3 className="text-xl mt-5 mb-4 px-1 text-gray-600 blog-header">
            How does prototypical inheritance work?
          </h3>

          <div className="pl-2">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
          <div className="flex justify-between items-baseline bg-amber-100 mt-5 p-4">
            <div className="flex items-center">
              <h3 className="mr-3 text-4xl font-bold">22</h3>
              <p>
                February <br /> 2022
              </p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon className="ml-2 mr-1" icon={faEye} />
              <p className="mr-2">1324</p>

              <FontAwesomeIcon className="ml-2 mr-1" icon={faCommentDots} />
              <p>432</p>
            </div>
          </div>
        </div>
        <div className="shadow-xl">
          <div>
            <img className="w-full h-44" src={blog4} alt="" />
          </div>
          <h3 className="text-xl mt-5 mb-4 px-1 text-gray-600 blog-header">
            Why should we not update the state directly?
          </h3>

          <div className="pl-2">
            <p>
              <ul>
                <li>
                  1. If you update it directly, calling the setState() afterward
                  may just replace the update you made.
                </li>
                <li>
                  2. When you directly update the state, it does not change
                  this.state immediately. Instead, it creates a pending state
                  transition, and accessing it after calling this method will
                  only return the present value.
                </li>
                <li>
                  3. You will lose control of the state across all components.
                </li>
              </ul>
            </p>
          </div>
          <div className="flex justify-between items-baseline bg-amber-100 mt-5 p-4">
            <div className="flex items-center">
              <h3 className="mr-3 text-4xl font-bold">09</h3>
              <p>
                April <br /> 2022
              </p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon className="ml-2 mr-1" icon={faEye} />
              <p className="mr-2">4652</p>

              <FontAwesomeIcon className="ml-2 mr-1" icon={faCommentDots} />
              <p>765</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
