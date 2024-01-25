import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactInfo = ({ contactInfo }) => {
  const { email, phone, location, homePage, linkedin, github } = contactInfo;
  return (
    <div className="pt-5">
      <h1 className="text-2xl border-b-2 border-black">Contact Info</h1>
      <ul className="p-5">
        <li className="flex justify-start items-center">
          <FontAwesomeIcon icon={faEnvelope} className="self-center min-w-10" />
          <div>{email}</div>
        </li>
        <li className="flex justify-start items-center">
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            className="self-center min-w-10"
          />
          <div>{phone}</div>
        </li>
        <li className="flex justify-start items-center">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="self-center min-w-10"
          />
          <div>{location}</div>
        </li>
        <li className="flex justify-start items-center">
          <FontAwesomeIcon
            icon={faHouseUser}
            className="self-center min-w-10"
          />
          <div>{homePage}</div>
        </li>
        <li className="flex justify-start items-center">
          <FontAwesomeIcon icon={faLinkedin} className="self-center min-w-10" />
          <div>{linkedin}</div>
        </li>
        <li className="flex justify-start items-center">
          <FontAwesomeIcon icon={faGithub} className="self-center min-w-10" />
          <div>{github}</div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
