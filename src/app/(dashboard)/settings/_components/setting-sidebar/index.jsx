"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Services from "./services";

const menuLinks = [
  { label: "My Profile", href: "/settings" },
  { label: "My Team", href: "/settings/team" },
  { label: "My Password", href: "/settings/password" },
];
const SettingSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bg-white w-[200px] h-[100vh] top-0 p-1 text-sm">
      <span className="font-semibold">Settings</span>
      <div className="flex flex-col gap-3 mt-4">
        <div className="space-y-3 ml-1">
          <div>Business Hours</div>
          <Services />
        </div>
        <div className="space-y-1">
          <div className="text-grey font-semibold text-xs ml-1">Manage</div>
          <div className="flex flex-col gap-1">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg hover:bg-gray-100 font-normal p-1",
                  pathname === link.href && "bg-gray-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingSidebar;
