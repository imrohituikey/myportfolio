'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import {Btn,Header,Customcursor} from '../components'

const Home = () => {

  return (
    <div id="home" className="page bg-[#02050A] text-white">
      <div className="w-full h-full ">
        <Header/>
        <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 font-poppins font-bold"
          >
            HI, I'M <span className="text-[#F75023]">ROHIT</span>!<br/>
            CREATIVE <span className="text-[#55E6A5]">CODER</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-2xl xl:max-x-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I'm a web Developer with a mission to create delightful and 
            intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail,
             I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex gap-5"
          >
            <Btn name={"Hire me"} />
            <Btn name={"Download CV"} />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
        w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></motion.div> */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          {/* <Avatar /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
