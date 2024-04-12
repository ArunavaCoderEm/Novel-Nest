import React from 'react'
import Navbar from '../Components/Navbar'
import Home from './Home'
import Footer from '../Components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Features from './Features'
import Categoryout from './Categoryout'

export default function Page() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/category/:id' element={<Categoryout/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
