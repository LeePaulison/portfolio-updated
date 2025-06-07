import React from 'react'
// components
import ThemeToggle from './themeToggle'

function Header() {
  return (
    <div className='flex row items-center justify-between py-2 px-4'><a className='text-3xl font-semibold'>Lee Paulison Jr</a><ThemeToggle /></div>
  )
}

export default Header