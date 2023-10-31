import React from "react";
import { skillData } from "../../../Constants";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      id="skills"
      className="xl:px-[12rem] bg-[#02050A] px-6 text-black flex flex-col justify-center items-center gap-6 font-poppins"
    >
      <h1 className="self-center text-2xl py-3 font-bold text-white">My Skills</h1>
      <div className="flex flex-col gap-4">
        <div className="items-center">
          <h1 className="text-2xl xl:text-5xl font-bold font-poppins text-[#f1f1f1]">
            Crafting Stories through Design and Imagination
          </h1>
        </div>
        <div className=" flex gap-3 flex-col flex-wrap xl:flex-row justify-center xl:gap-8 xl:pt-6">
          {["Certificates", "Education", "Biography"].map(
            (item) => (
              <button className="link bg-purple-600 pointer-cursor px-8 py-3 bg-secondry rounded-md text-black" key={item.key}>
                {item}
              </button>
            )
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6 xl:flex-row xl:flex-wrap items-center justify-center">
        {skillData.map((item,index) => (
          <div className="bg-white/40 backdrop-blur-md flex h-[22rem] flex-col p-12 justify-around border xl:w-[30%] rounded-lg gap-3
          transition ease-in-out delay 50 hover:scale-105">
            <div className="pb-4 w-[10rem] border-b-2 border-teal">
              <Image
                src={`/images/${item.icon}`}
                width={40}
                height={40}
                alt=""
                className={`${item.class}`}
                key={index}
              />
            </div>
            <div className="uppercase">{item.name}</div>
            <div>Level - {item.level}</div>
            <div className="w-[auto] whitespace-normal">     
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              inventore. Id, voluptatibus repellat voluptatum libero corporis
              inventore totam aut nihil placeat dignissimos dolorum minus iure
              in! Labore natus libero sunt.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
