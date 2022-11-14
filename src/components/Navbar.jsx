import React from "react";
import Logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-11 px-24">
      <img src={Logo} alt="MetaBnB" />
      <ul className="flex gap-12">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/placestostay">Places to Stay</NavLink>
        <NavLink>NFTs</NavLink>
        <NavLink>Commuity</NavLink>
      </ul>
      <button className="bg-[#A02279] text-white rounded-lg px-6 py-3">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
