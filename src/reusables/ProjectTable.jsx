import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProjectTable = () => {
  const [projectFilter, setProjectFilter] = useState('Project');
  const [managerFilter, setManagerFilter] = useState('Project manager');
  const [statusFilter, setStatusFilter] = useState('Status');

  const projects = [
    {
      name: 'Nelsa web development',
      manager: 'Om prakash sao',
      dueDate: 'May 25, 2023',
      status: 'Completed',
      progress: 100
    },
    {
      name: 'Datascale AI app',
      manager: 'Nellsan mando',
      dueDate: 'Jun 20, 2023',
      status: 'Delayed',
      progress: 35
    },
    {
      name: 'Media channel branding',
      manager: 'Tiruvelly priya',
      dueDate: 'July 13, 2023',
      status: 'At risk',
      progress: 68
    },
    {
      name: 'Corlax iOS app developement',
      manager: 'Matte hannery',
      dueDate: 'Dec 20, 2023',
      status: 'Completed',
      progress: 100
    },
    {
      name: 'Website builder development',
      manager: 'Sukumar rao',
      dueDate: 'Mar 15, 2024',
      status: 'On going',
      progress: 50
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Delayed':
        return 'bg-yellow-100 text-yellow-700';
      case 'At risk':
        return 'bg-red-100 text-red-700';
      case 'On going':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getProgressColor = (progress) => {
    if (progress === 100) return '#22c55e';
    if (progress >= 50) return '#f97316';
    return '#ef4444';
  };

  return (
    <div className="p-2">
      {/* ===== TOPBAR ===== */}
      <div className="topbar flex flex-col sm:flex-row justify-between items-start sm:items-center m-1 mb-3 font-medium gap-2">
        <p className="text-lg sm:text-xl font-semibold">Project summary</p>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center rounded-full bg-white px-3 py-1 text-[12px] sm:text-[13px] shadow-gray-400 shadow-sm">
            {projectFilter}
            <ChevronDown size={16} className="ml-1" />
          </button>

          <button className="flex items-center rounded-full bg-white px-3 py-1 text-[12px] sm:text-[13px] shadow-gray-400 shadow-sm">
            {managerFilter}
            <ChevronDown size={16} className="ml-1" />
          </button>

          <button className="flex items-center rounded-full bg-white px-3 py-1 text-[12px] sm:text-[13px] shadow-gray-400 shadow-sm">
            {statusFilter}
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>

      {/* ===== TABLE ===== */}
      <div className="bg-white shadow-sm shadow-gray-400 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left py-2 px-4 text-[14px] sm:text-[12px] font-medium text-gray-600">
                  Name
                </th>
                <th className="text-left py-2 px-4 text-[14px] sm:text-[12px] font-medium text-gray-600">
                  Project manager
                </th>
                <th className="text-left py-2 px-4 text-[14px] sm:text-[12px] font-medium text-gray-600">
                  Due date
                </th>
                <th className="text-left py-2 px-4 text-[14px] sm:text-[12px] font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left py-2 px-4 text-[14px] sm:text-[12px] font-medium text-gray-600">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-2 px-4 text-[14px] sm:text-[12px] text-gray-800">
                    {project.name}
                  </td>
                  <td className="py-2 px-4 text-[14px] sm:text-[12px] text-gray-600">
                    {project.manager}
                  </td>
                  <td className="py-2 px-4 text-[14px] sm:text-[12px] text-gray-600">
                    {project.dueDate}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-medium ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-2">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="50%"
                            cy="50%"
                            r="40%"
                            stroke="#e5e7eb"
                            strokeWidth="3"
                            fill="none"
                          />
                          <circle
                            cx="50%"
                            cy="50%"
                            r="40%"
                            stroke={getProgressColor(project.progress)}
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray={`${(project.progress / 100) * 100} 100`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <span
                          className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-[11px] font-semibold"
                          style={{ color: getProgressColor(project.progress) }}
                        >
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
