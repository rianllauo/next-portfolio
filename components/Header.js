import React, { useState } from 'react'
import Image from 'next/image'
import iconMenu from '/public/icons/icon-menu.svg'
import iconClose from '/public/icons/icon-close.svg'

const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <header className='w-full px-6 py-4 bg-white/[.80] drop-shadow-sm fixed top-0 z-50' >
        <div className='md:max-w-screen-md lg:max-w-screen-lg mx-auto flex items-center justify-between'>
            <div>
                <a href="#" className='text-heebo text-xl font-semibold'>
                    Rianlauo
                </a>
            </div>

            <div className='flex items-center justify-between'>

                <div className='md:flex md:flex-row-reverse md:items-center'>
                    <div className='mr-2'>
                        <button className='px-3 py-2 text-xs font-semibold rounded-md bg-indigo-500 text-white hover:bg-indigo-800 transition duration-300'>Contact Me</button>
                    </div>

                    <div className='hidden md:block'>
                        <div className='text-sm flex items-center'> 
                            <a href="#" className='mr-4 font-semibold text-indigo-500'>Home</a>
                            <a href="#" className='mr-4 font-semibold text-gray-600 hover:text-indigo-500 transition duration-300'>About</a>
                            <a href="#" className='mr-4 font-semibold text-gray-600 hover:text-indigo-500 transition duration-300'>portfolio</a>
                            <a href="#" className='mr-4 font-semibold text-gray-600 hover:text-indigo-500 transition duration-300'>Project</a>
                        </div>
                    </div>        
                </div>
                
                
                <div>
                    {
                        isNavExpanded ? 
                        <button  
                        className='flex items-center md:hidden'
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}>
                            <Image src={iconMenu} alt="menu" width="36px" height="36px" />
                        </button>
                        :

                        <button  
                        className='flex items-center md:hidden'
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}>
                            <Image src={iconClose} alt="menu" width="36px" height="36px" />
                        </button>
                    }
                    
                </div>
  
                <div className={`${isNavExpanded ? "hidden" : "block"} md:hidden absolute w-full top-16 left-0 h-80 flex flex-col items-center bg-white/[.95] drop-shadow-sm`}>
                    <div className='w-full h-full flex flex-col font-semibold items-center justify-evenly text-gray-600 transition duration-300'>
                        <a href="#" className=''>Home</a>
                        <a href="#" className=''>About</a>
                        <a href="#" className=''>portfolio</a>
                        <a href="#" className=''>Project</a>
                    </div> 
                </div>
            </div>

            
        </div>
        
    </header>
  )
}

export default Header

// <div className='md:hidden'>
{/* <Menu>
<Menu.Button className='flex items-center justify-center'>
        <Image src={iconMenu} alt="menu" width="28px" height="28px" />
</Menu.Button>
<Menu.Items className='absolute top-0 left-0 flex flex-col items-center justify-start h-screen w-3/4 bg-slate-500'>
        <Menu.Item>
        {({ active }) => (
            <a
            className={`${active && 'bg-blue-500'}`}
            href="#home">
            Account settings
            </a>
        )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
            <a
            className={`${active && 'bg-blue-500'}`}
            href="#about">
            Documentation
            </a>
        )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
            <a
            className={`${active && 'bg-blue-500'}`}
            href="#about1">
            Documentation
            </a>
        )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
            <a
            className={`${active && 'bg-blue-500'}`}
            href="#about2">
            Documentation
            </a>
        )}
        </Menu.Item>
</Menu.Items>                    
</Menu> */}