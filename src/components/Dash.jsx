import { ArrowLeft, ChevronDown, ChevronLeft } from 'lucide-react';
import React, { useState } from 'react'


const Dash = () => {

    const [isOpen, setIsOpen] = useState('false');
    // const [selected, setSelected] = useState(defaultText);


    return (
        <>

            <div className='flex justify-between items-center bg-transparent'>
                <div className='flex flex-row justify-between items-center w-full '>
                    <div className="title flex items-center">
                        {/* <ChevronLeft
                            color='black'
                            className='bg-white rounded-2xl border-2 border-amber-300 ml-3'
                        /> */}
                        {/* CREATE BUTTON HERE */}
                        <h3
                            className='text-[28px]  font-medium'
                        >Dashboard</h3>
                    </div>

                    <div className="icons flex items-center">
                        <input
                            type="search"
                            placeholder='Search for anything...'
                            className='px-10 py-2 rounded-4xl mx-2 bg-white shadow-gray-400 shadow-sm' />

                        <button className='rounded-[50%] bg-white px-4 py-2 mx-2 text-white  shadow-gray-400 shadow-sm'>""</button>

                        <div className="profileView relative flex items-center bg-white  shadow-gray-400 shadow-sm rounded-4xl px-1 py-1">
                            <img
                                src='./src/assets/profileImg.png'
                                className='w-[30px] h-[30px] rounded-4xl'
                                alt="" />
                            <div className="name mx-1.5 mr-2">
                                <p className='text-[12px] pb-0'>Alex meian</p>
                                <p className='text-[8px] text-gray-400 pt-0 '>Product Manager</p>
                            </div>

                            <div>
                                <button
                                    className=' mx-1 pt-1'
                                    onClick={() => setIsOpen((prev) => !prev)}
                                >
                                    <ChevronDown />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Dash
