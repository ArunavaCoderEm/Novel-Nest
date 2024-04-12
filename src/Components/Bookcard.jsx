import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export default function Bookcard(props) {


  return (
    <>
    <div className="min-w-sm max-w-lg w-[350px] my-2 bg-white border mx-5 try border-gray-200 rounded-lg shadow dark:bg-amber-800 dark:border-amber-700">
        <p href="#">
            <img className="rounded-t-lg m-auto ibmg" src={`https://covers.openlibrary.org/b/id/${props.coverb}-L.jpg`} alt="book pic" />
        </p>
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            <p className="mb-3 font-normal text-gray-100 ">Author : {props.author}</p>
            <div className="grid grid-cols-2">
            <p className="mb-3 font-normal text-gray-200 ">Published : {props.publish}</p>
            <p className="mb-3 font-normal text-amber-300 w-full">Topic : {props.sub}</p>
            </div>
            <Link to={`/result/${props.res}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-slate-800 hover:text-white bg-amber-700 rounded-lg hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
                Get Details
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
    </>
  )
}
