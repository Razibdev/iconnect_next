import React from 'react'

export default function Card() {
  return (
    <div>
        <div className="card relative overflow-hidden bg-white rounded-lg border border-gray-100 shadow-xs dark:bg-gray-800 dark:border-gray-700 ease-in-out duration-300 hover:shadow-lg hover:scale-105">
            <div className="py-4 px-3 before:absolute before:w-40 before:h-40 before:-left-8 before:-top-8 before:rounded-full before:bg-blue-200/20 before:z-0 after:absolute after:w-20 after:h-20 after:-right-4 after:-bottom-4 after:rounded-full after:bg-red-200/20 after:z-0">
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 mb-3 rounded-full shadow-lg flex items-center justify-center">
                        <svg className="w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg>
                    </div>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Web Development</h5>
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400">Our web developers have an uncanny ability to bring complex web designs to life. We build for the future.</p>
                    <div className="flex mt-8">
                        <a href="#" className="font-inter text-sm bg-btnBg cs-btn text-textColor flex justify-center items-center">
                            Get Start
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}
