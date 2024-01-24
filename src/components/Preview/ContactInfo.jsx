import React from "react";

const ContactInfo = ({ contactInfo }) => {
  const { email, phone, location, homePage, linkedin, github } = contactInfo;
  return (
    <>
      <ul>
        <li>Email: {email}</li>
        <li>Phonenumber: {phone}</li>
        <li>Location: {location}</li>
        <li>Home Page: {homePage}</li>
        <li>Linkedin Profile: {linkedin}</li>
        <li>GitHub Profile: {github}</li>
      </ul>
    </>
  );
};

export default ContactInfo;
