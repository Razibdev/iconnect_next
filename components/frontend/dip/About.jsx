import React from 'react'

export default function About() {
  return (
    <div>
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
            <div className="flex items-center flex-col-reverse md:flex-row">
                <div className="w-full md:w-6/12">
                    <div className="relative flex justify-center md:justify-start">
                        <img src="./home/image-28.png" alt="homeone" />
                    </div>
                </div>
                <div className="w-full md:w-6/12">
                    <div className="py-4">
                        <svg className="w-10 h-10 text-gray-800 dark:text-white mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">

                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"/>
                           
                        </svg>
                        <h5 className="text-sm text-[#ff2252] mb-4">About the Agency</h5>
                        <h2 className="font-semibold text-3xl">
                            Insights and resources to help drive your business forward faster.
                        </h2>
                        <p className="my-6">
                            We build results-oriented brand strategies and continually refine your campaigns for the greatest outcome. From full-scale digital marketing and advertising strategy, right through to our precise execution and reporting...that is right, we have got you covered
                        </p>
                        <div className="">
                            <button className="font-inter bg-btnBg cs-btn text-textColor mt-10">
                                Get Start
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
