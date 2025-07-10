"use client";

import React, { useState } from "react";
import UserWrapper from "@/app/components/users/UserCard";
import DataTable from "@/app/shared/DataTable";
import ViewModal from "@/app/components/modals/ViewModal";

const Page = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { header: "Name", accessorKey: "name", id: "name" },
    { header: "Email", accessorKey: "email", id: "email" },
    {
      header: "Role",
      accessorKey: "role",
      id: "role",
      cell: (info) => (
        <div className="flex items-center gap-2">
          <div className="w-[11px] h-[11px] rounded-full bg-[#B1ED00]"></div>
          <span>{info.getValue()}</span>
        </div>
      ),
    },
    { header: "Joining Date", accessorKey: "joiningDate", id: "joiningDate" },
    {
      header: "Action",
      accessorKey: "action",
      id: "action",
      cell: ({ row }) => (
        <span
          className="text-[#B1ED00] underline cursor-pointer"
          onClick={() => {
            setSelectedUser(row.original);
            setIsModalOpen(true);
          }}
        >
          View
        </span>
      ),
    },
  ];

  const data = [
    {
      name: "Emma Watson",
      email: "emmawatson@example.com",
      role: "Monitoring Staff",
      joiningDate: "May 13, 2022",
      action: "View",
    },
    {
      name: "John Doe",
      email: "johndoe@example.com",
      role: "Analyst",
      joiningDate: "June 10, 2021",
      action: "View",
    },
    {
      name: "Emma Watson",
      email: "emmawatson@example.com",
      role: "Monitoring Staff",
      joiningDate: "May 13, 2022",
      action: "View",
    },
    {
      name: "John Doe",
      email: "johndoe@example.com",
      role: "Analyst",
      joiningDate: "June 10, 2021",
      action: "View",
    },
    {
      name: "Emma Watson",
      email: "emmawatson@example.com",
      role: "Monitoring Staff",
      joiningDate: "May 13, 2022",
      action: "View",
    },
  ];

  return (
    <div className="container px-4 pb-2">
      <div>
        <p className="text-[20px] font-semibold text-white pb-2.5 z-50">User Management</p>
        <p className="pb-3.5 text-white text-sm font-medium z-50">
          Here’s how your user management is evolving
        </p>
      </div>

      <div className="relative space-y-7.5">
        <UserWrapper />
        <div>
          <p className="text-2xl leading-5 text-white font-semibold pb-5.5">Users</p>
          <DataTable columns={columns} data={data} highlightHeader={true} />
        </div>

        {isModalOpen && (
          <div >
            <ViewModal user={selectedUser} onClose={() => setIsModalOpen(false)}
              closeViewModal={() => setIsModalOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
