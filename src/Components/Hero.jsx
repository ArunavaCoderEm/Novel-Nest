import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";


export default function Hero() {
  const [obj,setobj] = useState([])

  let [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 2000);
  },[])



  const choose = ['comedy','love','action','adventure','romance','detective'] 
  let random = Math.floor(Math.random() * choose.length);
  const today = choose[random]

  const getlikebooks = async () => {
      const data = await fetch(`https://openlibrary.org/subjects/${today}.json?limit=1`)
      const res = await data.json()
      setobj(res.works)
  }


  const scrollbelow = () => {
    if(screen.width <= 680) window.scrollTo(0, 1000)
    else window.scrollTo(0, 600)
  }

  useEffect(() => {
      getlikebooks();
  },[])

  return (
    <section className="text-gray-600 body-font bgh">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">Books are a uniquely 
            <br className="hidden lg:inline-block"/><span className='ml-2 font-bold text-amber-500 ty'>portable magic.</span>
          </h1>
          <p className="mb-8  leading-relaxed text-gray-700 bg-slate-200 p-4 rounded-md">Books are windows to countless worlds, offering both escape and insight. Within their pages, readers discover adventure, knowledge, and inspiration. They are timeless companions, guiding us through the depths of imagination and understanding.</p>
          <div className="flex justify-center">
            <button onClick={scrollbelow} className="inline-flex text-black bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg">Explore More</button>
            {obj.map(books => {
          return (
            <div key={books.cover_id}>
            <Link to={`/result/${books.cover_edition_key}`} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-amber-500 rounded text-lg">It's Details</Link>
            </div>
          )})}
          </div>
        </div>
        {
        loading ? 
         <BounceLoader 
          color={'#ffbf00'}
          loading={loading}
          size={50}
          className='text-center items-center justify-center m-auto'
        /> : 
        <>
        {obj.map(books => {
          return (
        <div className="lg:max-w-lg lg:w-full  md:w-1/2 w-5/6" key={books.cover_id}>
          <img className="object-cover rounded-lg object-center lg:ml-32" alt="hero" src={`https://covers.openlibrary.org/b/id/${books.cover_id}-L.jpg`}/>
          <h3 className='kk p-2 text-lg text-black m-auto my-2 font-semibold text-center'>{books.title}</h3>
        </div>
        )})}
        </>
      }
      </div>
    </section>
  )
}
