import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu,setMenu] = useState('home');

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  const [inp,setInp] = useState("");
  const navi = useNavigate();

  const submitHandler = (e) => {
      e.preventDefault();
      navi('/searchres/'+ inp)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={() => {setMenu('home')}}>
            <img src="./blogobb.png" className="h-8"/>
            <span className="self-center text-xl font-mono font-semibold whitespace-nowrap hov dark:text-white"><span className='text-amber-400 font-serif font-bold'>N</span>ovel<span className='text-amber-400 font-serif font-bold'>N</span>est</span>
          </Link>
          <div className="flex md:order-2">
            <button type="button" onClick={toggleSearch} className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <button type="button" onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isSearchOpen ? 'block' : 'hidden'}`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <form onSubmit={submitHandler} className='flex'>
              <input type="text" id="search-navbar" onChange={(e) => setInp(e.target.value)} value={inp} className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Books ..."/>
              <button type='submit' className='rounded bg-amber-700 text-white font-thin p-2 ml-1' >Go</button>
              </form>
            </div>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-600 md:dark:bg-gray-700 dark:border-gray-700">
              <li>
                <Link to="/" className={`block p-2 font-sm rounded-md hover:text-amber-500 transition-all duration-300 ${(menu == 'home'? `bg-amber-500 text-black` : `text-white`)}`} onClick={() => {setMenu('home')}} aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about"  className={`block p-2 font-sm rounded-md hover:text-amber-500 transition-all duration-300 ${(menu == 'about'? `bg-amber-500 text-black` : `text-white`)}`} onClick={() => {setMenu('about')}}>About Me</Link>
              </li>
              <li>
                <Link to="/features"  className={`block p-2 font-sm rounded-md hover:text-amber-500 transition-all duration-300 ${(menu == 'feature'? `bg-amber-500 text-black` : `text-white`)}`} onClick={() => {setMenu('feature')}}>Features</Link>
              </li>
              <li>
              </li>
            </ul>
            <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isSearchOpen ? 'block' : 'hidden'}`} id="navbar-search">
            <div className="relative mx-auto md:block sm:hiddden lg:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <form onSubmit={submitHandler} className='flex'>
              <input type="text" id="search-navbar" onChange={(e) => setInp(e.target.value)} value={inp} className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-amber-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Books ..."/>
              <button type='submit' className='rounded bg-amber-700 text-white font-thin p-2 ml-1'>Go</button>
              </form>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
