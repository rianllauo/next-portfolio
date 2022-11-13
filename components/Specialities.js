import React from 'react'
import Image from 'next/image'

// icon
import code from '/public/icons/code.svg'
import monitor from '/public/icons/monitor.svg'
import penTool from '/public/icons/pen-tool.svg'

const Specialities = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-14'>
        <h1 className='text-2xl font-medium lg:text-3xl mb-3'>Specialities</h1>
        <p className='text-xs lg:text-sm text-gray-600 dark:text-gray-400 max-w-md text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

        <div className='mt-10 grid grid-row-3 md:grid-cols-3 gap-4 md:gap-3'>
            <div className='p-6 bg-indigo-50 dark:bg-slate-800 dark:shadow-none rounded-md shadow-lg shadow-indigo-100'>
                <div className='p-2 w-fit flex items-center bg-indigo-500 rounded-md drop-shadow-md'>
                    <Image src={monitor} alt="monitor" width="22px" height="22px"/>
                </div>
                <h2 className='text-lg mt-3 lg:text-xl '>Web Designer</h2>
                <p className='text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='p-6 bg-indigo-50 dark:bg-slate-800 dark:shadow-none rounded-md shadow-lg shadow-indigo-100'>
                <div className='p-2 w-fit flex items-center bg-indigo-500 rounded-md drop-shadow-md'>
                    <Image src={code} alt="code" width="22px" height="22px"/>
                </div>
                <h2 className='text-lg mt-3 lg:text-xl'>Web Developer</h2>
                <p className='text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='p-6 bg-indigo-50 dark:bg-slate-800 dark:shadow-none rounded-md shadow-lg shadow-indigo-100'>
                <div className='p-2 w-fit flex items-center bg-indigo-500 rounded-md drop-shadow-md'>
                    <Image src={penTool} alt="penTool"  width="22px" height="22px"/>
                </div>
                <h2 className='text-lg mt-3 lg:text-xl'>UI & UX Design</h2>
                <p className='text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  )
}

export default Specialities