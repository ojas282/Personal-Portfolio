import { useState, useEffect } from "react";
import logo from "../assets/OjasKGUptalogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const handleScroll = () => {
    //if at the top, make sure the navbar is always visible
    if (window.scrollY === 0) {
      setIsVisible(true);
      return;
    }

    //clear any existing timeout to prevent hiding navbar while scrolling
    if (scrollTimeout) clearTimeout(scrollTimeout);

    //show the navbar when scrolling starts
    setIsVisible(true);

    //set a timeout to hide the navbar if no scrolling happens for 2 seconds
    const timeout = setTimeout(() => {
      if (window.scrollY !== 0) {
        setIsVisible(false);
      }
    }, 900);

    setScrollTimeout(timeout);
  };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 mb-0 flex items-center justify-between py-6 bg-opacity-30 backdrop-blur-md border-b border-neutral-800 z-50 transition-transform duration-500 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ojas-kumar-gupta-73a3191b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ojas282"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ojaskumargupta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/OJASKUMARGUPTA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
