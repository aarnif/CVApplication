import { v4 as uuid } from "uuid";

const emptyData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    description: "",
  },
  contactInfo: {
    email: "",
    phone: "",
    location: "",
    homePage: "",
    linkedin: "",
    github: "",
  },
  workExperience: [
    {
      id: uuid(),
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  education: [
    {
      id: uuid(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  skills: [
    {
      id: uuid(),
      name: "",
    },
  ],
};

export default emptyData;
