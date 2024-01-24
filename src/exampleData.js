import { v4 as uuid } from "uuid";

const exampleData = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    title: "Developer",
    description:
      "Experienced software developer with a proven track record of designing and developing scalable applications. Proficient in multiple programming languages and frameworks, I excel in problem-solving and collaborating with cross-functional teams to deliver high-quality software solutions. Committed to continuous learning and staying updated with the latest industry trends.",
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
        "As a junior software developer, I contributed to the development and maintenance of software applications. I collaborated with senior developers to write, test, and debug code, as well as participate in code reviews. I gained experience in various programming languages and frameworks, while continuously learning and improving my skills.",
    },
  ],
  education: [
    {
      id: uuid(),
      school: "University of Helsinki",
      degree: "Bachelor and Masters of Computer Science",
      startDate: "2017-09-01",
      endDate: "2022-12-31",
      description:
        "During my computer science degree, I acquired a strong foundation in programming, algorithms, and data structures. I gained hands-on experience in software development through projects and coursework. I developed critical thinking and problem-solving skills, and honed my ability to work both independently and as part of a team.",
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
