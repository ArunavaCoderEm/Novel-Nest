import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import BounceLoader from "react-spinners/BounceLoader";

export default function Result() {

    const [obj,setobj] = useState([])

    let params = useParams()

    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    },[])

    const getdetails = async () => {
        const data = await fetch(`https://openlibrary.org/search.json?q=${params.name}&limit=1`)
        const res = await data.json()
        console.log(res);
        setobj(res.docs)
    }

    useEffect(() => {
        getdetails();
    },[params.name])


  return (
    <>

    <h1 className='text-black text-center text-3xl font-normal my-5'>... Your Book Details ...</h1>
    {
            loading ? 
             <BounceLoader 
              color={'#ffbf00'}
              loading={loading}
              size={50}
              className='text-center items-center justify-center m-auto'
            /> : 
            <>
        {obj.map((book) => {
            return(
        <div key={book.cover_i}>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-full mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-amber-500 tracking-widest">BOOK NAME</h2>
                        <h1 className="text-amber-900 text-3xl title-font font-medium mb-4">{book.title}</h1>
                        <div className="flex mb-4">
                        <p className="flex-grow text-amber-700 border-b-2 border-amber-700 py-2 text-lg px-1">Description</p>
        
                        </div>
                        <p className="leading-relaxed mb-4"><span className='text-lg font-semibold text-amber-600 mr-2'>First Sentence :</span> {(book.first_sentence)?book.first_sentence[0]:"Not Available" }</p>
                        <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">People online read counr</span>
                        <span className="ml-auto text-gray-900">{book.already_read_count}</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">Author</span>
                        <span className="ml-auto text-gray-900">{book.author_name[0]}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                        <span className="text-gray-500">Contributor</span>
                        <div className="flex flex-col ml-auto">
                        <span className="ml-auto text-gray-900">{book.contributor[0]}</span>
                        <span className="ml-auto text-gray-900">{book.contributor[1]}</span>
                        <span className="ml-auto text-gray-900">{book.contributor[2]}</span>
                        </div>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                        <span className="text-gray-500">Ebook access and count</span>
                        <div className="flex flex-col ml-auto">
                        <span className="ml-auto text-gray-900">{book.ebook_access}</span>
                        <span className="ml-auto text-gray-900">{book.ebook_count_i}</span>
                        </div>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                        <span className="text-gray-500">Avl in {book.language.length}  Languages</span>
                        <div className="grid grid-cols-4  ml-auto">
                        <span className="ml-auto  text-gray-900">{book.language[0]}</span>
                        <span className="ml-auto  text-gray-900">{book.language[1]}</span>
                        <span className="ml-auto mx-auto  text-gray-900">{book.language[2]}</span>
                        <span className="ml-auto mx-auto text-gray-900">{book.language[3]} ....</span>
                        </div>
                        </div>
                        </div>
                    <img alt="bookpic" className="tryt lg:w-1/2 w-full lg:h-auto h-72 lg:mt-20 md:mt-10 sm:,t-2 object-cover object-center rounded" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}/>
                    </div>
                </div>
                </section>
                </div>
            )
        })}
        </>
    }
    </>
    
  )
}
