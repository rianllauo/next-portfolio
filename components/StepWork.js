import React from 'react'
import Image from 'next/image'

// image
import working1 from '/public/img/working-step1.png'
import working2 from '/public/img/working-step2.png'
import working3 from '/public/img/working-step3.png'
import task from '/public/img/task.svg'

const StepWork = () => {
   return (
      <div className='mt-16 flex flex-col items-center justify-between gap-8 md:flex-row-reverse md:mt-24 '>

         <div className='mb-8 md:w-1/2'>

            <h2 className='text-base text-indigo-500 font-medium'>Working Step</h2>
            <h1 className='text-3xl font-medium my-3'>My Working <br/> Process</h1>

            <div className='mt-6'>

               <div className='flex justify-between items-center gap-6'>
                  <div className='p-4 rounded-full  bg-indigo-500 flex items-center justify-center'>
                     <Image src={working1} alt="working 1" width="32px" height="32px" />
                  </div>
                  <div className='w-full'>
                     <h1 className='text-lg font-medium'>Concept Creation</h1>
                     <p className='text-sm text-gray-500 dark:text-gray-400'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>   
                  </div>
               </div>

               <div className='flex justify-between items-center gap-6 my-6'>
                  <div className='p-4 rounded-full  bg-indigo-500 flex items-center justify-center'>
                     <Image src={working2} alt="working 1" width="32px" height="32px" />
                  </div>
                  <div className='w-full'>
                     <h1 className='text-lg font-medium'>Sketch Drawing</h1>
                     <p className='text-sm text-gray-500 dark:text-gray-400'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit aut odit aut fugit.</p>   
                  </div>
               </div>

               <div className='flex justify-between items-center gap-6'>
                  <div className='p-4 rounded-full  bg-indigo-500 flex items-center justify-center'>
                     <Image src={working3} alt="working 1" width="32px" height="32px" />
                  </div>
                  <div className='w-full'>
                     <h1 className='text-lg font-medium'>Final Design</h1>
                     <p className='text-sm text-gray-500 dark:text-gray-400'>sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.</p>   
                  </div>
               </div>

            </div>

         </div>
         

         <div className='md:w1/2'>
            <Image src={task} alt="task" width='500px' height='300px' />
         </div>

      </div>
   )
}

export default StepWork