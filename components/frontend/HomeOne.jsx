"use client"
import Image from 'next/image';
import React from 'react'

export default function HomeOne() {
  return (
    <div className="flex justify-between mt-4 p-6 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-50">
      <div className="p-6 w-1/2">
        <h1 className="font-bold text-4xl mt-6">
          We Are Creative Agency, Create & Make Your Dream
        </h1>
        <p className="my-6">
          A team of 100+ experienced developers and designers, ready to help you
          build your web and mobile applications.
        </p>
        <div className=" text-center">
          <button className="font-inter bg-btnBg cs-btn text-textColor mt-10">
            Get Start
          </button>
        </div>
      </div>
      <div className="relative">
        <img src="./home/image25.png" alt="homeone" />
        <img
          className="absolute -bottom-5 right-14"
          src="./home/ellipse5.png"
          alt="ellipse5"
        />
      </div>
    </div>
  );
}
