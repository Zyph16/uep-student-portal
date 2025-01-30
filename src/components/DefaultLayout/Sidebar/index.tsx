"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import ClickOutside from "@/components/DefaultLayout/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import { LuFolderInput } from "react-icons/lu";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineBook } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import { IoDocumentSharp } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "STUDENT PORTAL",
    menuItems: [
      {
        icon: <CgProfile />,
        label: "Home",
        route: "#",
      },
      {
        icon: <MdManageAccounts />,
        label: "Grades",
        route: "#",
      },
      {
        icon: <CiLogout />,
        label: "Logout",
        route: "/Signin",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed p-5 left-0 top-0 z-50 flex h-screen w-72 flex-col bg-yellow-500 text-white drop-shadow-lg shadow-lg shadow-blue-800 duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Sidebar Header */}
       

        {/* Sidebar Menu */}
        <nav className="px-4 mt-10">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-6">
              {/* Menu Group Title */}
              <h3 className="mb-10 text-[20px] font-semibold">{group.name}</h3>

              <ul>
                {group.menuItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    <Link
                      href={item.route}
                      className="flex text-[20px] items-center gap-3 rounded-lg px-4 py-3 hover:bg-yellow-600 transition"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
