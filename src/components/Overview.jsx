// import React from 'react'
// import { ArrowUp, ArrowDown, BarChart3, Briefcase, Clock, User, ChevronDown } from 'lucide-react';

// const Overview = () => {
//     return (
//         <div>

//             <div className="topbar flex justify-between m-1 mb-1.5  font-medium">
//                 <p >Overview</p>

//                 <button className='flex rounded-4xl bg-white px-4 py-1 text-[12px]   shadow-gray-400 shadow-sm'>
//                     Last 30 days 
//                     <ChevronDown 
//                     size={20}
//                     className=' mx-1'/>
//                 </button>
//             </div>

//             <div className="data grid grid-cols-[23%_23%_23%_23%] gap-3 justify-around">


//                 {/* TOTAL REVENUE */}
//                 <div className="container  shadow-sm shadow-gray-500 px-1.5 rounded-2xl">

//                     <div>
//                         <BarChart3
//                             size={40}
//                             className="rounded-4xl my-4 bg-purple-300 p-1.5"
//                             color='white'
//                         />
//                         <p className='text-[15px] text-gray-500'>
//                             Total Revenue
//                         </p>
//                     </div>

//                     <div >
//                         <p className='text-2xl font-medium '>
//                             $53,00,989
//                         </p>
//                         <div>
//                             <p className='text-[12px] flex my-2'>
//                                 <ArrowUp size={20} className="text-green-600 rotate-45" />
//                                 {/* <ArrowDown size={20} className="text-red-600" /> */}

//                                 12% increase from last month
//                             </p>
//                         </div>
//                     </div>
//                 </div>


//                 {/* PROJECT */}
//                 <div className="container shadow-sm shadow-gray-500  px-1.5 rounded-2xl">

//                     <div>
//                         <Briefcase
//                             size={40}
//                             className={` rounded-4xl my-4 bg-orange-300 p-1.5`}
//                             color='white'
//                         />
//                         <p className='text-[15px] text-gray-500'>
//                             Project
//                         </p>
//                     </div>

//                     <div >
//                         <p className='text-[14px] font-medium '>
//                             <span className='text-2xl mr-[5px]'>95</span>/100
//                         </p>
//                         <div>
//                             <p className='text-[12px] flex my-2'>
//                                 <ArrowDown size={20} className="text-red-600 -rotate-45" />
//                                 {/* <ArrowDown size={20} className="text-red-600" /> */}

//                                 10% decrease from last month
//                             </p>
//                         </div>
//                     </div>
//                 </div>


//                 {/* TIME SPENT */}
//                 <div className="container shadow-sm shadow-gray-500  px-1.5 rounded-2xl">

//                     <div>
//                         <Clock
//                             size={40}
//                             className={` rounded-4xl  my-4 bg-blue-300 p-1.5`}
//                             color='white'
//                         />
//                         <p className='text-[15px] text-gray-500'>
//                             Time Spent
//                         </p>
//                     </div>

//                     <div >
//                         <p className='text-[14px] font-medium '>
//                             <span className='text-2xl mr-[5px]'>1022</span>/100
//                         </p>
//                         <div>
//                             <p className='text-[12px] flex my-2'>
//                                 <ArrowUp size={20} className="text-green-600 rotate-45" />
//                                 {/* <ArrowDown size={20} className="text-red-600" /> */}

//                                 8% increase from last month
//                             </p>
//                         </div>
//                     </div>
//                 </div>


//                 {/* RESOURCES */}
//                 <div className="container shadow-sm shadow-gray-500 px-1.5 rounded-2xl">

//                     <div>
//                         <User
//                             size={40}
//                             className="rounded-4xl my-4 bg-yellow-300 p-1.5"
//                             color='white'
//                         />
//                         <p className='text-[15px] text-gray-500'>
//                             Resources
//                         </p>
//                     </div>

//                     <div >
//                         <p className='text-[14px] font-medium '>
//                             <span className='text-2xl mr-[5px]'>101/</span>120
//                         </p>
//                         <div>
//                             <p className='text-[12px] flex my-2'>
//                                 <ArrowUp size={20} className="text-green-600 rotate-45" />
//                                 {/* <ArrowDown size={20} className="text-red-600" /> */}

