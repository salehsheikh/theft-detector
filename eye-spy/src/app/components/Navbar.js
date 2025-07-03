"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Dashboard", "Users", "Alert", "History", "Profile & Setting"];

  return (
    <nav className="w-full px-4 py-5 bg-transparent">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* 🔵 Logo */}
        <div className="shrink-0">
          <Image src="/images/logo.svg" alt="logo" width={114} height={66} />
        </div>

        {/* 🔔 Notification + 🍔 Menu for < md */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Notification */}
          <div className="relative">
            <Icon icon="mdi:bell-outline" className="text-white text-2xl" />
            <span className="absolute -top-1 -right-1 bg-[color:var(--color-red)] text-[#0D0D0D] text-[10px] font-medium rounded-full size-[15px] flex items-center justify-center">
              3
            </span>
          </div>

          {/* Hamburger Menu */}
          <Icon
            icon={isOpen ? "mdi:close" : "mdi:menu"}
            className="text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* 🔷 Desktop Navbar Center */}
        <div className="hidden md:flex bg-[color:var(--color-darkest)] text-white xl:max-w-[897px] lg:max-w-[697px] md:max-w-[497px] h-[69px] rounded-[10px] w-full mx-4 items-center justify-between px-8">
          {navItems.map((item, index) => (
            <span key={index} className="text-sm font-medium cursor-pointer whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>

        {/* 🔔 Notification on md+ */}
        <div className="hidden md:block relative ml-4">
          <Icon icon="mdi:bell-outline" className="text-white text-2xl" />
          <span className="absolute -top-1 -right-1 bg-[color:var(--color-red)] text-[#0D0D0D] text-[10px] font-medium rounded-full size-[15px] flex items-center justify-center">
            3
          </span>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mt-4 md:hidden bg-[color:var(--color-darkest)] rounded-[10px] p-4 text-white space-y-3">
          {navItems.map((item, index) => (
            <span key={index} className="block text-sm font-medium cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
