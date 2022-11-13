import React from "react";
import Logo from "../assets/Logo2.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E] py-16 px-24 text-white flex items-center justify-between">
      <div className="flex flex-col gap-8">
        <img src={Logo} alt="MetaBnB" />
        <div className="flex gap-8">
          <FaFacebook fill="white" />
          <FaInstagram fill="white" />
          <FaTwitter fill="white" />
        </div>
        <p>© 2022 MetaBnB</p>
      </div>
      <div>
        <p className="mb-6 text-lg">Community</p>
        <p className="mb-4">NFTs</p>
        <p className="mb-4">Tokens</p>
        <p className="mb-4">Landlords</p>
        <p className="mb-4">Discord</p>
      </div>
      <div>
        <p className="mb-6 text-lg">Places</p>
        <p className="mb-4">Castle</p>
        <p className="mb-4">Farms</p>
        <p className="mb-4">Beach</p>
        <p className="mb-4">Learn More</p>
      </div>
      <div>
        <p className="mb-6 text-lg">About Us</p>
        <p className="mb-4">Roadmap</p>
        <p className="mb-4">Creators</p>
        <p className="mb-4">Career</p>
        <p className="mb-4">Contact Us</p>
      </div>
    </footer>
  );
};

export default Footer;
