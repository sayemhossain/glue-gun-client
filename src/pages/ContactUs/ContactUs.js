import React from "react";
import Contact from "../Home/Contact";
import MessengerCustomerChat from "react-messenger-customer-chat";

const ContactUs = () => {
  return (
    <div>
      <Contact></Contact>
      <MessengerCustomerChat pageId="323658974633921" appId="512974024134476" />
    </div>
  );
};

export default ContactUs;
