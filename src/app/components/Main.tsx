import React from 'react'
import Image from 'next/image'
import { FaWhatsapp, FaChartLine, FaUser } from 'react-icons/fa';

function Main() {
  return (
    <>
    <div className='container text-center mx-auto'>
        <div className='bg-main-color py-4'>
        <Image
        src="/images/logo-2048x136.jpg"
        width={800}
        height={53}
        alt="Picture of the author"
        /> 
        </div>
        <div className='grid grid-cols-2 bg-gray-200'>
          <div className='grid place-content-center'>
            <div>
            <h1 className='mt-6 text-3xl font-extrabold'>Request your free property price estimate and market guide.</h1>
            </div>
            <div className='text-right pt-3'>
              <ul>
                <li><FaWhatsapp className="inline text-3xl pr-2 text-yellow-500"/>Tell us a bit about yourself and what you're looking to do.</li>
                <li><FaChartLine className="inline text-3xl pr-2 text-yellow-500" />Receive a free tailored property guide with an automated valuation and local market analysis.</li>
                <li><FaUser className="inline text-3xl pr-2 text-yellow-500" /> Get in touch with a local expert in the area, and have your questions answered.
                </li>
              </ul>
            </div>   
            
          </div>
          <div className='mb-5 -mt-5'>
            <div className='px-5 w-4/6 text-center mx-auto border rounded border-slate-300 outline-2 '>
             <h1 className='mt-6 text-lg text-left'>Step 1 of 5</h1>
             <progress className="progress progress-warning w-100 h-4" value={20} max="100"></progress>
             <h3 className='mt-6 text-lg font-bold text-left'>What do you need help with?</h3>
             <button className="btn btn-outline btn-warning btn-block mt-2">Buying</button>
             <button className="btn btn-outline btn-warning btn-block mt-2">Selling</button>
             <button className="btn btn-outline btn-warning btn-block mt-2">Management</button>
             <button className="btn btn-outline btn-warning btn-block mt-2 mb-20">Management</button>

            </div>
             
          </div>

        </div>

      <div className='grid grid-cols-2 bg-gray-50 py-3 ps-10 text-left'>
      <div>
        <p className='mt-6 text-3xl font-extrabold pb-5'>What's in the guide?</p>
        <p>
        Get a sense of property values in the area by looking at market activity, review trends over time, and compare prices from recent sales.
        </p>
        <ol className='grid grid-cols-2 pt-5 ps-10 list-disc'>
          <li>Market trends</li>
          <li>Comparable sales</li>
          <li>Agency contacts</li>
          <li>Property price estimate</li>
          <li>Market statistics</li>
          <li>Market activity</li>
        </ol>
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