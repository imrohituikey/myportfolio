import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="xl:page xl:px-[12rem] px-6 bg-[#02050A] text-white py-6 flex flex-col justify-center items-center gap-8"
    >
      <h1 className="self-center text-white text-3xl uppercase">About Me</h1>
      <div className="flex flex-col xl:flex-row xl:flex-basis w-full h-auto gap-6">
        <div className="basis-1/4 flex items-center justify-center xl:justify-left rounded-full">
          <Image
            src={"/images/img1.jpg"}
            className="rounded-full xl:rounded-md"
            width={200}
            height={200}
            alt="image"
          />
        </div>
        <div className="basis-1/2 flex items-center grow justify-center xl:py-4 bg-white/20 rounded-lg backdrop-blur-sm">
          <div className="flex flex-col py-6 xl:flex-row  gap-12 xl:h-full w-[90%] text-white">
            <div className="flex flex-col w-full items-center gap-6">
              <span className="text-xl text-bold uppercase">Biography</span>
              <div className="flex flex-col w-full h-full gap-12">
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h4>Name</h4>
                  <p>Rohit kumar uaike</p>
                </div>
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>Email</h2>
                  <p>Rohituaike81@gmail.com</p>
                </div>
                <div className="flex justify-between border-b-2 border-blue-600 px-6">
                  <h2>Age</h2>
                  <p>23 Y</p>
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
            {/* right container */}
            <div className="flex flex-col w-full items-center gap-6">
              <span className="text-xl uppercase">Education</span>
              <div className="flex flex-col w-full h-full gap-12">
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
