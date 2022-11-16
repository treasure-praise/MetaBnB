import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import NFTs from "../components/NFTs";
import Places from "../components/Places";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <h2 className="text-center px-8 mt-14 mb-11 text-5xl">
        Inspiration for your next adventure
      </h2>
      <Places />
      <NFTs />
      <Footer />
    </>
  );
};

export default Home;
