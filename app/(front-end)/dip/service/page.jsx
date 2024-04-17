import React from 'react'
import Banner from "@/components/frontend/dip/banner/Service";
import Footer from "@/components/frontend/dip/Footer";


export default function page() {
  return (
    <div>
      <div className='main-page'>
        <Banner></Banner>

        <div className="blog-details">
          <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
            <div className="w-full flex gap-x-8 py-6">
                <div className="w-4/12">
                    <div className="mb-4 bg-gray-100 px-4 py-3 rounded-lg">
                        <h4 className="font-medium text-lg mb-3">Service</h4>
                        <div className="text-base list-none divide-y divide-gray-100 dark:bg-gray-700">
                            <ul className="py-1 space-y-2.5">
                                <li>
                                    <a href="#" className="group flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:text-red-600 bg-white rounded-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        <span>Business</span>
                                        <svg className="w-5 h-5 group-hover:text-red-600 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:text-red-600 bg-white rounded-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        <span>Consulting</span>
                                        <svg className="w-5 h-5 group-hover:text-red-600 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:text-red-600 bg-white rounded-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        <span>Corporate</span>
                                        <svg className="w-5 h-5 group-hover:text-red-600 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:text-red-600 bg-white rounded-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        <span>Startup</span>
                                        <svg className="w-5 h-5 group-hover:text-red-600 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:text-red-600 bg-white rounded-lg dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                        <span>Financel</span>
                                        <svg className="w-5 h-5 group-hover:text-red-600 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-4 bg-gray-100 px-4 py-3 rounded-lg">
                        <h4 className="font-medium text-lg mb-3">Need Any Help From Us</h4>
                        <button className="font-inter bg-btnBg cs-btn text-textColor mb-5 text-sm rounded-full flex items-center gap-x-1">
                            <span>Get Started</span>
                            <svg className="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                            </svg>
                        </button>
                        <img src="./../blog/image-50.png" alt="blog" className="w-full object-cover mb-4" />
                    </div>

                    <div className="mb-4 px-4 py-3">
                        <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button type="button" className="bg-[#1f2d77] flex items-center justify-between w-full px-5 py-3 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-[#3C4A93] dark:hover:bg-gray-800 gap-3 mb-4" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                    <span className="text-sm text-white">What is Flowbite?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                </div>
                            </div>

                            <h2 id="accordion-collapse-heading-2">
                                <button type="button" className="bg-[#1f2d77] flex items-center justify-between w-full px-5 py-3 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-[#3C4A93] dark:hover:bg-gray-800 gap-3 mb-4" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                    <span className="text-sm text-white">Is there a Figma file available?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                </div>
                            </div>

                            <h2 id="accordion-collapse-heading-3">
                                <button type="button" className="bg-[#1f2d77] flex items-center justify-between w-full px-5 py-3 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-[#3C4A93] dark:hover:bg-gray-800 gap-4" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span className="text-sm text-white">What are the differences between Flowbite?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-8/12">
                    <img src="./../blog/image-50.png" alt="blog" className="w-full h-96 object-cover mb-4" />
                    <h2 className="font-medium text-xl text-gray-900 mb-3">Fixed Elements And Overlaps Incredibly Easy And Fun Methods For Prototype.</h2>
                    <p className="text-sm text-gray-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etesci dolore maona aboua. Ut enim ao minim veniam quis nostrud exercitation ullamco labors mist</p>
                
                    <div className="mx-auto w-full px-4 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-6">

                            <div className="card relative overflow-hidden bg-white rounded-lg border border-gray-100 shadow-xs dark:bg-gray-800 dark:border-gray-700 ease-in-out duration-300 hover:shadow-lg hover:scale-105">
                                <div className="py-4 px-3 before:absolute before:w-40 before:h-40 before:-left-8 before:-top-8 before:rounded-full before:bg-blue-200/20 before:z-0 after:absolute after:w-20 after:h-20 after:-right-4 after:-bottom-4 after:rounded-full after:bg-red-200/20 after:z-0">
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-24 h-24 mb-3 rounded-full shadow-lg flex items-center justify-center">
                                            <svg className="w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                                            </svg>
                                        </div>
                                        <h5 className="mb-1 mt-2 text-lg text-center font-medium text-gray-900 dark:text-white">Fiil In TheRequired Form</h5>
                                    </div> 
                                </div>
                            </div>

                            <div className="card relative overflow-hidden bg-white rounded-lg border border-gray-100 shadow-xs dark:bg-gray-800 dark:border-gray-700 ease-in-out duration-300 hover:shadow-lg hover:scale-105">
                                <div className="py-4 px-3 before:absolute before:w-40 before:h-40 before:-left-8 before:-top-8 before:rounded-full before:bg-blue-200/20 before:z-0 after:absolute after:w-20 after:h-20 after:-right-4 after:-bottom-4 after:rounded-full after:bg-red-200/20 after:z-0">
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-24 h-24 mb-3 rounded-full shadow-lg flex items-center justify-center">
                                            <svg className="w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                                            </svg>
                                        </div>
                                        <h5 className="mb-1 mt-2 text-lg text-center font-medium text-gray-900 dark:text-white">Submit YourOriginal Documents</h5>
                                    </div> 
                                </div>
                            </div>

                            <div className="card relative overflow-hidden bg-white rounded-lg border border-gray-100 shadow-xs dark:bg-gray-800 dark:border-gray-700 ease-in-out duration-300 hover:shadow-lg hover:scale-105">
                                <div className="py-4 px-3 before:absolute before:w-40 before:h-40 before:-left-8 before:-top-8 before:rounded-full before:bg-blue-200/20 before:z-0 after:absolute after:w-20 after:h-20 after:-right-4 after:-bottom-4 after:rounded-full after:bg-red-200/20 after:z-0">
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-24 h-24 mb-3 rounded-full shadow-lg flex items-center justify-center">
                                            <svg className="w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                                            </svg>
                                        </div>
                                        <h5 className="mb-1 mt-2 text-lg text-center font-medium text-gray-900 dark:text-white">Get TheResource Material</h5>
                                    </div> 
                                </div>
                            </div>
        
                        </div>
                    </div>

                    <div className="mt-8 mb-4 py-3">
                        <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-11">
                                <button type="button" className="flex items-center gap-x-2 w-full px-5 py-3 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 mb-4" data-accordion-target="#accordion-collapse-body-11" aria-expanded="true" aria-controls="accordion-collapse-body-11">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                                    </svg>
                                    <span className="text-sm">What is Flowbite?</span>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-11" className="hidden" aria-labelledby="accordion-collapse-heading-11">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                </div>
                            </div>

                            <h2 id="accordion-collapse-heading-22">
                                <button type="button" className="flex items-center gap-x-2 w-full px-5 py-3 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 mb-4" data-accordion-target="#accordion-collapse-body-22" aria-expanded="false" aria-controls="accordion-collapse-body-22">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                                    </svg>
                                    <span className="text-sm">Is there a Figma file available?</span>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-22" className="hidden" aria-labelledby="accordion-collapse-heading-22">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                </div>
                            </div>

                            <h2 id="accordion-collapse-heading-33">
                                <button type="button" className="flex items-center gap-x-2 w-full px-5 py-3 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-4" data-accordion-target="#accordion-collapse-body-33" aria-expanded="false" aria-controls="accordion-collapse-body-33">
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                                    </svg>
                                    <span className="text-sm">What are the differences between Flowbite?</span>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-33" className="hidden" aria-labelledby="accordion-collapse-heading-33">
                                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    </div>
                </div>

            </div>

            <div className="mx-auto w-full px-4 py-8">
                <div className="heading flex flex-col items-center">
                    <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Our web developers have an uncanny ability to bring complex web designs to life. We build for the future.</p>
                </div>
                <div className="flex items-center flex-col-reverse md:flex-row">
                    <div className="w-full md:w-5/12">
                        <div className="relative flex justify-center md:justify-start">
                            <img src="./../service/service-19.png" alt="homeone" />
                        </div>
                    </div>
                    <div className="w-full md:w-7/12">
                        <div className="py-4">
                            <h4 className="font-semibold text-xl">
                                Insights and resources to help drive your business forward faster.
                            </h4>
                            <p className="my-6">
                                We build results-oriented brand strategies and continually refine your campaigns for the greatest outcome. From full-scale digital marketing and advertising strategy, right through to our precise execution and reporting...that's right, we've got you covered
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

            <div className="bg-gradient-to-br from-[#2e80ff] to-[#cdd9ff]">
                <div className="mx-auto w-full max-w-screen-md px-4 py-10">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h2 className="font-bold text-2xl mb-4">We Are Creative Agency</h2>
                            <h4 className="font-bold text-xl">We Are Creative Agency, Create & Make Your Dream</h4>
                        </div>
                        <button className="font-inter bg-btnBg cs-btn text-textColor rounded-lg text-sm">Get Start</button>
                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  )
}
