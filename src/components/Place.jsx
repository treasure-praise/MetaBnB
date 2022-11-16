import React from "react";
import { FaStar } from "react-icons/fa";

const Place = ({ img }) => {
  return (
    <div className="border rounded-2xl  p-4 text-[#434343] text-xs">
      <img
        className="object-contain mx-auto mb-4   w-full"
        src={img}
        alt="places"
      />
      <div className="gap-2 flex flex-col">
        <div className="flex justify-between">
          <p>Desert king</p>
          <p className="font-bold">1MBT per night</p>
        </div>
        <div className="flex justify-between">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <div className="flex gap-2">
          <FaStar fill="#A02279" />
          <FaStar fill="#A02279" />
          <FaStar fill="#A02279" />
          <FaStar fill="#A02279" />
          <FaStar fill="#A02279" />
        </div>
      </div>
    </div>
  );
};

export default Place;
