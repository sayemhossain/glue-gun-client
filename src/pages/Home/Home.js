import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
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
    </div>
  );
};

export default Home;
