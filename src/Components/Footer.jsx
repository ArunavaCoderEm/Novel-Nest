import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='w-full mt-5 bg-amber-900 justify-center items-center  bottom-0'>
        <h2 className='text-white text-center p-1 font-mono font-xl'>Made By <Link to="https://meard.vercel.app/" target='_blank' className='text-amber-200'>@Godard</Link> with vite + React, Tailwind & 💜</h2>
    </footer>
  )
}
