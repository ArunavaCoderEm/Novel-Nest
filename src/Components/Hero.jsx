import React from 'react'

export default function Hero() {
  return (
    <section className="text-gray-600 body-font bgh">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">Books are a uniquely 
            <br className="hidden lg:inline-block"/>portable magic.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700 bg-slate-200 p-2 rounded-md">Books are windows to countless worlds, offering both escape and insight. Within their pages, readers discover adventure, knowledge, and inspiration. They are timeless companions, guiding us through the depths of imagination and understanding.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore More</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-amber-500 rounded text-lg">Read This</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
        </div>
      </div>
    </section>
  )
}
