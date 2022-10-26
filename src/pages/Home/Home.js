import React from "react";
import Banner from "./Banner";
import Blog from "./Blog";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import HomeAbout from "./HomeAbout";
import HomeReviews from "./HomeReviews";
import Marketing from "./Marketing";
import Tools from "./Tools";

const Home = () => {
  // This code for ayykori start
  // Here we are catch the user_activity_id from url
  const params = new URLSearchParams(window.location.search);
  const user_activity_id = params.get("user_activity_id");

  const data = {
    user_activity_id,
  };

  // geting ayykori user trace value from localstorage
  const user_activity_key = localStorage.getItem("user_activity_key");

  if (user_activity_id) {
    if (user_activity_key === user_activity_id) {
    } else {
      // this post api for ayykori start
      fetch(`http://localhost:5000/userativity/track/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ user_activity_id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data == true) {
            console.log("found");
            localStorage.setItem("user_activity_key", user_activity_id);

            const fetchUrl = `https://intense-cove-25675.herokuapp.com/affsite/${user_activity_id}`;
            fetch(fetchUrl, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
                // localStorage.setItem("user_activity_key", user_activity_id);
              });
          } else {
            console.log("not found");
          }
        });
    }
    // This code for ayykori end
  }

  return (
    <div>
      <Banner></Banner>
      <Marketing></Marketing>
      <HomeAbout></HomeAbout>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Blog></Blog>
      <HomeReviews></HomeReviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
