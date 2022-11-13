import React from "react";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-11 px-24">
      <img src={Logo} alt="MetaBnB" />
      <ul className="flex gap-12">
        <li>Home</li>
        <li>Places to Stay</li>
        <li>NFTs</li>
        <li>Commuity</li>
      </ul>
      <button className="bg-[#A02279] text-white rounded-lg px-6 py-3">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
