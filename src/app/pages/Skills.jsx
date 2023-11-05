import React from "react";
import { skillData } from "../../../Constants";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      id="skills"
      className="xl:px-[12rem] bg-[#02050A] transition ease-in-out delay-150 px-6 text-black flex flex-col justify-center items-center gap-6 font-poppins"
    >
      <h1 className="self-center text-2xl py-3 font-bold text-white">
        My Skills
      </h1>
      <div className="flex flex-col gap-4">
        <div className="items-center text-center">
          <h1 className="text-md xl:text-4xl font-bold font-poppins text-[#f1f1f1]">
            Crafting Stories through Design and Imagination
          </h1>
        </div>
        <div className=" flex gap-3 flex-col px-6 flex-wrap xl:flex-row justify-center xl:gap-8 xl:pt-6">
          {["Certificates", "Education", "Biography"].map((item, index) => (
            <button
              className="link bg-purple-600 pointer-cursor py-2 bg-secondry rounded-md text-black"
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 xl:flex-row xl:flex-wrap items-center justify-center">
        {skillData.map((item, index) => (
          <div
            className="bg-white/40 hover:bg-white/10 backdrop-blur-md p-6 flex h-[90%] w-[85%] xl:h-full flex-col xl:p-6 justify-around border xl:w-[30%] rounded-lg gap-2
           hover:scale-110 hover:flex-col hover:items-center hover:text-center hover:ease-in-out transition-all group"
            key={index}
          >
            <div className="xl:pb-4 border-b-2 border-teal">
              <Image
                src={`/images/${item.icon}`}
                width={40}
                height={40}
                alt="image"
                className={`${item.class} pb-3 group-hover:scale-150 transition-all ease-in-out`}
              />
            </div>
            <h1 className="uppercase text-white font-bold">{item.name}</h1>
            <div className="flex items-center gap-4">Level -{item.level}</div>
            <p className="w-[auto] text-sm xl:text-md whitespace-normal group-hover:text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              inventore. Id, voluptatibus repellat voluptatum libero corporis
              inventore totam aut nihil.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
