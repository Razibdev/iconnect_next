"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { getData } from "@/lib/getData";
import ImageFile from "@/components/FormInputs/ImageFile";
import Banner from "@/components/frontend/dip/banner/Portfolio";
import Footer from "@/components/frontend/dip/Footer";


export default function Page() {

    const { id } = useParams();

    const [portfolio, setPortfolio] = useState(null);
    const endpoint = "api/v1/project/" + id; // Replace 'your-endpoint' with the actual endpoint
  
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getData(endpoint, true);
          setPortfolio(data.data);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchData();
    }, [endpoint]);

  return (
    <div>
      <div className='main-page'>
        <Banner></Banner>

        <div className="blog-details">
          <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
            <h1 className="title text-4xl text-gray-700 font-blod mb-2">{ portfolio?.project_name }</h1>
            <div className="flex items-center gap-x-4 mb-5">
              <div className="flex items-center gap-x-3">
                <a className="text-sm text-gray-500 dark:text-gray-400">Marketing</a>
                <a className="text-sm text-gray-500 dark:text-gray-400">Business</a>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">04-jan-24  10:30 pm</div>
            </div>
            <ImageFile
                src={portfolio?.image}
                alt={portfolio?.project_name}
                className="w-full object-cover"
            />

            <div className="w-full flex gap-x-8 py-6">
              <div className="w-8/12">
                <h3 className="font-medium text-lg text-gray-900 mb-3">{portfolio?.description}</h3>
                <p className="text-sm text-gray-500 mb-5">Lorem ipsum color sit amet, consectetur adi pisicine elt, sed do eismod tempor incialount ut labore etesc dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi</p>
                
                <div className="relative border-s-4 border-red-400 dark:border-gray-700 mb-5">                  
                  <p className="ms-8 text-sm font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                </div>

                <p className="text-sm text-gray-500 mb-3">Lorem ipsum color sit amet, consectetur adi pisicine elt, sed do eismod tempor incialount ut labore etesc dolore magna aliqua</p>
                <h2 className="font-medium text-lg text-gray-900 mb-3">Monthly Web Development Update Just TimeDesign Variable Fallbacks.</h2>
                <p className="text-sm text-gray-400 mb-3">Lorem ipsum color sit amet, consectetur adi pisicine elt, sed do eismod tempor incialount ut labore etesc dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi</p>
                
                <img src="./../../blog/image-50.png" alt="blog" className="w-full object-cover mb-4" />
                <h2 className="font-medium text-xl text-gray-900 mb-3">Fixed Elements And Overlaps Incredibly Easy And Fun Methods For Prototype.</h2>
                <p className="text-sm text-gray-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etesci dolore maona aboua. Ut enim ao minim veniam quis nostrud exercitation ullamco labors mist</p>
              

                <h2 className="text-2xl text-gray-700 font-semibold border-b border-gray-300 pb-2 mb-3">Comment (3)</h2>
                <article >
                    <div className="flex items-start border-b border-gray-100 mb-4">
                        <img className="w-10 h-10 me-4 rounded-full border border-gray-300 shadow-md" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie image"/>
                        <div className="leading-4 dark:text-white">
                            <p className="text-xs font-medium mb-2">Dip</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etesci dolore maona aboua.</p>
                            <p className="text-xs text-gray-500 flex items-center gap-x-12 pb-2">
                              <span>04-jan-2024 10:30pm </span>
                              <span className="font-medium cursor-pointer hover:text-gray-800">Reply</span>
                            </p>
                        </div>
                    </div>
                    <div  className="mt-2 ps-8">
                      <div className="flex items-start border-b border-gray-100 mb-3">
                          <img className="w-10 h-10 me-4 rounded-full border border-gray-300 shadow-md" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="image"/>
                          <div className="leading-4 dark:text-white">
                              <p className="text-xs font-medium mb-2">Joy</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">THis jsdfie sgi sfjehg dgf dfg</p>
                              <p className="text-xs text-gray-500 flex items-center gap-x-12 pb-2">
                                <span>04-jan-2024 10:30pm </span>
                                <span className="font-medium cursor-pointer hover:text-gray-800">Reply</span>
                              </p>
                          </div>
                      </div>
                    </div>
                    <div className="flex items-start border-b border-gray-100 mb-4">
                        <img className="w-10 h-10 me-4 rounded-full border border-gray-300 shadow-md" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                        <div className="leading-4 dark:text-white">
                            <p className="text-xs font-medium mb-2">Roy</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etesci dolore maona aboua.</p>
                            <p className="text-xs text-gray-500 flex items-center gap-x-12 pb-2">
                              <span>04-jan-2024 10:30pm </span>
                              <span className="font-medium cursor-pointer hover:text-gray-800">Reply</span>
                            </p>
                        </div>
                    </div>
                </article>
    
                <h2 className="text-2xl text-gray-700 font-semibold border-b border-gray-300 pb-2 mb-3 mt-16">Leave a comment</h2>
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2 sm:col-span-1">
                          <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Full name" required="" />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Email" required="" />
                      </div>
                      <div className="col-span-2">
                          <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Subject" required="" />
                      </div>
                      <div className="col-span-2">
                          <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                          <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                      </div>
                    </div>
                    <button typey="button" className="flex items-center gap-x-2 font-inter bg-btnBg cs-btn text-textColor px-3 py-1.5 md:px-6 md:py-2 rounded-lg">
                        <span className="whitespace-nowrap text-xs md:text-sm">Comment</span>
                    </button>
                </form>
              </div>

              <div className="w-4/12">
                <div className="mb-4">
                  <h4 className="font-medium text-xl mb-3">Category</h4>
                  <div className="text-base list-none bg-white divide-y divide-gray-100 dark:bg-gray-700">
                    <ul className="py-1">
                      <li>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Business</a>
                      </li>
                      <li>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Consulting</a>
                      </li>
                      <li>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Corporate</a>
                      </li>
                      <li>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Startup</a>
                      </li>
                      <li>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Financel</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-xl mb-3">Recent News</h4>
                  <div className="divide-y divide-gray-100 dark:divide-gray-700">
                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex-shrink-0">
                        <img className="w-20 h-16" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="image" />
                      </div>
                      <div className="w-full ps-3">
                          <div className="text-gray-800 text-sm font-medium mb-1.5 dark:text-gray-400">New message from Hey, what is up? All set for the presentation?</div>
                          <div className="text-xs text-gray-400 dark:text-blue-500">04-jan-24 10:30 pm</div>
                      </div>
                    </a>
                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex-shrink-0">
                        <img className="w-20 h-16" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="image" />
                      </div>
                      <div className="w-full ps-3">
                          <div className="text-gray-800 text-sm font-medium mb-1.5 dark:text-gray-400">New message from Hey, what is up? All set for the presentation? </div>
                          <div className="text-xs text-gray-400 dark:text-blue-500">04-jan-24 10:30 pm</div>
                      </div>
                    </a>
                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex-shrink-0">
                        <img className="w-20 h-16" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="image" />
                      </div>
                      <div className="w-full ps-3">
                          <div className="text-gray-800 text-sm font-medium mb-1.5 dark:text-gray-400">New message from  Hey, what is up? All set for the presentation? </div>
                          <div className="text-xs text-gray-400 dark:text-blue-500">04-jan-24 10:30 pm</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-xl mb-3">Populer Tags</h4>
                  <div className="flex flex-wrap gap-x-3 gap-y-3">
                    <a href="#" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                      Merketing
                    </a>  
                    <a href="#" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                      Seo Online
                    </a>  
                    <a href="#" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                      Designing
                    </a>  
                    <a href="#" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                      Branding
                    </a>  
                    <a href="#" className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                      Development
                    </a>  
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  )
}
