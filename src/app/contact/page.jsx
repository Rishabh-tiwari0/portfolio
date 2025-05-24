"use client";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="w-[90vw] sm:w-[70vw] flex flex-wrap mx-auto gap-10 flex-col sm:flex-row justify-center items-center mt-10 mb-20">
      {/* left container */}
      <div className="w-[100%] sm:w-[40%] flex flex-col justify-center items-start gap-5">
        <h1 className="text-5xl font-medium">Contact Us</h1>
        <p className="text-gray-600 text-[18px] mt-4 w-[80%]">
          Feel free to use the form or drop us an email. Old-fashioned phone
          calls work too.
        </p>
        <p
          className="flex gap-3"
          onClick={() => (window.location.href = "tel:+918931085848")}
        >
          <IoCallOutline className="text-amber-500 text-[28px]" />
          <span className=" text-[18px] hover:text-amber-500 text-gray-900">
            +91-8931085848
          </span>
        </p>
        <p
          className="flex gap-3"
          onClick={() =>
            (window.location.href = "mailto:rishabhtiwari0010@gmail.com")
          }
        >
          <MdOutlineMailOutline className="text-amber-500 text-3xl" />
          <span className="text-gray-900 text-[18px] ">
            Rishabhtiwari0010@gmail.com
          </span>
        </p>
        <p className="flex gap-3">
          <IoLocationOutline className="text-amber-500 text-4xl " />
          <span className="text-[18px] text-gray-900">
            Sanigawan Ramadevi Kanpur , 208021
          </span>
        </p>
      </div>
      {/* right container */}
      <div className="w-[90%] sm:w-[40%] flex flex-col gap-5">
        <div>
          <div className="w-full">
            <div className="flex flex-col gap-2 mt-2">
              <div className="font-semicold">Enter Your Name</div>

              <input
                type="text"
                placeholder="First"
                className="w-auto border-gray-600 border rounded-md px-2 py-1"
              />
            </div>
          </div>
        </div>
        <div className="flex  flex-col gap-2 mt-5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-auto border-gray-600 border rounded-md px-2 py-1"
            placeholder="abc@mail.com"
          />
        </div>
        <div className="flex  flex-col gap-2 mt-5">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            maxLength={10}
            id="mobile"
            className="w-auto border-gray-600 border rounded-md px-2 py-1"
            placeholder="1234567890"
          />
        </div>
        <div className="flex  flex-col gap-2 mt-5">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-auto border-gray-600 border rounded-md px-2 py-1"
          ></textarea>
        </div>
        <button className="text-white  bg-[var(--primary)] px-5 py-3 text-2xl font-semibold mt-7 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
