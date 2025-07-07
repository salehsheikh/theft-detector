"use client";
import React from "react";
import { Icon } from "@iconify/react";

const SecuritySection = () => {
  return (
    <div className="w-full bg-[#131313] rounded-[20px] p-6 text-white">
      {/* Top Right Title */}
      <div className="flex justify-start">
        <h2 className="text-sm font-semibold">Security Settings</h2>
      </div>

      {/* Input Groups */}
      <div className="flex flex-col sm:flex-row gap-6 pt-[25px]">
        {/* Change Password Group */}
        <div className="flex flex-col w-full">
          <label className="text-sm text-[#D7D7D7] mb-2">Change Password</label>
          <div className="flex items-center bg-[#B1ED00]/20 rounded-lg px-4 py-3">
            <Icon icon="solar:key-outline" width="16" height="16" className="text-white mr-2" />
            <input
              type="password"
              placeholder="Change Password"
              className="bg-transparent outline-none text-sm w-full placeholder-[#8F8F8F] text-white"
            />
          </div>
        </div>

        {/* Confirm Password Group */}
        <div className="flex flex-col w-full">
          <label className="text-sm text-[#D7D7D7] mb-2">Confirm Password</label>
          <div className="flex items-center bg-[#B1ED00]/20 rounded-lg px-4 py-3">
            <Icon icon="solar:key-outline" width="16" height="16" className="text-white mr-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-transparent outline-none text-sm w-full placeholder-[#8F8F8F] text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
