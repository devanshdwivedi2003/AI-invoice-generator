import React from "react";
import Headers from "../../components/landing/Headers";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";

const LandingPage = () => {
  return <div className="bg-[#ffffff] text-gray-600">
    <Headers/>
    <main className="mb-[100vh]">
      <Hero/>
      <Features/>
    </main>
  </div>;
};

export default LandingPage;
