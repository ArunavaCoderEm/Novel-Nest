import React, { useEffect, useState  } from 'react'
import Bookcard from '../Components/Bookcard'
import BounceLoader from "react-spinners/BounceLoader";

export default function Belowhome() {

    const [obj,setobj] = useState([]);

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
        const data = await fetch(`https://openlibrary.org/subjects/${today}.json?limit=6`)
        const res = await data.json()
        setobj(res.works)
    }

    useEffect(() => {
        getlikebooks();
    },[])

  return (
    <>
    <h1 className='text-black tsh font-thin text-3xl text-center m-auto my-5'>... You may like these ...</h1>
    {
        loading ? 
         <BounceLoader 
          color={'#ffbf00'}
          loading={loading}
          size={50}
          className='text-center items-center justify-center m-auto'
        /> : 
        <>
      <div className="grid lg:grid-cols-3 rounded-lg bg-slate-300 lg:mx-auto sm:ml-3 md:grid-cols-2 sm:grid-cols-1">
        {obj.map(books => {
          return(
            <div key={books.cover_id} className='m-auto p-3'> 
              <Bookcard title={books.title} coverb={books.cover_id} author={books.authors[0].name} publish={books.first_publish_year} sub={books.subject[3]} res={books.cover_edition_key} />
            </div>
            )})}
        </div>
          </>
        }
    </>
  )
}