//                                 2% increase from last month
//                             </p>
//                         </div>
//                     </div>
//                 </div>











//             </div>
//         </div>
//     )
// }

// export default Overview



import React from 'react'
import {
  ArrowUp,
  ArrowDown,
  BarChart3,
  Briefcase,
  Clock,
  User,
  ChevronDown
} from 'lucide-react';

const Overview = () => {
  return (
    <div className="p-2">

      {/* ===== TOPBAR ===== */}
      <div className="topbar flex flex-col sm:flex-row justify-between items-start sm:items-center m-1 mb-3 font-medium gap-2">
        <p className="text-lg sm:text-xl font-semibold">Overview</p>

        <button className="flex items-center rounded-full bg-white px-3 py-1 text-[12px] sm:text-[13px] shadow-gray-400 shadow-sm">
          Last 30 days
          <ChevronDown size={18} className="ml-1" />
        </button>
      </div>

      {/* ===== DATA CARDS ===== */}
      <div
        className="data grid 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-3 justify-around"
      >
        {/* ==== CARD COMPONENT ==== */}
        <div className="container bg-white shadow-sm shadow-gray-400 px-3 py-2 rounded-2xl flex flex-col justify-between">
          <div>
            <BarChart3
              size={36}
              className="rounded-2xl my-3 bg-purple-400 p-1.5 text-white"
            />
            <p className="text-[14px] sm:text-[15px] text-gray-500">
              Total Revenue
            </p>
          </div>

          <div>
            <p className="text-xl sm:text-2xl font-semibold">$53,00,989</p>
            <p className="text-[12px] flex items-center my-2">
              <ArrowUp size={16} className="text-green-600 rotate-45 mr-1" />
              12% increase from last month
            </p>
          </div>
        </div>

        {/* ==== PROJECT ==== */}
        <div className="container bg-white shadow-sm shadow-gray-400 px-3 py-2 rounded-2xl flex flex-col justify-between">
          <div>
            <Briefcase
              size={36}
              className="rounded-2xl my-3 bg-orange-400 p-1.5 text-white"
            />
            <p className="text-[14px] sm:text-[15px] text-gray-500">Project</p>
          </div>

          <div>
            <p className="text-[14px] font-medium">
              <span className="text-xl sm:text-2xl mr-1">95</span>/100
            </p>
            <p className="text-[12px] flex items-center my-2">
              <ArrowDown size={16} className="text-red-600 -rotate-45 mr-1" />
              10% decrease from last month
            </p>
          </div>
        </div>

        {/* ==== TIME SPENT ==== */}
        <div className="container bg-white shadow-sm shadow-gray-400 px-3 py-2 rounded-2xl flex flex-col justify-between">
          <div>
            <Clock
              size={36}
              className="rounded-2xl my-3 bg-blue-400 p-1.5 text-white"
            />
            <p className="text-[14px] sm:text-[15px] text-gray-500">
              Time Spent
            </p>
          </div>

          <div>
            <p className="text-[14px] font-medium">
              <span className="text-xl sm:text-2xl mr-1">1022</span>/100
            </p>
            <p className="text-[12px] flex items-center my-2">
              <ArrowUp size={16} className="text-green-600 rotate-45 mr-1" />
              8% increase from last month
            </p>
          </div>
        </div>

        {/* ==== RESOURCES ==== */}
        <div className="container bg-white shadow-sm shadow-gray-400 px-3 py-2 rounded-2xl flex flex-col justify-between">
          <div>
            <User
              size={36}
              className="rounded-2xl my-3 bg-yellow-400 p-1.5 text-white"
            />
            <p className="text-[14px] sm:text-[15px] text-gray-500">
              Resources
            </p>
          </div>

          <div>
            <p className="text-[14px] font-medium">
              <span className="text-xl sm:text-2xl mr-1">101</span>/120
            </p>
            <p className="text-[12px] flex items-center my-2">
              <ArrowUp size={16} className="text-green-600 rotate-45 mr-1" />
              2% increase from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
