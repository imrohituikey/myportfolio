"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Customcursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const mouseVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height:150,
      width : 150,
    },
  };
  const [cursorvariants, setCursorvariants] = useState("default");

  useEffect(() => {
    const mosuseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mosuseMove);

    return () => {
      window.addEventListener("mousemove", mosuseMove);
    };
  }, []);
  const textEnter = ()=>setCursorvariants('text');
  const textLeave = ()=>setCursorvariants('default');

  return (
    <motion.div
      variants={mouseVariants}
      animate={cursorvariants}
      className="w-[32px] h-[32px] bg-black rounded-2xl absolute boxshadow"
    ></motion.div>
  );
};

export default Customcursor;
