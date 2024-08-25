"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";
import { useState } from "react";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Pricing from "./_components/Pricing";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <main className="h-full">
      <Navbar />
      <Hero />
      <Pricing />
      <Footer />
      {isVisible && (
        <Alert className="fixed bottom-10 w-1/3 right-5">
          <CodeXml className="h-4 w-4" />
          <AlertTitle>Hii 👋 &nbsp; Ditin here..</AlertTitle>
          <AlertDescription>
            This website is still under development. Please ignore any bugs you
            encounter. Thanks!
          </AlertDescription>
          <Button
            variant={"link"}
            className="text-rose-900"
            onClick={() => setIsVisible(false)}
          >
            Dismiss
          </Button>
        </Alert>
      )}
    </main>
  );
};

export default HomePage;
