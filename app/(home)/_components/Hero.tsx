"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="space-y-24 py-32 sm:py-36 lg:py-40">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <Button variant={"outline"} size={"sm"} className="rounded-full">
          <span className="mr-3">🎉</span>
          <span className="hidden md:flex">Introducing&nbsp;</span> Trezor
        </Button>
        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          Preserve <span className="text-gradient_indigo-purple">Today</span>{" "}
          <br />
          <span className="font-extrabold">
            Discover{" "}
            <span className="text-gradient_indigo-purple">Tomorrow</span>
          </span>
        </h1>
        <p className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Capture memories and messages today, securely store them, and unveil
          them tomorrow for a future filled with nostalgia and discovery.
        </p>
        <div className="flex justify-center space-x-2 md:space-x-4">
          <Link
            href="#pricing"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "gap-2"
            )}
          >
            <span>Go Pricing</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={"/vaults"}
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              "px-5"
            )}
          >
            <p>
              <span className="hidden sm:inline-block">Get</span> Started for
              free
            </p>
          </Link>
        </div>
      </div>
      {/* Image */}
      <div className="container max-w-6xl">
        <div className="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="aspect-video overflow-hidden rounded-xl border md:rounded-lg">
            <Image
              className="size-full object-cover object-center dark:opacity-85 dark:invert"
              src="/cover.gif"
              alt="preview landing"
              width={2000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
