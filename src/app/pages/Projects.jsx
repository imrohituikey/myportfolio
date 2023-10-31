import React from "react";
import Image from "next/image";
import { projectData } from "../../../Constants";
import { FiArrowRight } from "react-icons/fi";

const Projects = () => {
  return (
    <div id="projects" className="page bg-[#02050A] text-white items-center justify-center flex xl:w-full h-full text-center py-12 gap-6">
      <div className="flex flex-col w-full xl:w-[70%] items-center xl:gap-12 gap-12 justify-center xl:p-24">
        <div className="flex flex-row xl:flex-row w-full justify-between items-center text-center">
          <div className="text-left">
            <h1 className="xl:text-4xl font-poppins font-semibold">
              Look at my portfolio and <br /> give me your feedback
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-2xl xl:text-6xl">276K</h1>
              <p className="text-sm">Completed Project</p>
            </div>
            <div>
              <h1 className="text-2xl xl:text-6xl">94%</h1>
              <p>Positive Rating</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 xl:flex-row xl:flex-wrap items-center justify-center">
          {projectData.map((item,index) => (
            <div className="flex flex-col xl:flex-col w-[90%] xl:w-[22rem] h-80 overflow-hidden justify-start xl:h-64 group" key={index}>
              <Image src={`/images/${item.icon}`} width={600} height={400} alt="image"/>
              <span className="relative">
                <div className=" w-full flex flex-row justify-between items-center px-6 h-[6rem] bg-[#040836] group-hover:-translate-y-24 group-hover:transition group-hover:delay-75 group-hover:ease-in-out">
                  <h2>{item.name}</h2>
                  <div className="bg-[#ff014f] flex rounded-full items-center justify-center w-12 h-12 text-2xl cursor-pointer">
                    <FiArrowRight />
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
