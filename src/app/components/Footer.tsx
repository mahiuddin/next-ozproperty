import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
    
    <div className='container text-center mx-auto'>
        <div className='bg-main-color'>
        <Image
        src="/images/logo-2048x136.jpg"
        width={800}
        height={53}
        alt="Picture of the author"
        /> 
        </div>
     </div>
     
     
     </>
  )
}

export default Footer