import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProjectsWorkload = () => {
  const [timeRange, setTimeRange] = useState('Last 3 months');

  const workloadData = [
    { name: 'Sam', tasks: 7 },
    { name: 'Meldy', tasks: 8 },
    { name: 'Ken', tasks: 2 },
    { name: 'Dmitry', tasks: 10 },
    { name: 'Vego', tasks: 8 },
    { name: 'Kadin', tasks: 2 },
    { name: 'Meim', tasks: 4 }
  ];

  const getBubbleSize = (taskCount) => {
    const baseSize = 25;
    const scale = taskCount * 3;
    return Math.min(baseSize + scale, 60);
  };

  return (
    <div className="p-2">
      <div className="topbar flex flex-col sm:flex-row justify-between items-start sm:items-center m-1 mb-3 font-medium gap-2">
        <p className="text-lg sm:text-xl font-semibold">Projects Workload</p>

        <button className="flex items-center rounded-full bg-white px-3 py-1 text-[12px] sm:text-[13px] shadow-gray-400 shadow-sm">
          {timeRange}
          <ChevronDown size={16} className="ml-1" />
        </button>
      </div>

      <div className="bg-white shadow-sm shadow-gray-400 px-3 py-2 rounded-2xl">
        <div className="flex items-end justify-around h-64 px-1 py-4">
          {workloadData.map((person, index) => {
            const taskCount = person.tasks;
            const bubbleSize = getBubbleSize(taskCount);
            const maxTasks = 10;
            const bottomPosition = (taskCount / maxTasks) * 50;

            return (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{ width: '13%' }}
              >
                <div
                  className="relative mb-3"
                  style={{
                    marginBottom: `${bottomPosition}px`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div
                    className={`rounded-full flex items-center justify-center font-semibold transition-all hover:scale-110 cursor-pointer ${
                      taskCount >= 8
                        ? 'bg-gray-900 text-white'
                        : 'bg-white border-2 border-gray-900 text-gray-900'
                    }`}
                    style={{
                      width: `${bubbleSize}px`,
                      height: `${bubbleSize}px`,
                      fontSize: taskCount >= 8 ? '11px' : '10px'
                    }}
                  >
                    {String(taskCount).padStart(2, '0')}
                  </div>

                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-200"
                    style={{
                      top: '100%',
                      height: `${bottomPosition + 15}px`
                    }}
                  />
                </div>

                <div className="text-[12px] sm:text-[10px] text-gray-700 font-medium mt-1">
                  {person.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsWorkload;
