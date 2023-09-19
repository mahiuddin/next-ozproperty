import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <>
    
    <div className="w-screen bg-black w-ful">
    <div className="container text-center mx-auto">
    <div className="navbar">
        <div className="flex-1">
          <a className="text-xl">
          <Image
      src="/images/logo-black-background-300x66.jpg"
      width={300}
      height={66}
      alt="Picture of the author"
    />
            
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu text-white text-lg menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Blog Post</a></li>
            <li><a>News</a></li>
            <li><a>Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
</>
  )
}

export default Header