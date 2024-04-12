import React, { useEffect, useState } from 'react'
import Bookcard from './Bookcard'

export default function Belowhome() {

    const [obj,setobj] = useState([])

    const choose = ['scifi','love','action','addventure','romace','detective'] 
    let random = Math.floor(Math.random() * choose.length);
    const today = choose[random]

    const getlikebooks = async () => {
        const data = await fetch(`https://openlibrary.org/subjects/${today}.json?limit=6`)
        const res = await data.json()
        console.log(res);
        setobj(res.works)
    }

    useEffect(() => {
        getlikebooks();
    },[])

  return (
    <>
    <h1 className='text-black tsh font-thin text-3xl text-center m-auto my-5'>... You may like these ...</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
