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
      title: "Bachelor of Computer Science",
      startDate: "2017-09-01",
      endDate: "2020-05-31",
      description:
        "In my Bachelor of Computer Science degree, I learned the fundamentals of programming and gained proficiency in various coding languages. I developed a strong understanding of algorithms, data structures, and software engineering principles. Through hands-on projects, I honed my skills in database management, networking, and operating systems. This degree equipped me with the problem-solving and analytical abilities needed to create innovative software solutions.",
    },
    {
      id: uuid(),
      school: "University of Helsinki",
      title: "Masters of Computer Science",
      startDate: "2020-09-01",
      endDate: "2022-12-31",
      description:
        "During my Master's degree in Computer Science with a specialization in web development, I gained advanced knowledge and skills in designing and building dynamic websites and web applications. I deepened my understanding of web technologies such as HTML, CSS, JavaScript, and frameworks like React and Angular. Through in-depth coursework and practical projects, I learned about web security, user experience design, and web performance optimization. This degree equipped me with the expertise to create modern and responsive web solutions that meet industry standards and user needs.",
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
