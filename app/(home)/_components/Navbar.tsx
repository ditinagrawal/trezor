"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full py-4 fixed top-0 shadow backdrop-blur-md">
      <nav className="w-11/12 mx-auto flex items-center justify-between">
        <div>
          <Link href={"/"} className="text-2xl font-bold">
            Trezor
          </Link>
        </div>
        <ul className="flex items-center gap-4">
          <li className="hidden sm:block">
            <Link href={"#pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/auth/sign-in"}>
              <Button>Get Started</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
