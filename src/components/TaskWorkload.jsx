import React from 'react'
import TodayTask from './TodayTask'
import ProjectsWorkload from './ProjectsWorkload'

const TaskWorkload = () => {
  return (
    <>
    <div className='flex justify-between px-3'>

        <div>
            <TodayTask/>
        </div>

        <div>
            <ProjectsWorkload/>
        </div>
    </div>
    </>
  )
}

export default TaskWorkload

