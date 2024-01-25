import React from "react";

const ContactInfo = ({ contactInfo, handleContactInfoChange }) => {
  return (
    <form>
      <ul>
        <li className="flex flex-col">
          <label>Email Address:</label>
          <input
            className="border-2 border-black"
            name="email"
            type="email"
            placeholder="john.doe@gmail.com"
            value={contactInfo.email}
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
            value={contactInfo.phone}
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
            value={contactInfo.location}
            onChange={handleContactInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <label>Home Page:</label>
          <input
            className="border-2 border-black"
            name="homePage"
            type="text"
            placeholder="www.johndoe.com"
            value={contactInfo.homePage}
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
            value={contactInfo.linkedin}
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
            value={contactInfo.github}
            onChange={handleContactInfoChange}
          />
        </li>
      </ul>
    </form>
  );
};

export default ContactInfo;
