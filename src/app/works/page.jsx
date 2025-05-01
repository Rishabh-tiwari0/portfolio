import React from "react";
import featuredWorks from "../../../public/data/featuredWorks.json";

const Work = () => {
  return (
    <div className="w-[90%] sm:w-[70%] mx-auto mt-[30px]">
      {featuredWorks.map((elem, i) => (
        <div
          className="w-[90%] mx-auto mt-5 border-b-[1.5px] pb-7 border-gray-300 sm:flex sm:gap-10"
          key={i}
        >
          {/* img container */}
          <div className="sm:max-w-[300px] rounded-sm overflow-hidden">
            <img src={elem.image} alt="dashboard img" />
          </div>
          {/* text container */}
          <div>
            <h3 className="text-[var(--Dark)] font-[Heebo] font-semibold text-[22px] sm:text-3xl">
              {elem.title}
            </h3>
            <p className="flex gap-10 mt-3  ">
              <span className="bg-[var(--Dark)] text-white font-bold text-[14px] px-1 py-0.5 rounded-full">
                {elem.year}
              </span>
              <span>{elem.category}</span>
            </p>
            <p className="mt-3 text-[var(--Dark)] font-[Heebo] font-light text-[16px]">
              {elem.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
