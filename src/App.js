import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Places from "./components/Places";
import NFTs from "./components/NFTs";
// import { BrowserRouter as Router, Routes, } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Places />
      <NFTs />
      <Footer />
    </div>
  );
}

export default App;
