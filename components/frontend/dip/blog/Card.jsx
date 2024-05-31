"use client";
import React from "react";
import Link from "next/link";
import ImageFile from "@/components/FormInputs/ImageFile";

export default function Card({blog}) {
  return (
    <div>
        <div className="group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ease-in-out duration-300 hover:shadow-lg hover:scale-y-105">
            <div className="overflow-hidden">
                <ImageFile
                        src={blog?.image}
                        alt={blog?.title}
                        className="w-full h-60 object-cover rounded-t-lg ease-in-out duration-500 group-hover:scale-110"
                    />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{blog?.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog?.description}</p>
                <div className="">
                    <Link href={`/blog/${blog?._id}`} className="flex items-center gap-x-2 font-inter bg-btnBg cs-btn text-textColor mt-8 px-6 py-2">
                        <span className="whitespace-nowrap text-sm">Read more</span>
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">

                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}
