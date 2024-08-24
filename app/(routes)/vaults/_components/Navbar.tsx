"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: user } = useSession();
  return (
    <nav className="p-4 border-b">
      <div className="flex items-center justify-between">
        <div className="md:block hidden">
          <h1 className="text-2xl font-semibold">
            Welcome, {user?.user?.name}
          </h1>
        </div>
        <div className="block md:hidden">
          <Link href={"/create"}>
            <Button className="text-md" variant={"secondary"}>
              Create new vault
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href={"/create"} className="md:block hidden">
            <Button className="text-md" variant={"link"}>
              Create new vault
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user?.user?.image!} />
                <AvatarFallback>🧑🏻</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-2">
              <Link href={"/vaults/profile"}>
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => signOut({ callbackUrl: "/auth/sign-in" })}
              >
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
