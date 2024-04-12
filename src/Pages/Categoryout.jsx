import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Bookcard from '../Components/Bookcard'

export default function Categoryout() {

    const [obj,setobj] = useState([])

    let params = useParams()

    const getidbooks = async (id) => {
        const data = await fetch(`https://openlibrary.org/subjects/${params.id}.json?limit=30`)
        const res = await data.json()
        console.log(res);
        setobj(res.works)
    }
  
    useEffect(() => {
        getidbooks();
    },[params.id])

  return (
    <>
        <h1 className='text-black tsh font-thin text-3xl text-center m-auto my-5'>... Your {params.id} books are below ...</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:m-auto">
      {obj.map(books => {
        return(
          <div key={books.cover_id}> 
            <Bookcard title={books.title} coverb={books.cover_id} author={books.authors[0].name} publish={books.first_publish_year} sub={books.subject[3]} />
          </div>
          )})}
    </div>
    </>
  )
}
