import React from 'react';
import OverallProgress from './OverallProgress';
import ProjectTable from './ProjectTable';


const ProjectDashboard = () => {
  return (
   <>
   <div className='flex w-screen'>
     <div>
        <ProjectTable/>
     </div>

     <div>
        <OverallProgress/>
     </div>

   </div>
   </>
  );
};

export default ProjectDashboard;
