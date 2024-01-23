import React from "react";

const ContactInfo = ({
  email,
  phoneNumber,
  location,
  homePage,
  gitHubProfile,
}) => {
  console.log(email);
  return (
    <>
      <ul>
        <li>Email: {email.value}</li>
        <li>Phonenumber: {phoneNumber.value}</li>
        <li>Location: {location.value}</li>
        <li>Home page: {homePage.value}</li>
        <li>GitHub-profile: {gitHubProfile.value}</li>
      </ul>
    </>
  );
};

export default ContactInfo;
