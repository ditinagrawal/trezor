"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full py-4 border-b fixed top-0 shadow backdrop-blur-md">
      <nav className="w-11/12 mx-auto flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold">Trezor</span>
        </div>
        <ul className="flex items-center gap-4">
          <li className="hidden sm:block">
            <Link href={"#pricing"}>Pricing</Link>
          </li>
          <li className="hidden sm:block">
            <Link href={"/auth/sign-in"}>Sign in</Link>
          </li>
          <li>
            <Button>Get Started</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
