import React from 'react'

export default function Portfolio() {
  return (
    <div>
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
            <div className="heading flex flex-col items-center">
                <svg className="w-10 h-10 text-gray-800 dark:text-white mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"/>
                </svg>
                <h2 className="text-3xl font-semibold mb-2">Our Portfolio</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Our web developers have an uncanny ability to bring complex web designs to life. We build for the future.</p>
            </div>
            <div className="flex items-center justify-center pb-4 flex-wrap">
                <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Design</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Development</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Marketing</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Others</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="group relative">
                    <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="text-center p-6">
                            <h3 className="text-white text-xl font-semibold mb-2">Project Title</h3>
                            <p className="text-gray-200 text-xs mb-3">Our web developers have an uncanny ability to bring complex web designs</p>
                            <a href="#" className="inline-flex items-center justify-center gap-x-1">
                                <span className="text-sm text-white">Details</span>
                                <svg className="w-5 h-5 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                </div>
                <div className="group relative">
                    <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="text-center p-6">
                            <h3 className="text-white text-xl font-semibold mb-2">Project Title</h3>
                            <p className="text-gray-200 text-xs mb-3">Our web developers have an uncanny ability to bring complex web designs</p>
                            <a href="#" className="inline-flex items-center justify-center gap-x-1">
                                <span className="text-sm text-white">Details</span>
                                <svg className="w-5 h-5 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
                </div>
                <div className="group relative">
                    <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="text-center p-6">
                            <h3 className="text-white text-xl font-semibold mb-2">Project Title</h3>
                            <p className="text-gray-200 text-xs mb-3">Our web developers have an uncanny ability to bring complex web designs</p>
                            <a href="#" className="inline-flex items-center justify-center gap-x-1">
                                <span className="text-sm text-white">Details</span>
                                <svg className="w-5 h-5 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
                </div>
                <div className="group relative">
                    <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="text-center p-6">
                            <h3 className="text-white text-xl font-semibold mb-2">Project Title</h3>
                            <p className="text-gray-200 text-xs mb-3">Our web developers have an uncanny ability to bring complex web designs</p>
                            <a href="#" className="inline-flex items-center justify-center gap-x-1">
                                <span className="text-sm text-white">Details</span>
                                <svg className="w-5 h-5 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">

                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>

                                </svg>
                            </a>
                        </div>
                    </div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
                </div>
                <div className="group relative">
                    <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="text-center p-6">
                            <h3 className="text-white text-xl font-semibold mb-2">Project Title</h3>
                            <p className="text-gray-200 text-xs mb-3">Our web developers have an uncanny ability to bring complex web designs</p>
                            <a href="#" className="inline-flex items-center justify-center gap-x-1">
                                <span className="text-sm text-white">Details</span>
                                <svg className="w-5 h-5 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">

                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>

                                </svg>
                            </a>
                        </div>
                    </div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
                </div>
                <div className="group relative">
                    <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="text-center p-6">
                            <h3 className="text-white text-xl font-semibold mb-2">Project Title</h3>
                            <p className="text-gray-200 text-xs mb-3">Our web developers have an uncanny ability to bring complex web designs</p>
                            <a href="#" className="inline-flex items-center justify-center gap-x-1">
                                <span className="text-sm text-white">Details</span>
                                <svg className="w-5 h-5 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">

                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>

                                </svg>
                            </a>
                        </div>
                    </div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
                </div>
            </div>
        </div>

    </div>
  )
}
