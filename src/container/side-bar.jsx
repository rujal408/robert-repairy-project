"use client";

import { logoutUser } from "@/actions/auth";
import nav from "@/constant/nav";
import { CircleHelp, RefreshCcwDot, Unplug } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navFooter = [
  {
    id: 1,
    name: <div className="text-blue-500">Admin</div>,
    icon: (
      <div className="rounded-full h-3 w-3 bg-blue-500 text-white grid place-items-center">
        A
      </div>
    ),
  },
  {
    id: 2,
    name: <div>Help & Support</div>,
    icon: <CircleHelp height="23px" width="23px" />,
  },
  {
    id: 3,
    name: <div>Sign out</div>,
    icon: <Unplug height="23px" width="23px" />,
  },
];

const SideBarPanel = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = async (id) => {
    switch (id) {
      case 1:
        // code block
        break;
      case 2:
        // code block
        break;
      case 3: {
        await logoutUser();
        router.push("/");
        break;
      }
      default:
      // code block
    }
  };
  return (
    <div className="sticky w-[220px] p-2 h-[100vh] bg-white">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-3">
          <h1 className="font-bold text-2xl uppercase text-blue-600">
            Repairy
          </h1>
          <div className="relative bg-blue-600 text-white p-1 rounded flex items-center justify-center">
            <RefreshCcwDot
              height="20px"
              width="20px"
              className="absolute left-2"
            />
            <div className="text-center text-sm">Repairy</div>
          </div>
          <div className="space-y-1">
            {nav.map((n) => (
              <Link
                className={`flex gap-1 p-1 font-semibold text-sm rounded ${
                  pathname.includes(n.link) ? "bg-gray-100" : ""
                }`}
                key={n.title}
                href={n.link}
              >
                <n.icon height="20px" width="20px" />
                {n.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t-[1px] border-gray-300 pt-1 space-y-2 text-sm font-semibold">
          {navFooter.map((np) => (
            <div
              onClick={() => handleClick(np.id)}
              key={np.id}
              className="flex gap-1 cursor-pointer"
            >
              {np.icon}
              {np.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBarPanel;
