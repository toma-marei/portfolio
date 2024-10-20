import "./Navbar.css";
import { navbarItems } from "../../models/navbar";
import gitHub from "../../assets/Images/Icons/github_icon_outline.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import sun from "../../assets/Images/Icons/sun_icon.svg";
import moon from "../../assets/Images/Icons/moon__icon.svg";
import { useEffect, useState } from "react";

const navbarVariants = {
  initial: { opacity: 0, y: "-60px", transition: { duration: 0.6 } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "darkMode" : "lightMode";
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    destination: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(destination);
    const navbarHeight = document.querySelector(".navbar")?.clientHeight || 0;

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollX;
      window.scroll({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className={`navbar ${isDarkMode ? "darkMode" : "lightMode"}`}
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="logoDiv"
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        onClick={scrollToTop}
      >
        <motion.p
          id="tempLogo"
          className="poppinsBold"
          variants={navbarVariants}
          initial="initial"
          animate="animate"
        >
          TOMA.
        </motion.p>
      </motion.div>

      <motion.div
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        className="navItemsContainer"
      >
        {navbarItems.map((curr) => {
          return (
            <motion.div
              className="navItems"
              variants={navbarVariants}
              initial="initial"
              animate="animate"
              key={curr.id}
              whileTap={{ scale: 1.1 }}
            >
              <Link
                to={curr.destination}
                className="navItemLink poppinsBold"
                onClick={(e) => handleScrollToSection(e, curr.destination)}
              >
                {curr.title}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div className="navIconsDiv">
        <motion.div className="gitHubIconDiv" whileTap={{ scale: 1.1 }}>
          <Link to={"https://github.com/toma-marei/portfolio"} target="_blank">
            <img src={gitHub} alt="gitHub icon" id="gitHubIconImg" />
          </Link>
        </motion.div>
        <motion.div
          className="darkMode"
          whileTap={{ scale: 1.1 }}
          onClick={toggleDarkMode}
        >
          <img
            src={isDarkMode ? moon : sun}
            alt={isDarkMode ? "moon_icon" : "sun_icon"}
            id={isDarkMode ? "sunIconImg" : "moonIconImg"}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
