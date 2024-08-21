"use client";

import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Pricing from "./_components/Pricing";

const HomePage = () => {
  return (
    <main className="h-full">
      <Navbar />
      <Hero />
      <Pricing />
      <Footer />
    </main>
  );
};

export default HomePage;
