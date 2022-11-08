import React from 'react'

const Skills = () => {
  return (
    <div className='mt-16 grid grid-rows-1 md:grid-cols-2 md:gap-8 md:place-items-center'>

      <div className=''>
         <h2 className='text-indigo-500 font-medium'>My Skills</h2>
         <h1 className='text-2xl font-medium my-2 md:text-3xl'>All of My Best <br/>{`Working Skill's`}</h1>
         <p className='text-sm text-gray-500'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
      </div>

      <div className='w-full mt-6'>

         <div className='flex flex-col'>
            <div className='flex w-full justify-between'>
               <h1 className='text-base'>Website Developing</h1>
               <h1>80%</h1>
            </div>
            <div className='w-full h-2 rounded-xl bg-indigo-300 overflow-hidden mt-2'>
               <div className='w-[80%] h-full bg-indigo-600'></div>
            </div>
         </div>

         <div className='flex flex-col mt-4'>
            <div className='flex w-full justify-between'>
               <h1>Mobile Develop</h1>
               <h1>50%</h1>
            </div>
            <div className='w-full h-2 rounded-xl bg-indigo-300 overflow-hidden mt-2'>
               <div className='w-[50%] h-full bg-indigo-600'></div>
            </div>
         </div>

         <div className='flex flex-col mt-4'>   
            <div className='flex w-full justify-between'>
               <h1>UI & UX Design</h1>
               <h1>70%</h1>
            </div>
            <div className='w-full h-2 rounded-xl bg-indigo-300 overflow-hidden mt-2'>
               <div className='w-[70%] h-full bg-indigo-600'></div>
            </div>
         </div>

        

      </div>

    </div>
  )
}

export default Skills