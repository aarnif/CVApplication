import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactInfo = ({ contactInfo, headerFont }) => {
  const { email, phone, location, homePage, linkedin, github } = contactInfo;
  return (
    <div className="flex-grow pt-5 pl-6 pr-12 text-zinc-700">
      <h2
        style={{ fontFamily: headerFont }}
        className="font-['Heavitas'] text-xl text-zinc-800 border-b-2 border-black"
      >
        Contact Info
      </h2>
      <ul className="pt-3">
        <li className="flex justify-start items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="self-center min-w-5 pr-2"
          />
          <div className="text-sm">{email}</div>
        </li>
        <li className="flex justify-start items-center">
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            className="self-center min-w-5 pr-2"
          />
          <div className="text-sm">{phone}</div>
        </li>
        <li className="flex justify-start items-center">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="self-center min-w-5 pr-2"
          />
          <div className="text-sm">{location}</div>
        </li>
        <li className="flex justify-start items-center">
          <FontAwesomeIcon
            icon={faHouseUser}
            className="self-center min-w-5 pr-2"
          />
          <div className="text-sm">{homePage}</div>
        </li>
        <li className="flex justify-start items-center">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="self-center min-w-5 pr-2"
          />
          <div className="text-sm">{linkedin}</div>
        </li>
        <li className="flex justify-start items-center">
          <FontAwesomeIcon
            icon={faGithub}
            className="self-center min-w-5 pr-2"
          />
          <div className="text-sm">{github}</div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
