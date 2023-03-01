import React from 'react'

export default function Intro() {
  return (
    <div className='h-1/2 lg:h-screen bg-gradient-to-t from-red-100'>
      {/* navbar */}
      <nav className='w-full fixed top-0 bg-white shadow-sm'>
        <div className="container mx-auto py-4 flex items-center justify-between text-mycolor">
          {/* logo */}
          <div className='flex items-center gap-4'>
            <img src="images/logo.png" alt="" className='h-12 w-10'/>
            <span className='text-2xl font-[900] text-indigo-900'>Faster.</span>
          </div>
          <ul className="hidden md:flex gap-8">
            <li><a href="/">Homepage</a></li>
            <li><a href="/">About me</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Works</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          <div className='flex space-x-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-orange-400 cursor-pointer w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:hidden cursor-pointer w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>

          </div>
        </div>
      </nav>
      {/* intro content */}
    </div>
  )
}
