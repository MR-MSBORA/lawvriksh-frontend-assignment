import React, { useState } from 'react';

const TodayTask = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    { name: 'All', count: 10 },
    { name: 'Important', count: null },
    { name: 'Notes', count: 5 },
    { name: 'Links', count: 10 }
  ];

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Create a user flow of social application design',
      status: 'Approved',
      completed: true
    },
    {
      id: 2,
      title: 'Create a user flow of social application design',
      status: 'In review',
      completed: true
    },
    {
      id: 3,
      title: 'Landing page design for Fintech project of singapore',
      status: 'In review',
      completed: true
    },
    {
      id: 4,
      title: 'Interactive prototype for app screens of deltamine project',
      status: 'On going',
      completed: false
    },
    {
      id: 5,
      title: 'Interactive prototype for app screens of deltamine project',
      status: 'Approved',
      completed: true
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'In review':
        return 'bg-red-100 text-red-700';
      case 'On going':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-white shadow-sm shadow-gray-400 rounded-2xl p-5">
      <h2 className="text-xl font-semibold mb-4">Today task</h2>

      <div className="flex gap-6 border-b-2 border-gray-100 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`pb-3 relative font-medium text-[15px] whitespace-nowrap transition-all ${
              activeTab === tab.name
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="flex items-center gap-2">
              {tab.name}
              {tab.count !== null && (
                <span
                  className={`px-2 py-0.5 rounded-md text-[12px] font-medium ${
                    activeTab === tab.name
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </span>
            {activeTab === tab.name && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
            )}
          </button>
        ))}
      </div>

      <div className="space-y-1.5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 py-3 px-2.5 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="shrink-0">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="w-5 h-5 rounded-full border-2 border-orange-500 text-orange-500 focus:ring-0 focus:ring-offset-0 cursor-pointer appearance-none checked:bg-orange-500 checked:border-orange-500 relative
                checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-[11px] checked:after:font-bold checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[14px] text-gray-800 leading-snug">
                {task.title}
              </p>
            </div>

            <span
              className={`shrink-0 px-4 py-1.5 rounded-full text-[13px] font-medium ${getStatusColor(
                task.status
              )}`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayTask;
