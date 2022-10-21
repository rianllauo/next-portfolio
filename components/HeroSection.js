import React from 'react'
import Image from 'next/image'

// icon
import github from '/public/img/github.png'
import instagram from '/public/img/instagram.png'
import twitter from '/public/img/twitter.png'

const HeroSection = () => {
    return (
        <div className="mt-28 md:mt-32 lg:mt-40 md:flex md:flex-col md:justify-center items-center" >
            <div className='text-heebo md:text-center '>
                <h3 className='text-xs lg:text-sm text-indigo-500 font-extrabold tracking-wider'>WELCOME TO MY WEBSITE</h3>
                <h1 className='md:hidden text-3xl  mt-2 font-bold leading-none'>{`Hi, I'am Rianlauo`} <br/> <span className='text-indigo-500'>Web Developer</span></h1>
                <h1 className='hidden md:block lg:text-5xl text-3xl mt-2 font-bold leading-none'>{`Hi, I'am Rianlauo`}<span className='text-indigo-500'> Web Developer</span></h1>
                <p className='md:max-w-[80%] md:mx-auto max-w-full text-sm lg:text-base mt-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <div className='mt-5'>
                <a href="" className='px-4 py-3 mr-2 font-semibold bg-indigo-500 text-white rounded-md text-sm'>Contact Me</a>
                <a href="" className='px-4 py-3 font-semibold text-indigo-900 rounded-md text-sm bg-indigo-200'>Download CV</a>
            </div>
            <div className='mt-6 w-24 mx-auto flex items-center justify-around'>
                <a href="#" >
                    <Image src={github} alt="github" width='24px' height='24px' />
                </a>
                <a href="#">
                    <Image src={instagram} alt="github" width='24px' height='24px' />
                </a>
                <a href="">
                    <Image src={twitter} alt="github" width='24px' height='24px' />
                </a>
            </div>
        </div>
    )
}

export default HeroSection