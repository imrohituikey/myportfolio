import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="page xl:p-32 bg-primary gap-6 flex flex-col">
      <h1 className="self-center text-white text-3xl uppercase">About Me</h1>
      <div className="flex xl:flex-basis w-full h-[80%]">
        <div className="basis-1/4 flex items-center justify-center">
          <Image
            src={"/images/profileimg.jpg"}
            className="rounded"
            width={300}
            height={500}
            alt=""
          />
        </div>
        <div className="basis-1/2 flex grow flex-basis xl:py-4 bg-white/10 rounded-md backdrop-blur-sm">
          
        </div>
      </div>
    </div>
  );
};

export default About;
