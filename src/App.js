import React from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import Education from "./Education";
import Credit from "./Credit";
import Skills from "./Skills";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";

function App() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen scroll-smooth">
      <style>
        {`
          :root {
            --primary: #0F0F0F;
            --secondary: #FFB91D;
          }
        `}
      </style>
      <Nav />
      <Hero />
      <WorkExperience />
      <Skills />
      <Education />
      <Contact />
      <Credit />
    </div>
  );
}

export default App;
