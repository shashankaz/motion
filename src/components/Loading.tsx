"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useDone } from "@/store/store";

const Loading = () => {
  const [count, setCount] = useState(0);
  const { done, setDone } = useDone();

  useEffect(() => {
    setTimeout(() => {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 100) {
            return prevCount + 1;
          } else {
            clearInterval(timer);
            setDone(true);
            return prevCount;
          }
        });
      }, 30);
      return () => clearInterval(timer);
    }, 800);
  }, []);

  useEffect(() => {
    document.body.style.overflow = done ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [done]);

  return (
    <div
      className={`h-screen flex items-center justify-center ${
        done ? "" : "bg-[#f7f7f7]"
      }`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="text-7xl"
      >
        {count} %
      </motion.h1>
    </div>
  );
};

export default Loading;
