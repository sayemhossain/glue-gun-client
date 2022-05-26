import React from "react";
import portfolio from "../../assets/portfolio.jpg";

const MyProtfolio = () => {
  return (
    <div className="px-5 md:px-28 mb-10 min-h-screen mt-10 md:mt-38">
      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl uppercase font-bold">Shayem Hossain</h3>
          <p>
            <small className="font-bold">Front end web developer</small>
          </p>
          <p>
            <small>shayem15-12011@diu.edu.bd</small>
            <br />
            <small>01766-069458</small>
          </p>
        </div>
        <div>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={portfolio} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <h4 className="font-bold mt-3 text-gray-600 text-2xl mb-2">
            Objective
          </h4>
          <p className="pl-2">
            I'm Shayem hossain.I am an enthusiastic, self-motivated, reliable,
            responsible, and hard-working person. I'm a Frontend web developer
            who is passionate about making error-free website. I have a passion
            for learning and sharing my knowledge with others as publicly as
            possible. I love to solve real-world problems. I am strategic
            goal-oriented and always work with an end goal in mind. I pride
            myself on doing quality work and maintain excellent communication
          </p>
        </div>
        <div>
          <h4 className="font-bold mt-3 text-gray-600 mb-2 text-2xl">
            Skill Highlights
          </h4>
          <p className="pl-2">
            <span className="font-bold text-gray-600">Expertise:</span> React,
            JavaScript, ES6, REST API, Router, React Hook, React Bootstrap,
            Bootstrap-5, CSS3, HTML5.
          </p>
          <p className="pl-2">
            <span className="font-bold text-gray-600">Comfortable:</span>{" "}
            MongoDB, Express, Node, Firebase, Tailwind CSS, daisyUI.
          </p>
          <p className="pl-2">
            <span className="font-bold text-gray-600">Tools:</span> Github, VS
            Code, Chrome Dev Tools, heroku, Netlify, Figma.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-600 mt-3 mb-2 text-2xl">
            Projects
          </h4>
          <div className="pl-2">
            <p className="text-xl">
              1. Home Furniture |{" "}
              <a
                className="text-blue-500"
                href="https://home-furniture-279d6.web.app/"
              >
                Live website
              </a>
            </p>
            <p className="md:pl-5 mt-1">
              <span>
                -This project has been made for furniture warehouse management.
              </span>
              <br />
              <span>
                -This project data load from database mongodb and server heroku
                and react firebase.
              </span>
              <br />
              <span>
                -This projects also use react custom link router Node, express.
              </span>
              <br />
              <span>
                -React bootstrap framework using this project. also use 404
                route and favicon
              </span>
            </p>
          </div>
          <div className="mt-2 pl-2">
            <p className="text-xl">
              1. Resto |{" "}
              <a
                className="text-blue-500"
                href="https://sayemhossain.github.io/resto/"
              >
                Live website
              </a>
            </p>
            <p className="md:pl-5 mt-1">
              <span>-This project has been made for a resturant.</span>
              <br />
              <span>-This is a Bootstarap based website.</span>
            </p>
          </div>
          <div className="mt-2 pl-2">
            <p className="text-xl">
              1. Doctor Portal |{" "}
              <a
                className="text-blue-500"
                href="https://doctor-portal-5c43b.web.app/"
              >
                Live website
              </a>
            </p>
            <p className="md:pl-5 mt-1">
              <span>
                -This is a doctor portal website here you can book you
                appointment on our selected time.
              </span>
              <br />
              <span>
                -This project data load from database mongodb and server heroku
                and react firebase.
              </span>
              <br />
              <span>
                -This projects also use react custom link router Node, express.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold mt-3 text-gray-600 text-2xl mb-1">
          Education
        </h4>
        <div className="pl-2">
          <div>
            <h5 className="text-lg font-bold">
              <small>Secondary School Certificate- SSC</small>
            </h5>
            <p>Mubbelai Lutfia High School</p>
            <p>Grade: GPA 5.00</p>
          </div>
          <div>
            <h5 className="text-lg font-bold">
              <small>Higher Secondary Certificate- HSC</small>
            </h5>
            <p>Ullapara Science Collage</p>
            <p>Grade: GPA 5.00</p>
          </div>
          <div>
            <h5 className="text-lg font-bold">
              <small>B.S. Computer Science and Engineering- CSE</small>
            </h5>
            <p>Daffodil International University</p>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold mt-3 text-gray-600 text-2xl mb-1">
          Languages
        </h4>
        <div className="pl-2">
          <h5>
            Bangla- <small>Native</small>
          </h5>
          <h5>
            English- <small>Fluent</small>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MyProtfolio;
