"use client";
import React from "react";
import Link from "next/link";
import ImageFile from "@/components/FormInputs/ImageFile";

export default function Card({port}) {
  return (
    <div>
      <div className="group relative">
        <div className="absolute w-full h-72 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <div className="text-center p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{ port?.project_name }</h3>
                <p className="text-gray-200 text-xs mb-3">{ port?.description }</p>
                <Link href={`/portfolio/${port?._id}`} className="inline-flex items-center justify-center gap-x-1">
                    <span className="text-sm text-white">Details</span>
                    <svg className="w-5 h-5 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                    </svg>
                </Link>
            </div>
        </div>
        <ImageFile
              src={port?.image}
              alt={port?.title}
              className="h-72 w-full rounded-lg object-cover"
          />
      </div>
    </div>
  )
}
