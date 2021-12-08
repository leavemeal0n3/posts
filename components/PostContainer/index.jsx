import React from "react";

function Posts({ title, city, price, imgURl, description, date }) {
  return (
    <div className="flex space-x-5 h-80 text-black border border-gray-400 rounded-xl">
      <div className=" w-11/12 max-w-11/12">
        <img className="rounded-l-xl h-full w-auto" src={imgURl}></img>
      </div>
      <div className="p-8 flex flex-col space-y-5">
        <div className="flex justify-between">
          <h2 className="card-title">
            <a href="#">{title}</a>
          </h2>
          <p>{price}〒</p>
        </div>
        <p>{description}</p>
        <div className="pt-16 flex">
          <div className="p-1 rounded bg-yellow-300 w-40 flex justify-center">
            <p className="text-xs text-black">Хозяин недвижимости</p>
          </div>
        </div>
        <div className="card-actions flex items-end h-full">
          <div className="flex space-x-2">
            <h2 className="text-gray-400">{city}</h2>
            <p className="text-gray-400">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
