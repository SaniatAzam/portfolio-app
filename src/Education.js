import Modal from "./Modal";
import market from "./photos/market.png";
import rocket from "./photos/rocket.png";
import elf from "./photos/Elfenland.png";
import wl from "./photos/workload.png";
import ics from "./photos/ics.jpeg";
import malabis from "./photos/malabis.jpg";
import nis_ag from "./photos/nis_ag.jpg";
import orgin from "./photos/orgin.png";
import ta from "./photos/TA.png";
import cert from "./photos/Cert.png";
import { FaAngleDoubleDown } from "react-icons/fa";

function Education() {
  return (
    <div
      id="portfolee"
      className="relative min-h-screen justify-center bg-[#0F0F0F] overflow-hidden pb-10 pl-5 pr-5 md:snap-y md:snap-mandatory pt-10 "
    >
      <div className="lg:items-center lg:justify-center">
        <div className="lg:w-1/4 sm-1/4 items-center justify-center mx-auto text-center">
          <h1 className="text-[#FFB91D] text-4xl font-bold tracking-tight text-white sm:text-6xl mb-10">
            PORTFOLIO
          </h1>
        </div>
        <div className="my-0 md:flex align-center justify-center mx-auto text-center mt-1/6]">
          <Modal
            title="Software Projects"
            subtitle="An Overview "
            description="2018-Present"
            d1="A glance at some of my software/web development projects."
            work={[
              {
                key: "this.portfolioWebsite",
                link: "https://github.com/SaniatAzam/portfolio-app",
                value: (
                  <>
                    <div className="font-thin my-[10px] text-white">
                      <h1>React.js, Tailwind CSS, RESTful API</h1>
                    </div>
                    <div className="text-white">
                      <p>
                        Digitization of the board game Elfenland using PyGame.
                        {/* This was a team project for a rigorous two-semester
                        Software Engineer Project course [COMP 361 D1 & D2]. */}
                      </p>
                      <br />
                      <ul>
                        <li className="mb-2">
                          • Engineered a dynamic portfolio website using React,
                          Tailwnd CSS, HTML, and JavaScript
                        </li>
                        <li className="mb-2">
                          • Implemented CI/CD pipelines with Firebase, leading
                          to a 60% reduction in deployment times and a 40%
                          decrease in post-deployment issues
                        </li>
                        <li className="mb-2">
                          • Utilized React hooks like useContext, useState,
                          useInView, and useEffect to enhance user engagement
                        </li>
                        <li className="mb-2">
                          • Added Emailjs to create an efficient mail form,
                          reducing communication response time by over 50%
                        </li>
                        <li className="mb-2">
                          • Incorporated JSON API integration for real-time
                          output and tracked API calls efficiently in the
                          codebase
                        </li>
                      </ul>
                    </div>
                  </>
                ),
                photo: null,
              },
              {
                key: "Elfenland",
                link: "https://github.com/linusfoo/Elfenland",
                value: (
                  <>
                    <div className="font-thin my-[10px] text-white">
                      <h1>PyGame</h1>
                    </div>
                    <div className="text-white">
                      <p>
                        Digitization of the board game Elfenland using PyGame.
                        {/* This was a team project for a rigorous two-semester
                        Software Engineer Project course [COMP 361 D1 & D2]. */}
                      </p>
                      <br />
                      <ul>
                        <li className="mb-2">
                          • Transformed the board game Elfenland into a
                          multiplayer computer game using Python with PyGame,
                          resulting in a 70% improvement in user experience
                        </li>
                        <li className="mb-2">
                          • Designed and developed backend logic for 25+
                          features using Object-Oriented programming and design
                          patterns, enhancing game functionality and engagement
                        </li>
                        <li className="mb-2">• Implemented UI with PyGame</li>
                        <li className="mb-2">
                          • Seamlessly integrated backend logic with UI
                          components, ensuring a 40% increase in overall user
                          satisfaction
                        </li>
                        <li className="mb-2">
                          • Created and documented wireframes for 50+ game
                          features using Adobe Illustrator, contributing to a
                          50% reduction in development time
                        </li>
                        <li className="mb-2">
                          • Documented the game's Concept Model, Environment
                          Model, Operation Model & Protocol Model
                        </li>
                        <li className="mb-2">
                          • Developed the game's networking to enable
                          multiplayer functionality through a client-server
                          model (Python, REST API, and Docker), resulting in a
                          60% rise in player interaction
                        </li>
                      </ul>
                    </div>
                  </>
                ),
                photo: elf,
              },
              {
                key: "TA Management System",
                link: "https://github.com/SaniatAzam/ta-management-system-mern",
                value: (
                  <>
                    <div className="font-thin my-[10px] text-white">
                      <h3>MERN, TypeScript</h3>
                    </div>
                    <div className="text-white">
                      <ul>
                        <li className="mb-2">
                          • Designed and implemented frontend components using
                          React, improving user experience and interface flows.
                        </li>
                        <li className="mb-2">
                          • Collaborated closely with design teams, refining UI
                          and ensuring consistency across platforms{" "}
                        </li>

                        <li className="mb-2">
                          • Pioneered backend infrastructure with Node.js,
                          enhancing system reliability and efficiency{" "}
                        </li>

                        <li className="mb-2">
                          • Designed 15+ wireframes utilizing Adobe Illustrator,
                          contributing to a 30% increase in User Retention{" "}
                        </li>

                        <li className="mb-2">
                          • Implemented 10+ backend routes and controllers with
                          Node.js, facilitating efficient teaching responsibili-
                          ties management{" "}
                        </li>

                        <li>
                          • Engineered robust NoSQL schemas (MongoDB), enhancing
                          data integrity and I/O performance by 40%{" "}
                        </li>

                        <li className="mb-2">
                          • Developed user interface components with React,
                          enforced Role-Based Access Control (RBAC) for stake-
                          holders{" "}
                        </li>

                        <li className="mb-2">
                          • Integrated backend logic to the UI components
                          mentioned above to ensure clear 3-tier application
                          with React using TypeScript
                        </li>
                      </ul>
                    </div>
                  </>
                ),
                photo: ta,
              },
              {
                key: "Simulated Link State Routing Protocol",
                link: "https://github.com/SaniatAzam/Link-State-Routing-Protocol-",
                value: (
                  <>
                    <div className="font-thin my-[10px] text-white">
                      <h3>Java, Socket Programming</h3>
                    </div>
                    <div className="text-white">
                      <ul>
                        <li className="mb-2">
                          • Developed using Java Socket Programming, enhancing
                          network simulations and reducing data transmission
                          errors by 50%.
                        </li>
                        <li className="mb-2">
                          • Created a configurable router simulator class with
                          Java Socket Programming, featuring IP configuration,
                          multi-threaded client and server sockets, and
                          link-state database.
                        </li>
                        <li className="mb-2">
                          • Designed and implemented a serialized packet class
                          with sequence numbers, streamlining network message
                          consolidation between routers; reduced data
                          transmission errors by 50% and improved network
                          efficiency by 30%.
                        </li>
                        <li className="mb-2">
                          • Developed a weighted graph class for link state
                          topology, facilitating streamlined route calculation
                          using Dijkstra's algorithm, leading to a 40% increase
                          in route optimization.
                        </li>
                        <li className="mb-2">
                          • Innovated a router simulator using Java Socket
                          Programming, enhancing network efficiency by 30%.
                        </li>
                      </ul>
                    </div>
                  </>
                ),
              },
            ]}
            photo={rocket}
            color="bg-[#FFB91D]"
          />
          <Modal
            title="Marketing - SEO"
            subtitle="A Glance"
            description="2020-2021"
            d1="Most of the work outlined here was done for the marketing company (Workload) that I co-founded. It is an assortment of marketing and web development projects that I've worked on."
            work={[
              {
                key: "Malabis House of Apparel",
                link: "https://malabishouseofapparel.com/",
                value: (
                  <>
                    <div className="font-thin my-[10px] text-white">
                      <h1>Website, Brand Identity</h1>
                      <h2>Adobe Suite, HTML, CSS, JS</h2>
                    </div>
                    <div className="text-white">
                      <p>Garments Manufacturer & Exporter</p>
                      <br />
                    </div>
                  </>
                ),
                photo: malabis,
              },
              {
                key: "ICS",
                value: (
                  <>
                    <div className="font-thin my-[10px] text-white">
                      <h1>Website, Brand Identity</h1>
                      <h2>Adobe Suite, HTML, CSS, JS</h2>
                    </div>
                    <div className="text-white">
                      <p>An Australian Based Construction Company</p>
                      <br />
                    </div>
                  </>
                ),
                photo: ics,
              },
              {
                key: "Nisshin Agro",
                value: (
                  <>
                    <div className="font-thin my-[10px] text-white">
                      <h1>
                        Website, Brand Identity, Magazine, Packaging Design
                      </h1>
                      <h2>Adobe Suite, WordPress</h2>
                    </div>
                    <div className="text-white">
                      <p>Fish Exporter</p>
                      <br />
                    </div>
                  </>
                ),
                photo: nis_ag,
              },
              {
                key: "Orgin",
                value: (
                  <>
                    <div className="font-thin my-[10px] text-white">
                      <h1>Packaging Desgin, Facebook Marketing</h1>
                      <h2>Adobe Suite, Facebook Business Manager</h2>
                    </div>
                    <div className="text-white">
                      <p>Food Manufacturer</p>
                      <br />
                    </div>
                  </>
                ),
                photo: orgin,
              },
            ]}
            photo={market}
            color="bg-[#FFB91D]"
          />
        </div>
      </div>
      <div className="md:block">
        <a
          onClick={() =>
            window.scrollTo({
              top:
                document.getElementById("contulee").getBoundingClientRect()
                  .top +
                window.scrollY +
                -25,
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
}

export default Education;
