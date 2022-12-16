import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { AiFillPhone } from "react-icons/ai";

function TeamItem({ name, cover, address, list, icon }) {
  return (
    <div className="w-80 h-96 flex flex-col items-center m-5 shadow-lg shadow-slate-300">
      <div className="w-80 h-96 flex flex-col items-center">
        <div className="flex mt-5">
          <p className="bg-orange-400 w-24 text-center text-white p-2 rounded-full mr-32">
            {list} Listings
          </p>
        </div>

        <img
          className="h-28 w-28 rounded-full border-white border-[10px] shadow-lg"
          src={cover}
          alt=""
        />
        <div className="flex space-x-1 items-center mt-2">
          <ImLocation2 className="text-gray-500" />
          <p className=" text-gray-500">{address}</p>
        </div>
        <p className="mt-3">{name}</p>
        <div className="flex space-x-2 mt-3">
          {icon.map((icon) => {
            return <div className="bg-gray-200 p-2 rounded-full">{icon}</div>;
          })}
        </div>
        <div className="flex space-x-14 p-5">
          <div className="flex space-x-2 rounded bg-green-500 p-3 text-white">
            <BsBriefcaseFill className="" size={25} />
            <p>Message</p>
          </div>
          <div className="bg-black w-14 rounded flex items-center justify-center">
            <AiFillPhone className="text-white" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;
