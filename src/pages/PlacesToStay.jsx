import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Places from "../components/Places";
import { VscSettings } from "react-icons/vsc";

const PlacesToStay = () => {
  return (
    <div>
      <Nav />
      <div className="items-center mx-auto px-8 md:px-24  mt-32 mb-16 ">
        <div className="flex items-center justify-between  md:gap-12">
          <div className="md:w-3/4 w-2/3  flex gap-8 md:gap-8 overflow-x-auto">
            <p className="w-full">Restaurant</p>
            <p className="w-full">Cottage</p>
            <p className="w-full">Castle</p>
            <p className="w-full ">FantastCity</p>
            <p className="w-full">Beach</p>
            <p className="w-full">Carbins</p>
            <p className="w-full">OffGrid</p>
            <p className="w-full">Farm</p>
          </div>

          <button className=" bg-transparent border-2 rounded-lg md:px-6 md:py-3 px-4 py-2">
            <p className="flex gap-4 items-center">
              Location <VscSettings />
            </p>
          </button>
        </div>
      </div>
      <Places />
      <Footer />
    </div>
  );
};

export default PlacesToStay;
