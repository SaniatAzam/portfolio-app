import React from "react";
import paper from "./photos/logo-paper.svg";
import ResponsibilityModal from "./ResponsibilityModal";
import wl from "./photos/wlcover.gif";
import { FaAngleDoubleDown } from "react-icons/fa";

const WorkExperience = () => {
  const TimeLine = ({
    companyName,
    link,
    title,
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
              className=" hover:scale-105 transition-all ease-out duratation-150 mb-3 w-full md:w-[15vw] rounded-md shadow-innergit "
            ></img>
          </a>
          <h2 className="text-semibold text-lg">{title}</h2>
          <h2 className="mb-2">{location}</h2>
          <ResponsibilityModal
            photo={companyName}
            title={title}
            resps={details}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      id="workoo"
      className="flex flex-col justify-center items-center min-h-screen overflow-hidden bg-[#0F0F0F] p-10 text-white snap-y snap-mandatory"
    >
      <h1 className="text-[#FFB91D] text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10  sm-1/4 items-center justify-center mx-auto text-center">
        WORK EXPERIENCE
      </h1>
      <div className="px-[50px] md:block justify-center items-center">
        <TimeLine
          companyName={paper}
          link="https://paper.co/"
          title="STEM Tutor"
          location="Toronto, ON (Remote)"
          period="2022 - Present"
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
          title="Co-Founder & COO"
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
