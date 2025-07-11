import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="mt-[50px] w-full flex flex-col justify-center items-center md:flex-row-reverse md:w-5/6">
      <div className="img-container">
        <img src="images/mypic.jpg" alt="my picture" />
      </div>
      {/* text container div */}
      <div className="w-full flex flex-col items-center justify-center md:items-start md:w-1/2 ">
        <div className="text-center text-[25px] font-bold mt-7 w-3/4 text-[var(--Dark)] md:text-left md:text-[35px]">
          <p>
            {"Hi, I am Shresth Jaiswal, Full Stack Developer and IT Consultant."}
          </p>
        </div>
        <div className="w-[90%] text-center">
          <p className="text-[14px] font-light text-[var(--Dark)] mt-4 md:text-left md:text-[18px]">
            Hello there! I'm Rishabh Tiwari, a passionate and creative Full
            Stack Developer with a flair for building cutting-edge web
            applications and solving complex technical challenges.
          </p>
        </div>
        <div className="">
          <a href="/resume/Resume.pdf" download={true}>
            <button className="text-white  bg-[var(--primary)] px-5 py-3 text-2xl font-semibold mt-7">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
