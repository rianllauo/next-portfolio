import React from 'react'
import Image from 'next/image'
import {useTheme} from 'next-themes'

// image & icon
import github from '/public/icons/github.svg'
import githubDark from '/public/icons/github-dark.svg'
import instagram from '/public/icons/instagram.svg'
import instagramDark from '/public/icons/instagram-dark.svg'
import twitter from '/public/icons/twitter.svg'
import twitterDark from '/public/icons/twitter-dark.svg'
import anim from '/public/img/programing.svg'

const HeroSection = () => {
    const {theme, setTheme} = useTheme()

    return (
        <div id='home' className="pt-28 lg:mt-38 md:flex md:flex-col md:justify-center items-center " >
            <div className='flex flex-col items-center md:flex-row-reverse'>
                <div className='md:ml-8'>
                    <h1 className='text-3xl lg:text-4xl font-medium'>An Profesional<br/> Web Developer</h1>
                    <p className='mt-3 text-sm text-gray-600 dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='mt-7 mb-14'>
                        <a href="/contact" className='px-4 py-3 mr-2 font-semibold bg-indigo-500 text-white shadow-lg shadow-indigo-400 rounded-md text-sm hover:bg-indigo-800 hover:shadow-indigo-500 transition duration-300 dark:shadow-none'>Contact Me</a>
                        <a href="" className='px-4 py-3 font-semibold text-white rounded-md text-sm bg-violet-500 shadow-lg shadow-violet-300 hover:bg-violet-600 hover:shadow-violet-400 transition duration-300 dark:shadow-none'>Download CV</a>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-sm text-gray-500 mr-3 dark:text-gray-400'>Follow me on</p>
                        <div className='flex items-center justify-between'>
                            <a href="#" className='flex items-center p-2 mr-2 border border-gray-500 rounded-full'>
                                {
                                    theme === 'dark' 
                                    ?
                                    <Image src={githubDark} alt="github" width='16px' height='16px'/>
                                    :
                                    <Image src={github} alt="github" width='16px' height='16px'/>
                                }
                            </a>
                            <a href="#" className='flex items-center p-2 mr-2 border border-gray-500 rounded-full'>
                                {
                                    theme === 'dark'
                                    ?
                                    <Image src={instagramDark} alt="instagram" width='16px' height='16px'/>
                                    :
                                    <Image src={instagram} alt="instagram" width='16px' height='16px'/>
                                }
                            </a>
                            <a href="#" className='flex items-center p-2 mr-2 border border-gray-500 rounded-full'>
                                {
                                    theme === 'dark'
                                    ? 
                                    <Image src={twitterDark} alt="instagram" width='16px' height='16px'/>
                                    :
                                    <Image src={twitter} alt="instagram" width='16px' height='16px'/>
                                }
                            </a>
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <Image src={anim} alt="animation" width='600px' height='400px' />
                </div>
            </div>
            
        </div>
    )
}

export default HeroSection