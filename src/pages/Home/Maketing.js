import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faIndustry,
  faPalette,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
import "./Marketing.css";

const Maketing = () => {
  return (
    <div className="px-2 md:px-20 pb-10 marketing-container">
      <div className=" grid grid-cols-1 md:flex">
        <div className="mr-3">
          <div class="card marketing-card bg-base-100 shadow-xl">
            <div class="card-body text-center">
              <FontAwesomeIcon
                className="text-6xl text-accent mb-3"
                icon={faPeopleRoof}
              />
              <h1 className="text-2xl mb-3 marketing-header">We Manufacture</h1>
              <p>
                Submit a manufacturer to be featured with a free video and we'll
                send you a free sample to find our what you need.
              </p>
            </div>
          </div>
        </div>
        <div className="mr-3">
          <div class="card marketing-card bg-base-100 shadow-xl">
            <div class="card-body text-center">
              <FontAwesomeIcon
                className="text-6xl text-accent mb-3"
                icon={faPalette}
              />
              <h1 className="text-2xl mb-3 marketing-header">
                We Design Fabric
              </h1>
              <p>
                Choose from many fabrics and design your . Create and print only
                the fabric you need with no minimum order.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card marketing-card bg-base-100 shadow-xl">
            <div class="card-body text-center">
              <FontAwesomeIcon
                className="text-6xl text-accent mb-3"
                icon={faAward}
              />
              <h1 className="text-2xl mb-3 marketing-header">We Engineer</h1>
              <p>
                We carry an enormous inventory of all the things you need to
                complete your project: notions, patterns and trims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maketing;
