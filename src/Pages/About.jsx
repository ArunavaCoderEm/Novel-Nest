import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="./me.png"/>
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello ! I am Arunava Dutta</h1>
        <div className="grid lg:grid-cols-2 gap-5 sm:grid-cols-1">
        <p className="mb-8 leading-relaxed text-left">I have a genuine passion for coding, finding joy and fulfillment in the process of creating software solutions. My proficiency spans various programming languages including Python, C, and C++, allowing me to delve deep into problem-solving and algorithmic challenges. Additionally, I possess a strong command of web development technologies such as HTML, CSS, and JavaScript, enabling me to craft engaging and dynamic web experiences.</p>
        <p className="mb-8 leading-relaxed text-left">I am strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.My journey in development has been enriched by my exploration of modern frameworks like Vite + React, Tailwind CSS, and Bootstrap. These tools not only enhance my productivity but also empower me to bring my ideas to life in a more efficient and effective manner.</p>
        </div>
        <div className="flex justify-center">
          <Link to="https://godard.vercel.app/" target='_blank' className="inline-flex text-black bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg">Portfolio</Link>
          <Link to="https://github.com/ArunavaCoderEm" target='_blank' className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Gtihub</Link>
        </div>
      </div>
    </div>
  </section>
  )
}
