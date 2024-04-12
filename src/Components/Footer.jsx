import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='w-full mt-5 bg-amber-900 h-9 justify-center items-center'>
        <h2 className='text-white text-center py-1 font-mono font-xl'>Made By <Link to="https://godard.vercel.app/" target='_blank'>@Godard</Link> with vite + React, Tailwind & 💜</h2>
    </footer>
  )
}
