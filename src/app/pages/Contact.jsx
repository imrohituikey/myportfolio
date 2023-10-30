import React from "react";
import { contactdata } from "../../../Constants";
import Image from "next/image";
import Link from "next/link";
import { Dots, Rings } from "../components";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
const Contact = () => {
  return (
    <div
      id="contact"
      className="page xl:py-12 xl:p-12 text-center bg-[#02050A] text-white"
    >
      <div className="flex flex-col gap-8 xl:gap-12 items-center w-full h-full">
        <div className="flex flex-col xl:flex-row gap-3 w-full justify-center px-6">
          {contactdata.map((contact) => (
            <motion.div
              variants={fadeIn("down", 0.05)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="link transition delay-100 ease-in-out flex flex-col items-center justify-center text-sm bg-[#09101A] rounded-md xl:h-[12rem] xl:w-[24rem] gap-2 text-center"
            >
              <Image
                src={`/images/${contact.icon}`}
                width={20}
                height={20}
                alt=""
              />
              <h3>{contact.name}</h3>
              <p className="">{contact.data}</p>
            </motion.div>
          ))}
        </div>
        <div className="absolute left-0 ">
          <Rings/>
        </div>
        <div className=" flex flex-col gap-4 xl:gap-6 w-full text-center items-center">
          <h1 className="text-2xl xl:text-4xl font-semibold">
            <span className="text-accent">let's </span>Connect
          </h1>
          <form className=" flex flex-col gap-6 bg-black backdrop-blur-lg xl:w-[60%] p-3 xl:p-8 rounded-md">
            <div className="flex gap-4 xl:gap-6">
              <input type="text" placeholder="Your Name" className="input" />
              <input type="email" placeholder="Your Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea
              type="message"
              placeholder="Your message"
              className="textarea"
            />
          </form>
          <div className="absolute right-5">
            <Dots />
          </div>
          <button className="link px-4 py-1 xl:px-8 xl:py-2 bg-orange-400 text-black rounded-full">
            Submit
          </button>
          <div className="absolute left-2">
            <Dots />
          </div>
        </div>
      </div>
      <hr className="border-xl border-teal-500" />
      <div className="flex justify-between pt-3 w-full">
        <h1>Developed with love by Rohit © 2023</h1>
        <div className="flex gap-12">
          <Link href={"/"}>Terms & Condition</Link>
          <Link href={"/"}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
