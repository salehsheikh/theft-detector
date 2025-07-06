"use client"
import AlertFilter from '@/app/components/alerthistory/AlertFilters'
import CtaModal from '@/app/components/modals/CtaModal';
import DataTable from '@/app/shared/DataTable';
import React, { useState } from 'react'

const Page = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleExportCSV = () => {
        if (!data || !data.length) return;

        const headers = Object.keys(data[0]);
        const csvRows = [
            headers.join(","), // Header row
            ...data.map(row => headers.map(field => `"${row[field] ?? ""}"`).join(","))
        ];

        const csvContent = csvRows.join("\n");
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "alert-history.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const columns = [
        { header: "Date", accessorKey: "date", id: "date" },
        { header: "Alert Type", accessorKey: "alertType", id: "alertType" },
        { header: "Confidence", accessorKey: "confidence", id: "confidence" },
        { header: "Camera", accessorKey: "camera", id: "camera" },
        { header: "Location", accessorKey: "location", id: "location" },
        {
            header: "Status",
            accessorKey: "status",
            id: "status",
            cell: (info) => {
                const status = info.getValue();

                // Conditional background color based on status
                const statusColor = {
                    Resolved: "bg-[#B1ED00]",
                    "In Progress": "bg-[#FF9F1A]",
                    Unresolved: "bg-[#FF6666]",
                }[status] || "bg-gray-400"; // Default fallback color

                return (
                    <div className="flex items-center gap-2">
                        <div className={`w-[11px] h-[11px] rounded-full ${statusColor}`}></div>
                        <span className="capitalize">{status}</span>
                    </div>
                );
            },
        }
        ,
        {
            header: "Action",
            accessorKey: "action",
            id: "action",
            cell: ({ row }) => (
                <div
                    className="cursor-pointer flex items-center justify-center rounded-[10px] w-22 h-10 py-3.5 px-[31px] bg-white/40 text-[#0D0D0D] font-medium text-base"
                    onClick={() => {
                        setSelectedUser(row.original);
                        setIsModalOpen(true);
                    }}
                >
                    CTA
                </div>
            ),
        },
    ];

    const data = [
        {
            date: "25 jan",
            alertType: "Stealing bag",
            confidence: "85%",
            camera: "CAM 02",
            location: "Lobby",
            status: "In Progress",
            action: "View",
        },
        {
            date: "25 jan",
            alertType: "Stealing bag",
            confidence: "85%",
            camera: "CAM 02",
            location: "Lobby",
            status: "In Progress",
            action: "View",
        },
        {
            date: "25 jan",
            alertType: "Stealing bag",
            confidence: "85%",
            camera: "CAM 02",
            location: "Lobby",
            status: "Resolved",
            action: "View",
        },
        {
            date: "25 jan",
            alertType: "Stealing bag",
            confidence: "85%",
            camera: "CAM 02",
            location: "Lobby",
            status: "In Progress",
            action: "View",
        },
        {
            date: "25 jan",
            alertType: "Stealing bag",
            confidence: "85%",
            camera: "CAM 02",
            location: "Lobby",
            status: "Unresolved",
            action: "CTA",
        },
    ];
    return (
        <>
            <div className='md:mx-[63px] mx-4 space-y-7.5 pb-2'>
                <div className='flex justify-between'>
                    <div>

                        <p className="text-[20px] font-semibold text-white pb-2.5 z-50">Alert History</p>
                        <p className="pb-3.5 text-white text-sm font-medium z-50">
                            Review and analyze past security incidents
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button
                            onClick={handleExportCSV}
                            className='bg-[#B1ED00] cursor-pointer rounded-[10px] w-[114px] h-10 text-black text-xs'>Export CSV</button>
                    </div>
                </div>

                <div>
                    <AlertFilter />
                </div>
                <div>
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
            {isModalOpen && (
                <CtaModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    user={selectedUser}
                />
            )}
        </>
    )
}

export default Page
