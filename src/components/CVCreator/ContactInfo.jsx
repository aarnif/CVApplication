import React from "react";

const ContactInfo = ({
  email,
  phoneNumber,
  location,
  homePage,
  gitHubProfile,
}) => {
  return (
    <div className="border-2 border-black m-10 p-10">
      <h1 className="text-2xl">Contact Info</h1>
      <form>
        <ul>
          <li className="flex flex-col">
            <label>Email:</label>
            <input className="border-2 border-black" {...email} />
          </li>
          <li className="flex flex-col">
            <label>Phone number:</label>
            <input className="border-2 border-black" {...phoneNumber} />
          </li>
          <li className="flex flex-col">
            <label>Location:</label>
            <input className="border-2 border-black" {...location} />
          </li>
          <li className="flex flex-col">
            <label>Home page:</label>
            <input className="border-2 border-black" {...homePage} />
          </li>
          <li className="flex flex-col">
            <label>GitHub profile:</label>
            <input className="border-2 border-black" {...gitHubProfile} />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ContactInfo;
