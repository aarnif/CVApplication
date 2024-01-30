import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center mt-5 font-bold">
      <h3>
        Copyright © {currentYear} aarnif{" "}
        <a href="https://github.com/aarnif" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#000000" }}
            size={"lg"}
          />
        </a>
      </h3>
    </footer>
  );
};

export default Footer;
