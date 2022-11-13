import React, { useState } from 'react'
import {useTheme} from 'next-themes'
import Image from 'next/image'

// icons
import iconMenu from '/public/icons/icon-menu.svg'
import iconMenuDark from '/public/icons/icon-menu-dark.svg'
import iconClose from '/public/icons/icon-close.svg'
import iconCloseDark from '/public/icons/icon-close-dark.svg'

import light from '/public/icons/sun.svg'
import dark from '/public/icons/moon.svg'

const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const {theme, setTheme} = useTheme()


  return (
    <header className='w-full px-6 py-4 bg-white/[.80] backdrop-blur-sm drop-shadow-sm fixed top-0 z-20 dark:bg-slate-900/[.80] transition duration-300' >
        <div className='md:max-w-screen-md lg:max-w-screen-lg mx-auto flex items-center justify-between'>
            <div>
                <a href="#" className='text-heebo text-xl font-semibold'>
                    Rianlauo
                </a>
            </div>

            <div className='flex items-center justify-between'>

                <div className='md:flex md:flex-row-reverse md:items-center'>
                    <div className='mr-2 flex items-center'>
                        <a href='#contact' className='px-3 py-2 text-xs font-semibold rounded-md bg-indigo-500 text-white hover:bg-indigo-800 transition duration-300'>Contact Me</a>
                        <button className='flex items-center ml-3' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {
                            theme === 'dark' ? 
                            <Image src={dark} alt='img' width="28px" height='28px' />
                            : 
                            <Image src={light} alt='img' width="28px" height='28px' />
                        }
                        </button>   
                    </div>
                    
                    {/* desktop navbar */}
                    <div className='hidden md:block'>
                        <div className='text-sm flex items-center'> 
                            <a href="#home" className='mr-4 font-semibold text-indigo-500'>Home</a>
                            <a href="#about" className='mr-4 font-semibold text-gray-600 hover:text-indigo-500 transition duration-300'>About</a>
                            <a href="#portfolio" className='mr-4 font-semibold text-gray-600 hover:text-indigo-500 transition duration-300'>portfolio</a>
                            <a href="#" className='mr-4 font-semibold text-gray-600 hover:text-indigo-500 transition duration-300'>Project</a>
                        </div>
                        
                    </div>     
                   
                </div>
                
                
                <div>
                {/* mobile navbar */}

                    {
                        isNavExpanded ? 
                        <button  
                        className='flex items-center md:hidden'
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}>
                            {
                            theme === 'dark' ? 
                            <Image src={iconCloseDark} alt='menu' width="36px" height='36px' />
                            : 
                            <Image src={iconClose} alt="menu" width="36px" height="36px" />
                            }
                            
                        </button>
                        :

                        <button  
                        className='flex items-center md:hidden'
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}>
                            {
                            theme === 'dark' ? 
                            <Image src={iconMenuDark} alt='menu' width="36px" height='36px' />
                            : 
                            <Image src={iconMenu} alt="menu" width="36px" height="36px" />
                            }
                        </button>
                    }
                    
                </div>
                
                <div className={`${isNavExpanded ? "block" : "hidden"} md:hidden absolute w-full top-[68px] left-0 h-80 flex flex-col items-center backdrop-blur-sm bg-white/[.80]  dark:bg-slate-900/[.80]`}>
                    <div className='w-full h-full  flex flex-col font-semibold items-center justify-evenly text-gray-600 dark:text-gray-300 transition duration-300'>
                        <a href="#home" className='' onClick={() => setIsNavExpanded(false)}>Home</a>
                        <a href="#about" className='' onClick={() => setIsNavExpanded(false)}>About</a>
                        <a href="#portfolio" className='' onClick={() => setIsNavExpanded(false)}>portfolio</a>
                        <a href="#" className='' onClick={() => setIsNavExpanded(false)}>Project</a>
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