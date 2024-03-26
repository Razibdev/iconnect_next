import React from 'react'

export default function Service({item}) {
  return (
    <div>
      <img src={item.image} alt="" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div className=" text-center">
        <button className="font-inter bg-btnBg cs-btn text-textColor mt-4">
          Details
        </button>
      </div>
    </div>
  );
}
