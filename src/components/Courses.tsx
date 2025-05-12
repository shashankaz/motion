"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Courses = () => {
  const [tab, setTab] = useState("Business & Economics");

  return (
    <div className="bg-[#f7f7f7]">
      <div className="min-h-screen flex flex-col items-center justify-center gap-8 container mx-auto px-4 py-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center">
          Discover our courses
        </h2>
        <ul className="flex items-center bg-white rounded-full p-1">
          <li
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-center text-xs sm:text-sm md:text-base ${
              tab === "Business & Economics" ? "bg-teal-500 text-white" : ""
            }`}
            onClick={() => setTab("Business & Economics")}
          >
            Business & Economics
          </li>
          <li
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-center text-xs sm:text-sm md:text-base ${
              tab === "Investment & Markets" ? "bg-teal-500 text-white" : ""
            }`}
            onClick={() => setTab("Investment & Markets")}
          >
            Investment & Markets
          </li>
          <li
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-center text-xs sm:text-sm md:text-base ${
              tab === "Personal Finance" ? "bg-teal-500 text-white" : ""
            }`}
            onClick={() => setTab("Personal Finance")}
          >
            Personal Finance
          </li>
          <li
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-center text-xs sm:text-sm md:text-base ${
              tab === "Economic Theories" ? "bg-teal-500 text-white" : ""
            }`}
            onClick={() => setTab("Economic Theories")}
          >
            Economic Theories
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          <CourseCard courseName="Economic Strategy" id="1" />
          <CourseCard courseName="Financial Markets" id="2" />
          <CourseCard courseName="Business Finance" id="3" />
        </div>
      </div>
    </div>
  );
};

export default Courses;

interface CourseCardProps {
  courseName: string;
  id: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ courseName, id }) => {
  return (
    <div className="h-60 md:h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 relative">
      <Image
        src={`/courses/${id}.png`}
        alt="Course Image"
        width={500}
        height={500}
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <Button variant="secondary">{courseName}</Button>
        <Button>Go to course</Button>
      </div>
    </div>
  );
};
