"use client";
import React from "react";
import Link from "next/link";
import ImageFile from "@/components/FormInputs/ImageFile";

export default function Card({service}) {
  return (
    <div className="card relative overflow-hidden bg-white rounded-lg border border-gray-100 shadow-xs dark:bg-gray-800 dark:border-gray-700 ease-in-out duration-300 hover:shadow-lg hover:scale-105">
        <div className="py-4 px-3 before:absolute before:w-40 before:h-40 before:-left-8 before:-top-8 before:rounded-full before:bg-blue-200/20 before:z-0 after:absolute after:w-20 after:h-20 after:-right-4 after:-bottom-4 after:rounded-full after:bg-red-200/20 after:z-0">
            <div className="relative z-10 flex flex-col items-center">
                <ImageFile
                        src={service?.image}
                        alt={service?.project_name}
                        className="w-24 h-24 mb-3 rounded-full shadow-lg flex items-center justify-center"
                    />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{service?.project_name}</h5>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">{service?.description}</p>
                <div className="flex mt-8">
                    <Link href={`/service/${service?._id}`} className="font-inter text-sm bg-btnBg cs-btn text-textColor flex justify-center items-center">
                        Read More
                    </Link>
                </div>
            </div> 
        </div>
    </div>
  )
}
