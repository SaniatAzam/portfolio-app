import { useState } from "react";
import profilePhoto from "./photos/DP2.png";
import mcgill from "./photos/mcgill-logo-red-reverse.db74b099.svg";
import { FaAngleDoubleDown } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-screen dark:bg-[#0F0F0F] overflow-hidden pb-10 pt-10 pl-5 pr-5">
      <div className="lg:flex lg:items-center lg:justify-center lg:max-w-7xl">
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src={profilePhoto}
            className="w-1/2 h-auto rounded-xl hover:scale-125 transition-all duration-150 ease-out"
            alt="Profile"
          />
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Sa Adat Azam Saniat
            </h1>
            <p className="inline-block mt-6 text-lg font-mono leading-8 text-white">
              <span className="font-semibold inline-block">
                Hello! I am Saniat.
              </span>{" "}
              I'm a passionate Computer Science graduate from
              <span>
                <img
                  src={mcgill}
                  className="w-[30%] md:w-[20%] inline-block px-3"
                />
              </span>
              University in Montreal, eager to bring innovative solutions to
              challenging tech landscapes. Currently located in Toronto, ON!
            </p>
            <div className="md:block">
              <a
                onClick={() =>
                  window.scrollTo({
                    top:
                      document.getElementById("workoo").getBoundingClientRect()
                        .top +
                      window.scrollY +
                      -60,
                    behavior: "smooth",
                  })
                }
                className="flex flex-col items-center justify-center px-4 pb-2 pt-10 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
              >
                <FaAngleDoubleDown className="w-6 h-6 mb-1 animate-bounce" />
                Scroll Down
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
