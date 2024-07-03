import React from "react";
import paper from "./photos/logo-paper.svg";
import ResponsibilityModal from "./ResponsibilityModal";
import wl from "./photos/wlcover.gif";
import da from "./photos/dataAnnotation.svg";
import evx from "./photos/logo-evexia-2.png";
import { FaAngleDoubleDown } from "react-icons/fa";

const WorkExperience = () => {
  const TimeLine = ({
    companyName,
    link,
    title,
    title2,
    location,
    period,
    details,
  }) => {
    return (
      <div className="flex space-x-5 p-2 m-4 font-mono w-full md:w-full">
        <div className="block justify-center items-center">
          <div className="bg-[#0F0F0F] border-[#f4bc47] border-[2px] w-[15px] h-[15px] rounded-full mb-2 justify-center"></div>
          <div className="bg-[#f4bc47] w-[2px] h-full ml-[6px]"></div>
        </div>
        <div className="">
          <p className="font-thin mb-3 mt-[-4px] text-sm md:text-md text-[#FFB91D]">
            {period}
          </p>
          {/* <h1 className="text-xl mb-2">{companyName}</h1> */}
          <a href={link} target="_blank">
            <img
              src={companyName}
              className=" hover:scale-105 transition-all ease-out duratation-150 mb-3 w-full md:w-[15vw] rounded-md shadow-inner"
            ></img>
          </a>
          <h2 className="text-semibold text-lg">{title}</h2>
          {title2 && (
            <h2 className="text-semibold text-lg mt-[-5px]">{title2}</h2>
          )}
          <h2 className="mb-2 mt-2">{location}</h2>
          <ResponsibilityModal
            photo={companyName}
            title={title}
            title2={title2}
            resps={details}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      id="workoo"
      className="flex flex-col justify-center items-center min-h-screen overflow-hidden bg-[#0F0F0F] p-10 text-white md:snap-y md:snap-mandatory"
    >
      <h1 className="text-[#FFB91D] text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10  sm-1/4 items-center justify-center mx-auto text-center">
        WORK EXPERIENCE
      </h1>
      <div className="px-[50px] md:block justify-center items-center">
        <TimeLine
          companyName={evx}
          link="https://evexia-mh.web.app/"
          title="Full Stack &"
          title2="Brand Developer"
          location="Toronto, ON (Remote)"
          period="2024 - Present"
          details={[
            "• Designed the company logo and established comprehensive brand guidelines to ensure a cohesive visual identity across all digital platforms.",
            "• Engineered and launched the corporate website using React, TypeScript, and TailwindCSS, optimizing for speed and user experience, hosted on Firebase.",
            "• Created bespoke, reusable components tailored to specific functionalities enhancing user interaction and visual appeal.",
            "• Collaborating closely with UI/UX designers to translate Figma designs into functional React Native screens, ensuring high fidelity to original design specifications.",
            "• Developing robust APIs and structuring database schemas using MongoDB, ensuring scalable, secure data management and integration.",
            "• Leading cross-functional teams through the ongoing stages of the startup, from concept through to MVP development, focusing on iterative improvements and user feedback incorporation.",
          ]}
        />
        <TimeLine
          companyName={da}
          link="https://www.dataannotation.tech//"
          title="AI Trainer &"
          title2="Prompt Engineer"
          location="Toronto, ON (Remote)"
          period="2024 - Present"
          details={[
            "• Training and enhancement of artificial intelligence models through evaluation, response assessment, and direct interaction.",
            "• Critically analyzing bot responses against several criteria.",
            "• Inputting model responses for AI learning.",
            "• Employing various programming languages to optimize their coding efficiency.",
            "• Training models on correctly performing data analysis and visualization by self-analyzing the data using Pandas.",
            "• Reinforcing AI models' unit testing capabilities by programming code and its unit tests.",
          ]}
        />
        <TimeLine
          companyName={paper}
          link="https://paper.co/"
          title="STEM Tutor"
          title2={null}
          location="Toronto, ON"
          period="2022 - 2024"
          details={[
            "• Oversaw tutoring sessions, elevating students' comprehension in programming languages like JavaScript and Java.",
            "• Collaborated on Slack, achieving a 50% improvement in collective tutoring outcomes.",
            "• Managed real-time debugging, error resolution, and code optimization during mentoring sessions.",
            "• Collaborated with a team remotely using Slack, improving collective tutoring efficacy by 50%.",
          ]}
        />
        <TimeLine
          companyName={wl}
          link="https://www.behance.net/workloadbd/"
          title="Web Developer &"
          title2="Digital Artist"
          location="Dhaka, Bangladesh"
          period="2020 - 2021"
          details={[
            "• Led web development initiatives using HTML5, JavaScript, CSS3, and React, resulting in a 50% acceleration in project deliveries.",
            "• Coordinated team efforts via Trello and Zoom, boosting productivity by 75%",
            "• Crafted digital artwork with Adobe Suite, increasing client user engagement by 300%.",
          ]}
        />
      </div>
      <div className="md:block">
        <a
          onClick={() =>
            window.scrollTo({
              top:
                document.getElementById("skills").getBoundingClientRect().top +
                window.scrollY +
                -110,
              behavior: "smooth",
            })
          }
          className="flex flex-col items-center justify-center px-4 pb-2 pt-10 text-[#FFB91C] hover:scale-125 cursor-pointer transition-all duration-150 ease-out"
        >
          <FaAngleDoubleDown className="w-6 h-6 mb-1 animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default WorkExperience;
