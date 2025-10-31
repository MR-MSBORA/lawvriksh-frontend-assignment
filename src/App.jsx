import { useState } from 'react';
import './App.css';
import {
  CirclePlus,
  LayoutGrid,
  BriefcaseBusiness,
  ListTodo,
  HelpCircle
} from "lucide-react";
import Button from './reusables/Button';
import Dash from './components/Dash';
import Overview from './components/Overview';
import ProjectDashboard from './reusables/ProjectDashboard';
import TaskWorkload from './components/TaskWorkload';

function App() {
  return (
    <div className="superContainer grid 
      grid-cols-1 lg:grid-cols-[20%_78%] 
      gap-3 min-h-screen bg-[#f5f1ed] p-3 sm:p-5 lg:p-8">

      {/* ===== LEFT SIDEBAR ===== */}
      <div className="leftContainer flex flex-col items-center lg:items-start p-4 lg:pl-10 bg-white rounded-2xl shadow-md">

        {/* Logo */}
        <div className="logo mb-5">
          <p className="text-xl font-bold text-orange-600">Promage</p>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col justify-between items-center lg:items-start w-full h-full">

          {/* Top Options */}
          <div className="w-full">
            {/* Create Button */}
            <div className="btn mb-3 flex justify-center lg:justify-start">
              <button
                className="flex items-center gap-2 w-fit bg-white text-orange-600 border border-orange-600 rounded-3xl px-4 py-2 text-[14px] hover:bg-orange-50 transition"
              >
                <CirclePlus size={20} />
                <p>Create new project</p>
              </button>
            </div>

            {/* Menu Buttons */}
            <div className="options flex flex-col items-center lg:items-start gap-3">
              <Button Icon={LayoutGrid} name="Dashboard" clicked={true} />
              <Button Icon={BriefcaseBusiness} name="Project" clicked={false} />
              <Button Icon={ListTodo} name="Task" clicked={false} />
            </div>
          </div>

          {/* Help Button (Sticky at bottom) */}
          <div className="mt-6 mb-2 flex justify-center w-full">
            <HelpCircle
              size={40}
              color="white"
              className="bg-orange-600 p-2 rounded-full hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      {/* ===== RIGHT MAIN AREA ===== */}
      <div className="rightContainer flex flex-col gap-3 py-3 bg-white rounded-2xl shadow-md">

        <div className="px-3">
          <Dash />
        </div>

        <hr className="border border-gray-200" />

        <div className="px-3">
          <Overview />
        </div>

        {/* Project Dashboard Section */}
        <div className="container flex flex-col lg:flex-row gap-3 px-3">
          <ProjectDashboard />

        </div>

        {/* Tasks & Workload Section */}
        <div className="container flex flex-col sm:flex-row gap-3 px-3 pb-3">
            <TaskWorkload/>
        </div>

      </div>
    </div>
  );
}

export default App;
