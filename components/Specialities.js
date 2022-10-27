import React from 'react'
import Image from 'next/image'

// icon
import code from '/public/icons/code.svg'
import monitor from '/public/icons/monitor.svg'
import penTool from '/public/icons/pen-tool.svg'

const Specialities = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-14'>
        <h1 className='text-2xl '>Specialities</h1>
        <p className='text-sm text-gray-600 max-w-md text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>

        <div className='mt-10 grid grid-row-3 md:grid-cols-3 gap-3'>
            <div className='p-5 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-md'>
                <Image src={monitor} alt="monitor"  width="26px" height="26px"/>
                <h2 className='text-xl text-white mt-2'>Web Designer</h2>
                <p className='text-sm text-gray-300 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='p-5 bg-gray-100 rounded-md'>
                <Image src={code} alt="code"  width="26px" height="26px"/>
                <h2 className='text-xl mt-2'>Web Developer</h2>
                <p className='text-sm text-gray-600 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='p-5 bg-gray-100 rounded-md'>
                <Image src={penTool} alt="penTool"  width="26px" height="26px"/>
                <h2 className='text-xl mt-2'>UI & UX Design</h2>
                <p className='text-sm text-gray-600 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  )
}

export default Specialities