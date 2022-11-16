import React from "react";
import Logo from "../assets/Logo2.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E] py-16 px-8 md:px-24 text-white md:flex items-center justify-between">
      <div className="flex flex-col gap-8 mb-8">
        <img src={Logo} alt="MetaBnB" className="w-1/2  " />
        <div className="flex gap-8">
          <FaFacebook fill="white" />
          <FaInstagram fill="white" />
          <FaTwitter fill="white" />
        </div>
        <p>© 2022 MetaBnB</p>
      </div>
      <div className="mb-8 ">
        <p className="mb-6 text-lg font-bold">Community</p>
        <p className="mb-4">NFTs</p>
        <p className="mb-4">Tokens</p>
        <p className="mb-4">Landlords</p>
        <p className="mb-4">Discord</p>
      </div>
      <div className="mb-8 ">
        <p className="mb-6 text-lg font-bold">Places</p>
        <p className="mb-4">Castle</p>
        <p className="mb-4">Farms</p>
        <p className="mb-4">Beach</p>
        <p className="mb-4">Learn More</p>
      </div>
      <div className="mb-8 ">
        <p className="mb-6 text-lg  font-bold">About Us</p>
        <p className="mb-4">Roadmap</p>
        <p className="mb-4">Creators</p>
        <p className="mb-4">Career</p>
        <p className="mb-4">Contact Us</p>
      </div>
    </footer>
  );
};

export default Footer;
