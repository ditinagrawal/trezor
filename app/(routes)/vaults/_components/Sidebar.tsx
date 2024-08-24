"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { MdSpaceDashboard, MdSettings } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const iconMap = {
  MdSpaceDashboard,
  FaUserAlt,
  MdSettings,
  IoShieldCheckmark,
};

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="h-screen border-r">
      <div className="p-5">
        <div className="space-y-8">
          <Link href={"/"} className="text-4xl font-semibold">
            Trezor
          </Link>
          <div className="flex flex-col space-y-4">
            {sidebarLinks.map((link, index) => {
              // @ts-ignore
              const Icon = iconMap[link.icon];
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 p-3 rounded-md shadow hover:bg-neutral-100 transition-all ease-in-out",
                    pathname === link.href && "bg-neutral-100"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="fixed bottom-5 px-16 py-2 rounded-full bg-neutral-200 shadow cursor-pointer">
            free plan
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
