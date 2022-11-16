import React from "react";
import HeroImg from "../assets/HeroImg.svg";
import MBToken from "../assets/MBToken.svg";
import MetaMask from "../assets/MetaMask.svg";
import OpenSea from "../assets/OpenSea.svg";

const Hero = () => {
  return (
    <main>
      <div className="lg:flex md:px-24 px-8 w-full mt-12 md:mt-32 items-center justify-between gap-12">
        <div className="lg:w-1/2  gap-12 flex flex-col">
          <h1 className="text-6xl text-[#434343]">
            Rent a <span className="text-[#A02279]">Place </span> away from{" "}
            <br /> <span className="text-[#A02279]">Home </span> in the{" "}
            <span className="text-[#A02279]">Metaverse </span>
          </h1>
          <p className="text-2xl text-[#434343]">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="flex ">
            <input
              className="border-2 border-r-0 rounded-r-none rounded-lg border-[#A3A3A3] py-4 px-4 bg-white w-full"
              type="email"
              name=""
              id=""
              placeholder="Search for Location"
            />
            <button className="rounded-l-none rounded-lg py-4 px-2  w-2/3 md:w-2/5 bg-[#A02279] text-white">
              Search
            </button>
          </div>
        </div>
        <div className="mt-12 mx-auto lg:mt-0">
          <img src={HeroImg} alt="hero" />
        </div>
      </div>
      <div className="bg-[#A02279] mx-auto w-full mt-24 h-full flex lg:gap-64 py-4 items-center space justify-around">
        <img src={MBToken} alt="" className="h-4 md:h-8" />
        <img src={MetaMask} alt="" className="h-4 md:h-8" />
        <img src={OpenSea} alt="" className="h-4 md:h-8" />
      </div>
    </main>
  );
};

export default Hero;
