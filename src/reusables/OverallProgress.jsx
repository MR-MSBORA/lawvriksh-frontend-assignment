import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const OverallProgress = () => {
  const [filter, setFilter] = useState('All');

  const stats = [
    { label: 'Total projects', value: 95, color: 'text-gray-800' },
    { label: 'Completed', value: 26, color: 'text-green-600' },
    { label: 'Delayed', value: 35, color: 'text-yellow-500' },
    { label: 'On going', value: 35, color: 'text-orange-500' }
  ];

  return (
    <div className="p-2">
      {/* ===== TOPBAR ===== */}
      <div className="topbar flex flex-col sm:flex-row justify-between items-start sm:items-center m-1 mb-3 font-medium gap-2">
        <p className="text-lg sm:text-xl font-semibold">Overall Progress</p>

        <button className="flex items-center rounded-full bg-white px-3 py-1 text-[12px] sm:text-[13px] shadow-gray-400 shadow-sm">
          {filter}
          <ChevronDown size={16} className="ml-1" />
        </button>
      </div>

      {/* ===== GAUGE CHART ===== */}
      <div className="bg-white shadow-sm shadow-gray-400 px-3 py-2 rounded-2xl">
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-xs">
            <svg viewBox="0 0 200 120" className="w-full">
              {/* Background arc */}
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Green section */}
              <path
                d="M 20 100 A 80 80 0 0 1 100 20"
                fill="none"
                stroke="#22c55e"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Yellow section */}
              <path
                d="M 100 20 A 80 80 0 0 1 154 36"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Orange section */}
              <path
                d="M 154 36 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#f97316"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Scale markers */}
              <text x="15" y="110" className="text-xs fill-gray-500" fontSize="10">
                0
              </text>
              <text x="172" y="110" className="text-xs fill-gray-500" fontSize="10">
                100
              </text>
            </svg>

            {/* Center percentage */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gray-800">72%</div>
              <div className="text-[12px] sm:text-[13px] text-gray-400 mt-1">Completed</div>
            </div>
          </div>
        </div>

        {/* ===== STATS GRID ===== */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-50 rounded-xl"
            >
              <div className={`text-2xl sm:text-xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-[12px] sm:text-[10px] text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverallProgress;
