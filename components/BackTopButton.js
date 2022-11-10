import React from 'react'
import Image from 'next/image'

import arrowTop from '/public/icons/arrow-up.svg'

const backTopButton = () => {
  return (
    <div className='fixed bottom-2 right-2 p-4 rounded-full bg-fuchsia-400 z-30'>
         <a href="#home" className='w-full h-full flex items-center justify-center'>
            <Image src={arrowTop} alt="arrow" width='30px' height='30px' />
         </a>
    </div>
  )
}

export default backTopButton