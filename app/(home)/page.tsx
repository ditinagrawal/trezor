"use client";

import { useEffect } from "react";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Pricing from "./_components/Pricing";
import { useToast } from "@/components/ui/use-toast";

const HomePage = () => {
  const { toast } = useToast();
  useEffect(() => {
    toast({
      title: "Hii 👋, Ditin here ..",
      description:
        "This website is still under development. Please ignore any bugs you encounter. Thanks!",
      duration: 10000,
    });
  }, []);
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
