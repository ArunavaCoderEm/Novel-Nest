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
                <section className="text-gray-700 body-font overflow-hidden bg-white" key={book.cover_i}>
                  <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                      <img alt="ecommerce" className="lg:w-1/2 w-full tryt lg:h-[80%] object-cover object-center rounded border border-gray-200" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}/>
                      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BOOK NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{book.title}</h1>
                        <div className="flex flex-col my-auto mb-4">
                            <li className="list-disc text-gray-600 ml-3 my-auto">{book.ratings_count} Reviews</li>
                            <li className="list-disc text-gray-600 ml-3 my-auto">{book.ratings_sortable} / 5  Rating</li>
                        </div>
                        <p className="leading-relaxed text-left"><span className='mx-2 text-amber-500'>First Sentence :</span>{book.first_sentence}</p>       
                        <div className="my-3 m-auto flex flex-col">
                            <div className="flex gap-4">
                                <h1 className='text-font-semibold text-amber-600'>Author :</h1>
                                <p className=''>{book.author_name[0]}</p>
                            </div>
                            <div className="flex">
                                <h1 className='text-font-semibold text-amber-600'>Contributor :</h1>
                                <div className="flex flex-col ml-auto">
                                    <p className="ml-auto text-gray-900">{(book.contributor)?book.contributor[0]:"Not Available"}</p>
                                    <p className="ml-auto text-gray-900">{(book.contributor)?book.contributor[1]:"Not Available"}</p>
                                </div>
                            </div>
                            <div className="flex">
                                <h1 className='text-font-semibold text-amber-600'>Ebook & Count :</h1>
                                <div className="flex flex-col ml-auto">
                                    <span className="ml-auto text-gray-900">{book.ebook_access}</span>
                                    <span className="ml-auto text-gray-900">{book.ebook_count_i}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <h1 className='text-font-semibold text-amber-600'>Available in {(book.language)?book.language.length:"N/A"} Languages :</h1>
                                <span className="ml-auto  text-gray-900">" {(book.language)?book.language[0]:"N/A"} ",</span>
                                <span className="ml-auto  text-gray-900">" {(book.language)?book.language[1]:"N/A"} ",</span>
                                <span className="ml-auto mx-auto  text-gray-900">" {(book.language)?book.language[2]:"N/A"} " ...</span>
                            </div>
                        </div>     
                      </div>
                    </div>
                  </div>
                </section>
            
        )})}
        </>
    }
    </>
    
  )
}
