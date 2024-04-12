import React from 'react'
import Navbar from '../Components/Navbar'
import Home from './Home'
import Footer from '../Components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Features from './Features'

export default function Page() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/features' element={<Features/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
