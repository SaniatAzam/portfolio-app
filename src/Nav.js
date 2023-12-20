import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFileDownload,
  FaEye,
} from "react-icons/fa";
import CV from "./assets/Resume_THG.pdf";
import { useState, useEffect, useRef } from "react";

function Nav() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const [progress, setProgress] = useState("0");

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position of the page
      const scrollY = window.scrollY;

      // Get the full height of the webpage
      const totalHeight = document.documentElement.scrollHeight;

      // Get the inner height of the viewport
      const viewportHeight = window.innerHeight;

      // Calculate the height of the page that's not visible in the viewport
      const nonVisibleHeight = totalHeight - viewportHeight;

      // Calculate the scroll position as a percentage of the total possible scroll amount
      const scrollPercentage =
        nonVisibleHeight > 0 ? (scrollY / nonVisibleHeight) * 100 : 0;

      setProgress(scrollPercentage.toFixed(0) + "%");

      if (!isScrolling) {
        setIsScrolling(true);
      }
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]); // Removed the empty array to have the effect depend on isScrolling

  // The rest of your component remains unchanged...

  return (
    <footer
      className={`sticky top-0 z-50 bg-[#222222] ${
        isScrolling ? "opacity-50" : "opacity-90"
      } shadow-md border-[1px] border-[#303030] w-4/5 rounded-bl-xl rounded-br-xl mx-auto`}
    >
      <nav className="backdrop-filter backdrop-blur-lg flex items-center justify-center py-2 px-4 ">
        <a
          href="https://github.com/SaniatAzam"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center px-4 py-2 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
        >
          <FaGithub className="w-6 h-6 mb-1" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/saniatazam/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center px-4 py-2 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
        >
          <FaLinkedin className="w-6 h-6 mb-1" />
          LinkedIn
        </a>
        <a
          href={CV}
          download
          className="flex flex-col items-center justify-center px-4 py-2 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out text-center"
        >
          <FaFileDownload className="w-6 h-6 mb-1 animat-none" />
          Download CV
        </a>
        <div className="hidden md:block">
          <a
            href="https://www.instagram.com/saniat_azam/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center px-4 py-2 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out "
          >
            <FaInstagram className="w-6 h-6 mb-1" />
            Instagram
          </a>
        </div>
        <div className="hidden md:block">
          <a
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center px-4 py-2 text-[#FFB91C] "
          >
            <FaEye className="w-6 h-6 mb-1" />
            {progress}
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Nav;
