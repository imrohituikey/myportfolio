import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="page xl:px-[12rem] xl:py-28 bg-[#02050A] gap-6 flex flex-col"
    >
      <h1 className="self-center text-white text-3xl uppercase">About Me</h1>
      <div className="flex xl:flex-basis w-full h-auto">
        <div className="basis-1/4 flex items-center justify-left">
          <Image
            src={"/images/profileimg.jpg"}
            className="rounded"
            width={300}
            height={400}
            alt=""
          />
        </div>
        <div className="basis-1/2 flex items-center grow justify-center xl:py-4 bg-white/20 rounded-lg backdrop-blur-sm">
          <div className="flex gap-12 h-[80%] w-[90%] text-white">
            <div className="flex flex-col w-full items-center gap-6">
              <span className="text-xl text-bold uppercase">Biography</span>
              <div className="flex flex-col w-full p-6 gap-12">
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>Name</h2>
                  <p>Rohit thakur</p>
                </div>
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>Age</h2>
                  <p> 22</p>
                </div>
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>Email</h2>
                  <p>Rohit.Dev@gmail.com</p>
                </div>
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>Github</h2>
                  <p>heyimrohitthakur</p>
                </div>
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>Linkdin</h2>
                  <p>Rohit thakur</p>
                </div>
              </div>
            </div>
            {/* rigth container */}
            <div className="flex flex-col w-full items-center gap-6">
              <span className="text-xl uppercase">Education</span>
              <div className="flex flex-col w-full p-6 gap-12">
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>HSC</h2>
                  <p>2016</p>
                </div>
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>SSC</h2>
                  <p>2018</p>
                </div>
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>Graduation</h2>
                  <p>2022</p>
                </div>
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>Post Graduaction</h2>
                  <p>2024</p>
                </div>
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>Post Graduaction</h2>
                  <p>2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
