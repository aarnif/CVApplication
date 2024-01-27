import { v4 as uuid } from "uuid";
import Image from "./assets/images/spider-man.png";

const exampleData = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    title: "Developer",
    description:
      "Experienced software developer proficient in multiple programming languages, with a strong background in developing and implementing innovative solutions. Skilled in problem-solving, collaborating with teams, and delivering high-quality code to meet project requirements and deadlines.",
    image: Image,
  },
  contactInfo: {
    email: "john.doe@gmail.com",
    phone: "0400-123-123",
    location: "Helsinki, Finland",
    homePage: "www.mywebsite.com",
    linkedin: "www.linkedin.com/in/johndoe",
    github: "www.github.com/johndoe",
  },
  workExperience: [
    {
      id: uuid(),
      position: "Junior Developer",
      company: "Google",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      description:
        "As a junior software developer, I collaborated with a team to design, develop, and test software applications, troubleshoot issues, and contribute to the overall software development life cycle.",
    },
  ],
  education: [
    {
      id: uuid(),
      school: "University of Helsinki",
      title: "Bachelor of Computer Science",
      startDate: "2017-09-01",
      endDate: "2020-05-31",
      description:
        "In my Bachelor of Computer Science degree, I gained knowledge in programming, algorithms, data structures, software engineering, networking, and computer architecture.",
    },
    {
      id: uuid(),
      school: "University of Helsinki",
      title: "Masters of Computer Science",
      startDate: "2020-09-01",
      endDate: "2022-12-31",
      description:
        "In my Master of Computer Science degree with a focus on web development, I learned advanced techniques in front-end and back-end development, web security, and user experience design.",
    },
  ],
  skills: [
    {
      id: uuid(),
      name: "HTML",
    },
    {
      id: uuid(),
      name: "CSS",
    },
    {
      id: uuid(),
      name: "JavaScript",
    },
    {
      id: uuid(),
      name: "React",
    },
    {
      id: uuid(),
      name: "Node.js",
    },
  ],
};

export default exampleData;
