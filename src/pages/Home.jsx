import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NFTs from "../components/NFTs";
import Places from "../components/Places";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <h2 className="text-center mt-14 mb-11 text-5xl">
        Inspiration for your next adventure
      </h2>
      <Places />
      <NFTs />
      <Footer />
    </>
  );
};

export default Home;
