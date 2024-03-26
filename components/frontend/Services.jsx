import React from 'react'
import Service from './Service';

export default function Services() {
  const data = [
    {
      image: "./home/frame.png",
      title: "Software Development",
      description:
        "Our knowledgeable expert software developers are incredibly detail oriented in the application development process.",
    },

    {
      image: "./home/frame.png",
      title: "Web Development",
      description:
        "Our web developers have an uncanny ability to bring complex web designs to life. We build for the future.",
    },
    {
      image: "./home/frame.png",
      title: "Digital marketing",
      description:
        "We work to develop high conversion strategies through state-of-the-art digital agency technology.",
    },
    {
      image: "./home/frame.png",
      title: "Graphic Design",
      description:
        "Our graphic designers are skilled in visual concept tactics that will leave a lasting impression on your visitors.",
    },
    {
      image: "./home/frame.png",
      title: "Branding",
      description:
        "Our branding department creates highly integrated marketing plans that will keep working in the future.",
    },
    {
      image: "./home/frame.png",
      title: "Marketing services & SEO",
      description:
        "We help clinical research organizations build trust with their participants, from the ground up.",
    },
  ];
  return (
    <div className="my-4 p-6 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-50">
      <div className='text-center'>
        <h2 className="font-bold text-2xl mt-6">Our Services</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {data.map((item, index) => {
          return <Service item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
