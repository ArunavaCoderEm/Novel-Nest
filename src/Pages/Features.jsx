import React from 'react'
import { Link } from 'react-router-dom';

export default function Features() {

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap bg-slate-100 w-full p-5">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">What You</span>
              <span className="mt-1 text-gray-500 text-sm">got</span>
            </div>
            <div className="md:flex-grow ">
              <h2 className="text-2xl font-medium text-amber-700 title-font mb-2">Better experience with better UI.</h2>
              <p className="leading-relaxed">In this website when you land on the home page you see a random "Today's Pick" book for you other than that while scrolling you will face a category section to browse through various kinds of books. Then you got some of the books that you may like.</p>     
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap bg-slate-300 w-full p-5">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">What website</span>
              <span className="mt-1 text-gray-500 text-sm">offers</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-amber-700 title-font mb-2">Content through searching and browsing.</h2>
              <p className="leading-relaxed">There is a "Get Details" buttons on clicking that of a particular book you will get a page showing almost all the details like name, author, languages, availibility, how it looks, published date, etc.</p>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap bg-slate-400 w-full p-5">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">What's in</span>
              <span className="mt-1 text-gray-500 text-sm">use</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-amber-700 title-font mb-2">How it works ?</h2>
                <p className="leading-relaxed">In this website vite + react, CSS and Tailwind CSS are getting used as frontend and for data fetching <Link to="https://openlibrary.org/developers/api" target="_black" className='text-amber-400 mx-1 cursor-pointer'>"open library api"</Link> is gettinf used. That's it. Enjoy and Explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
