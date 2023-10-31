import React from "react";
import { socials } from "../../../Constants";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-primary p-3 xl:px-[16rem] xl:py-4 flex flex-col xl:flex-row items-center xl:justify-between">
      <div className="xl:text-3xl font-poppins font-bold uppercase"><span className="text-[#55E6A5]">Rohit</span>.<span className="text-[#F75023]">Dev</span></div>
      <div className="flex gap-x-6 z-10">
        {socials.map((item,index) => (
            <Link href={item.path}  key={index}>
              <div className="hover:scale-105">
              <Image
                className='hover:boxshadow cursor-none'
                src={`/images/${item.icon}`}
                width={30}
                height={30}
                alt=""
              />
              </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
