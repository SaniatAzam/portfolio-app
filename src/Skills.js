import React, { useState, useEffect, useRef } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const TypingEffect = ({ text, onTypingDone }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((t) => t + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
        onTypingDone();
      }
    }, 50); // Typing speed in milliseconds

    return () => clearInterval(intervalId);
  }, [text, onTypingDone]);

  return <span>{displayedText}▍</span>;
};

const Skills = () => {
  const skills = {
    frontend: [
      "• HTML5",
      "• CSS3",
      "• JavaScript (ES6)",
      "• React.js",
      "• Tailwind.CSS",
      "• UI Design: Adobe Illustrator - Adobe Photoshop - Figma",
      "• UX Research & Practices",
    ],
    backend: [
      "• Python",
      "• Java",
      "• TypeScript",
      "• Node.js",
      "• Express",
      "• C",
      "• C++",
      "• C#",
      "• PHP",
      "• NoSQL (MongoDB): Data Modeling - Developing Schemas",
      "• RDMS (MySQL)",
      "• RESTful API",
      "• Network Prototcols: TCP/UDP/HTTP/IP",
      "• API Integration",
      "• Axios",
    ],
    software: [
      "• Git",
      "• Typescript",
      "• Visual Studio Code",
      "• Eclipse",
      "• Google Cloud Platform (GCP)",
      "• Docker",
      "• Role-Based Access Control",
      "• Firebase (CI/CD)",
      "• Postman",
      "• Compass",
      "• Multithreading",
      "• Web Socket Programming",
      "• Comms: Slack - Trello - GitHub - BitBucket",
      "• AI Prompt Engineering",
    ],
  };

  const TabGroup = () => {
    const [activeTab, setActiveTab] = useState("frontend");
    const [isTyping, setIsTyping] = useState(true);

    const commandText = `  cat ${activeTab}-dev-skills.txt`;

    return (
      <div className="flex flex-col items-center justify-center">
        {/* Tab selectors */}
        <div className="flex w-fit md:w-3/4 space-x-2 md:space-x-1">
          {Object.keys(skills).map((key) => (
            <button
              key={key}
              className={`pl-2 pr-2 md:px-4 py-2 rounded-t-xl font-bold mb-[5px] text-xs md:text-base md:text-left ${
                activeTab === key
                  ? "bg-[#f4bc47] text-[#222222] p-5 md:pr-[50px] transition-all duration-500 ease-out"
                  : `bg-[#222222] text-[#f4bc47] p-5 md:pr-[50px] border-[1px] border-[#303030] hover:scale-110 hover:z-11 cursor-pointer transition-all 
                    ${key === "frontend" ? "hover:-translate-x-0" : ""} ${
                      key === "software" ? "hover:translate-x-0" : ""
                    } duration-150 ease-out hover:bg-[#262626] `
              }`}
              onClick={() => {
                setActiveTab(key);
                setIsTyping(true);
              }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* Terminal Display */}
        <div className="p-4 bg-[#222222] border-[5px] border-[#f4bc47] text-white font-mono text-left rounded-2xl w-screen md:w-3/4 h-[500px] md:h-[500px] overflow-auto">
          <p>
            <span className="text-white">
              <span className="text-green-400">
                &gt;saniat@hireMe: skills :~${" "}
              </span>
              {isTyping ? (
                <TypingEffect
                  text={commandText}
                  onTypingDone={() => setIsTyping(false)}
                />
              ) : (
                <span>
                  <span className="text-white"></span>
                  {commandText}
                </span>
              )}
            </span>
          </p>
          {!isTyping && (
            <>
              <ul className="list-none">
                {skills[activeTab].map((skill, index) => (
                  <li key={index} className="text-base md:text-base">
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="text-green-400">
                &gt;saniat@hireMe: skills :~$
                <span className="animate-pulse"> ▍</span>
              </p>
            </>
          )}
        </div>
      </div>
    );
  };
  return (
    <div
      id="skills"
      className="relative min-h-screen justify-center bg-[#0F0F0F] overflow-hidden px-10 md:px-[100px] snap-y snap-mandatory"
    >
      <h1 className="text-[#FFB91D] text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10 lg:w-1/4 sm-1/4 items-center justify-center mx-auto text-center">
        SKILLS
      </h1>
      <div className="px-[50px] md:block">
        <div className="justify-center items-center text-center">
          <TabGroup />
        </div>
      </div>
      <div className="md:block">
        <a
          onClick={() =>
            window.scrollTo({
              top:
                document.getElementById("portfolee").getBoundingClientRect()
                  .top +
                window.scrollY +
                -150,
              behavior: "smooth",
            })
          }
          className="flex flex-col items-center justify-center px-4 pb-2 pt-10 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
        >
          <FaAngleDoubleDown className="w-6 h-6 mb-1 animate-bounce" />
          {/* Scroll Down */}
        </a>
      </div>
    </div>
  );
};

export default Skills;
