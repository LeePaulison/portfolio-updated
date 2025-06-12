import React from 'react'
// Simple Icons
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className='grid grid-cols-12 gap-4 pb-4 pt-2 sm:pt-4 sm:pb-6 border-t border-gray-200 dark:border-gray-700'>
      <div className='col-span-3 flex flex-col items-center justify-center'>
        <img src='/assets/images/LP_Logo.webp' alt="Lee Paulison Jr's Logo" className='h-15 w-auto' />
      </div>
      <div className='col-span-6 flex flex-row items-center justify-center gap-8'>
        <a href='https://github.com/LeePaulison' className='hover:text-accent transition'><SiGithub className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]" /></a>
        <a href='https://www.linkedin.com/in/lee-paulison-jr/' className='hover:text-accent transition'><SiLinkedin className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]" /></a>
        <div className='flex items-center'>
          <p className="text-xs text-gray-500 text-center italic hidden sm:block mb-1">
            Built with:
          </p>
          <div className="hidden sm:flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-500 text-center max-w-xl mx-auto pe-2">
            <span>Next.js</span>
            <span>Tailwind CSS</span>
            <span>Radix UI</span>
            <span>React Icons</span>
            <span>App Router</span>
            <span>MDX</span>
            <span>SSR</span>
            <span>Deployed via Vercel</span>
          </div>
        </div>
      </div>
      <div className='col-span-3 flex flex-col items-center justify-center'>
        <p className='text-sm text-gray-500'>© {currentYear} Lee Paulison Jr</p>
        <p className='text-sm text-gray-500'>All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer