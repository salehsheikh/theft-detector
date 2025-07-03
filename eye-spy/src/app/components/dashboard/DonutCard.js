"use client";

import React from "react";
import dynamic from "next/dynamic";


const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DonutCard = () => {
  const chartOptions = {
    chart: {
      type: "donut",
      background: "transparent",
       animations: {
        enabled: false,
      },
    },
    labels: ["Reviewed", "Unreviewed"],
    colors: ["#B1ED00", "#FF9F1A"],
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
     states: {
      hover: {
        filter: {
          type: "none", 
        },
      },
      active: {
        filter: {
          type: "none",
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "45%",
          labels: {
            show: false,
            total: {
              show: false,
              
              fontSize: "16px",
              color: "#fff",
            
            },
          },
        },
      },
    },
  };

  const series = [65, 35]; // Reviewed, Unreviewed

  return (
    <div className="bg-[color:var(--color-darkest)] card-shadow w-full h-[304px] rounded-[20px] p-6 flex flex-col justify-between text-white">
      {/* Top Label */}
      <div className="flex justify-start text-base font-semibold">Review Status</div>

      {/* Chart */}
      <div className="flex-1 flex justify-center items-center">
        <Chart options={chartOptions} series={series} type="donut" width="183" height="183" />
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-[13px] h-[13px] rounded-full bg-[#B1ED00]"></div>
          <span className="text-sm">Reviewed:8</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[13px] h-[13px] rounded-full bg-[#FF9F1A]"></div>
          <span className="text-sm">Unreviewed:4</span>
        </div>
      </div>
    </div>
  );
};

export default DonutCard;
