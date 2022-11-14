import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Places from "../components/Places";
import { FaFilter } from "react-icons/fa";

const PlacesToStay = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-around mt-32 mb-16 ">
        <div className="flex items-center  gap-12">
          <p>Restaurant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>Fantast City</p>
          <p>Beach</p>
          <p>Carbins</p>
          <p>Off-Grid</p>
          <p>Farm</p>
          <button className=" bg-transparent border-2 rounded-lg px-6 py-3">
            <p className="flex items-center">
              Location <FaFilter />
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
