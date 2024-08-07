import logo from "../assets/OjasKGUptalogo.png"
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20"  src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/ojas-kumar-gupta-73a3191b9/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ojas282" target="_blank" rel="noopener noreferrer">
          <FaGithub/>
        </a>
        <a href="https://www.instagram.com/ojaskumargupta/" target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
        </a>
        <a href="https://x.com/OJASKUMARGUPTA" target="_blank" rel="noopener noreferrer">
          <FaTwitter/>
        </a>
        
        
        
      </div>
    </nav>
  )
}

export default Navbar
