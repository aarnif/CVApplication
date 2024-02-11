import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Footer = ({ darkMode }) => {
  return (
    <footer className="font-['SweetieBubbleGum'] text-lg flex justify-center dark:text-white">
      <ul className="flex">
        <li>
          <h3>Created By aarnif</h3>
        </li>
        <li className="mx-1">
          <motion.div
            whileHover={{
              scale: 1.5,
              rotate: 360,
            }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://github.com/aarnif"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: darkMode ? "white" : "black" }}
                size={"xl"}
              />
            </a>
          </motion.div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
