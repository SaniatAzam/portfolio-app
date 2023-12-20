import Modal from "./Modal";
import mcgill from "./photos/mcgill-logo-red-reverse.db74b099.svg";
import elf from "./photos/Elfenland.png";
import wl from "./photos/workload.png";
import ics from "./photos/ics.jpeg";
import nis_ag from "./photos/nis_ag.jpg";
import orgin from "./photos/orgin.png";
import ta from "./photos/TA.png";
import cert from "./photos/Cert.png";
import { FaAngleDoubleDown } from "react-icons/fa";

function Education() {
  return (
    <div
      id="portfolee"
      className="relative min-h-screen justify-center bg-[#0F0F0F] overflow-hidden pb-10 pl-5 pr-5 snap-y snap-mandatory pt-10 "
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
            d1="I finished my degree in Bachelor of Science, majoring in Computer Science at McGill University."
            work={[
              {
                key: "this.portfolioWebsite",
                link: "http://localhost:3000",
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
                        <li>
                          • Transformed the board game Elfenland into a
                          multiplayer computer game using Python with PyGame,
                          resulting in a 70% improvement in user experience
                        </li>
                        <li>
                          • Designed and developed backend logic for 25+
                          features using Object-Oriented programming and design
                          patterns, enhancing game functionality and engagement
                        </li>
                        <li>• Implemented UI with PyGame</li>
                        <li>
                          • Seamlessly integrated backend logic with UI
                          components, ensuring a 40% increase in overall user
                          satisfaction
                        </li>
                        <li>
                          • Created and documented wireframes for 50+ game
                          features using Adobe Illustrator, contributing to a
                          50% reduction in development time
                        </li>
                        <li>
                          • Documented the game's Concept Model, Environment
                          Model, Operation Model & Protocol Model
                        </li>
                        <li>
                          • Developed the game's networking to enable
                          multiplayer functionality through a client-server
                          model (Python, REST API, and Docker), resulting in a
                          60% rise in player interaction
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
                        <li>
                          • Transformed the board game Elfenland into a
                          multiplayer computer game using Python with PyGame,
                          resulting in a 70% improvement in user experience
                        </li>
                        <li>
                          • Designed and developed backend logic for 25+
                          features using Object-Oriented programming and design
                          patterns, enhancing game functionality and engagement
                        </li>
                        <li>• Implemented UI with PyGame</li>
                        <li>
                          • Seamlessly integrated backend logic with UI
                          components, ensuring a 40% increase in overall user
                          satisfaction
                        </li>
                        <li>
                          • Created and documented wireframes for 50+ game
                          features using Adobe Illustrator, contributing to a
                          50% reduction in development time
                        </li>
                        <li>
                          • Documented the game's Concept Model, Environment
                          Model, Operation Model & Protocol Model
                        </li>
                        <li>
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
                        <li>
                          • Designed and implemented frontend components using
                          React, improving user experience and interface flows.
                        </li>
                        <li>
                          • Collaborated closely with design teams, refining UI
                          and ensuring consistency across platforms.{" "}
                        </li>

                        <li>
                          • Pioneered backend infrastructure with Node.js,
                          enhancing system reliability and efficiency.{" "}
                        </li>

                        <li>
                          • Designed 15+ wireframes utilizing Adobe Illustrator,
                          contributing to a 30% increase in User Retention.{" "}
                        </li>

                        <li>
                          • Implemented 10+ backend routes and controllers with
                          Node.js, facilitating efficient teaching responsibili-
                          ties management.{" "}
                        </li>

                        <li>
                          • Engineered robust NoSQL schemas (MongoDB), enhancing
                          data integrity and I/O performance by 40%.{" "}
                        </li>

                        <li>
                          • Developed user interface components with React,
                          enforced Role-Based Access Control (RBAC) for stake-
                          holders.{" "}
                        </li>

                        <li>
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
                        <li>
                          • Developed using Java Socket Programming, enhancing
                          network simulations and reducing data transmission
                          errors by 50%.
                        </li>
                        <li>
                          • Created a configurable router simulator class with
                          Java Socket Programming, featuring IP configuration,
                          multi-threaded client and server sockets, and
                          link-state database.
                        </li>
                        <li>
                          • Designed and implemented a serialized packet class
                          with sequence numbers, streamlining network message
                          consolidation between routers; reduced data
                          transmission errors by 50% and improved network
                          efficiency by 30%.
                        </li>
                        <li>
                          • Developed a weighted graph class for link state
                          topology, facilitating streamlined route calculation
                          using Dijkstra's algorithm, leading to a 40% increase
                          in route optimization.
                        </li>
                        <li>
                          • Innovated a router simulator using Java Socket
                          Programming, enhancing network efficiency by 30%.
                        </li>
                      </ul>
                    </div>
                  </>
                ),
              },
              {
                key: "Certificate",
                value: "The Certification for my Computer Science Degree",
                photo: cert,
              },
            ]}
            photo={mcgill}
            color="bg-[#FFB91D]"
          />
          <Modal
            title="Entrepreneurship"
            subtitle="A Glance"
            description="2020-2021"
            d1="Amid Covid, a few peers and I started a freelancing marketing agency. We named it Workload, developed this business from the start, and learned how to grow a new business. I brought in new clients and uncovered new business opportunities. Here, I led the team as the chief operating officer, which led me to gain people management and interpersonal skills by motivating and directing a dynamic and creative set of people. I also worked on and led various web design and development projects. As a creative guide for important projects, I successfully translated customer ideas and concepts into concrete designs and products. Furthermore, I created brand identities for new restaurants and companies. Here's a list of some of the clients."
            work={[
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
                      <p>Produce and Fish Exporter</p>
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
            photo={wl}
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
                -90,
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
