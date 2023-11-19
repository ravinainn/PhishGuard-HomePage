import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Features from "../components/features";
import WebExtension from "../components/webExtension";
import Pricing from "../components/pricing";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <WebExtension />
      <Pricing />
    </>
  );
};

export default Home;
