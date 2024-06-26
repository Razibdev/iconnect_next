"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/lib/getData";
import Card from "@/components/frontend/dip/blog/Card";

export default function Blog() {
    const [blogs, setBlogs] = useState(null);
    const endpoint = "api/v1/blog"; // Replace 'your-endpoint' with the actual endpoint

    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getData(endpoint, false);
          setBlogs(data.data);
        } catch (error) {
          console.log(error);
        }
      }

      fetchData();
    }, [endpoint]);
  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
          <div className="heading flex flex-col items-center mb-4">
              <svg className="w-10 h-10 text-gray-800 dark:text-white mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">

                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"/>
              </svg>
              <h2 className="text-3xl font-semibold mb-2">Our Blog</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Our web developers have an uncanny ability to bring complex web designs to life. We build for the future.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
              
            {blogs &&
              blogs.map((item, i) => {
              return (
                <Card blog={item} key={i}></Card>
                );
              })}

          </div>
      </div>
    </div>
  )
}
