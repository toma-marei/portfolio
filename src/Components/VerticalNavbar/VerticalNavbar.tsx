import { motion } from "framer-motion";
import "./VerticalNavbar.css";
import { navbarItems } from "../../models/navbar";
import { Link } from "react-router-dom";
import gitHub from "../../assets/Images/Icons/github_icon_outline.svg";

const VerticalNavbarVariants = {
  initial: { opacity: 0, x: -50, transition: { duration: 0.8 } },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const VerticalNavbar: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    destination: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(destination);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="verticalNavbar"
      variants={VerticalNavbarVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="Logo poppinsBold"
        variants={VerticalNavbarVariants}
        initial="initial"
        animate="animate"
        onClick={scrollToTop}
      >
        <Link className="logoText" to={"/"}>
          T<span className="logoDot">.</span>
        </Link>
      </motion.div>

      <motion.div
        className="verticalNavItems"
        variants={VerticalNavbarVariants}
        initial="initial"
        animate="animate"
      >
        {navbarItems.map((curr) => (
          <motion.a
            className="verticalNavLink poppinsSmall"
            key={curr.id}
            href={curr.destination}
            variants={VerticalNavbarVariants}
            initial="initial"
            animate="animate"
            whileHover={{
              backgroundColor: "#84848464",
              borderRight: "2px solid #fa6000",
            }}
            onClick={(e) => handleScrollToSection(e, curr.destination)}
          >
            {curr.title}
          </motion.a>
        ))}
      </motion.div>
      <motion.div className="verticalNavIconsDiv">
        <motion.div className="gitHubIconDiv" whileTap={{ scale: 1.1 }}>
          <Link to={"https://github.com/toma-marei/portfolio"} target="_blank">
            <img src={gitHub} alt="gitHub icon" id="gitHubDarkImg" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
