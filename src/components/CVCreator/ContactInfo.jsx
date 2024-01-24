import React from "react";

const ContactInfo = ({ handleContactInfoChange }) => {
  return (
    <div className="border-2 border-black m-10 p-10">
      <h1 className="text-2xl">Contact Info</h1>
      <form>
        <ul>
          <li className="flex flex-col">
            <label>Email Address:</label>
            <input
              className="border-2 border-black"
              name="email"
              type="email"
              placeholder="john.doe@gmail.com"
              onChange={handleContactInfoChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Phone Number:</label>
            <input
              className="border-2 border-black"
              name="phone"
              type="phone-number"
              placeholder="0400-123-123"
              onChange={handleContactInfoChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Location:</label>
            <input
              className="border-2 border-black"
              name="location"
              type="text"
              placeholder="Helsinki, Finland"
              onChange={handleContactInfoChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Home Page:</label>
            <input
              className="border-2 border-black"
              name="homePage"
              type="text"
              placeholder="Helsinki, Finland"
              onChange={handleContactInfoChange}
            />
          </li>
          <li className="flex flex-col">
            <label>LinkedIn Profile:</label>
            <input
              className="border-2 border-black"
              name="linkedin"
              type="text"
              placeholder="www.linkedin.com/in/johndoe"
              onChange={handleContactInfoChange}
            />
          </li>
          <li className="flex flex-col">
            <label>GitHub Profile:</label>
            <input
              className="border-2 border-black"
              name="github"
              type="text"
              placeholder="www.github.com/johndoe"
              onChange={handleContactInfoChange}
            />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ContactInfo;
