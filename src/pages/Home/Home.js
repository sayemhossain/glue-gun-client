import React from "react";
import Banner from "./Banner";
import Blog from "./Blog";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import HomeAbout from "./HomeAbout";
import Marketing from "./Marketing";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Marketing></Marketing>
      <HomeAbout></HomeAbout>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default Home;
