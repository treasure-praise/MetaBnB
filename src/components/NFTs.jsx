import React from "react";
import NFT from "../assets/NFT.svg";

const NFTs = () => {
  return (
    <section className="flex justify-between items-center px-24 bg-[#A02279] text-white py-32 ">
      <div className="flex gap-9 flex-col">
        <h2 className="text-5xl">MetaBnB NFTs</h2>
        <p className="text-lg w-2/3">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="w-1/3 text-[#A02279] bg-white rounded-lg px-6 py-3">
          Learn More
        </button>
      </div>
      <img className="h-1/2" src={NFT} alt="Nfts" />
    </section>
  );
};

export default NFTs;
