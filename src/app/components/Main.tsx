import React from 'react'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa';

function Main() {
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
        <div className='grid grid-cols-2 bg-gray-200'>
          <div className=''>
            <h1>Request your free property price estimate and market guide.</h1>
            <h3><FaBeer /> Tell us a bit about yourself and what you're looking to do.</h3>
            <h3>Receive a free tailored property guide with an automated valuation and local market analysis.</h3>
            <h3>Get in touch with a local expert in the area, and have your questions answered.</h3>
          </div>
          <div className=''>
            <div className='px-5 w-4/6 text-center mx-auto border rounded border-slate-300 outline-2 '>
             <h1>Step 1 of 5</h1>
             <progress className="progress progress-warning w-100" value={20} max="100"></progress>
             <h3>What do you need help with?</h3>
             <button className="btn btn-outline btn-warning btn-block">Warning</button>
            </div>
             
          </div>

        </div>

      <div className='grid grid-cols-2 bg-gray-50 py-3'>
      <div>
        <p className='text-lg'>What's in the guide?</p>
        <p>
        Get a sense of property values in the area by looking at market activity, review trends over time, and compare prices from recent sales.
        </p>
        <ul>
          <li>Market trends</li>
          <li>Comparable sales</li>
          <li>Agency contacts</li>
          <li>Property price estimate</li>
          <li>Market statistics</li>
          <li>Market activity</li>
        </ul>
      </div>
      <div className='text-center mx-auto'>
      <Image
        src="/images/mockup2.png"
        width={440}
        height={230}
        alt="Picture of the author"
        /> 
      </div>
        
    </div>
    
    <div className='container p-2'>
      <hr/>
    </div>

    </div>
    
    </>
  )
}

export default Main