import React, { useEffect, useState, CSSProperties  } from 'react'
import { useParams } from 'react-router-dom'
import Bookcard from '../Components/Bookcard'
import BounceLoader from "react-spinners/BounceLoader";

export default function Categoryout() {

    const [obj,setobj] = useState([])

    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    },[])

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
        <h1 className='text-black tsh font-thin sm:text-2xl text-3xl text-center m-auto my-5'>... Your {params.id} books are below ...</h1>

        {
            loading ? 
             <BounceLoader 
              color={'#ffbf00'}
              loading={loading}
              size={50}
              className='text-center items-center justify-center m-auto'
            /> : 
            <>
        <div className="grid lg:grid-cols-3 lg:mx-auto sm:ml-3 md:grid-cols-2 sm:grid-cols-1">
            {obj.map(books => {
                return(
                <div key={books.cover_id} className='m-auto'> 
                    <Bookcard title={books.title} coverb={books.cover_id} author={books.authors[0].name} publish={books.first_publish_year} sub={books.subject[3]} res={books.title} />
                </div>
            )})}
        </div>
            </>
        }
    </>
  )
}
