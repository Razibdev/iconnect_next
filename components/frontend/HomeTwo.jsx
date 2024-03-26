"use client";
import React from "react";
import Link from "next/link";
export default function HomeTwo() {
  return (
    <div className="flex justify-between mt-4 p-6 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-50">
      <div className="p-6 w-1/2">
        <img src="./home/vector.png" alt="vector" />
        <Link href="#">About the Agency</Link>
        <h2 className="font-bold text-2xl mt-2">
          Insights and resources to help drive your business forward faster.
        </h2>
        <p className="my-4">
          We build results-oriented brand strategies and continually refine your
          campaigns for the greatest outcome. From full-scale digital marketing
          and advertising strategy, right through to our precise execution and
          reporting...that's right, we've got you covered
        </p>
        <div className=" text-center">
          <button className="font-inter bg-btnBg cs-btn text-textColor mt-4">
            Get Start
          </button>
        </div>
      </div>
      <div>
        <img src="./home/image-28.png" alt="homeone" />
      </div>
    </div>
  );
}
