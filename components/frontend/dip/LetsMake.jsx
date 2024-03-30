import React from 'react'

export default function LetsMake() {
  return (
    <div>
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
            <div className="flex items-center flex-col-reverse md:flex-row">
                <div className="w-full md:w-5/12">
                    <div className="relative flex justify-center md:justify-start">
                        <img src="./home/image-23.jpg" alt="homeone" />
                    </div>
                </div>
                <div className="w-full md:w-7/12">
                    <div className="py-4">
                        <h1 className="font-semibold text-4xl mt-6">
                            We Are Creative Agency, Create & Make Your Dream
                        </h1>
                        <p className="my-6">
                            A team of 100+ experienced developers and designers, ready to help you
                            build your web and mobile applications.
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
