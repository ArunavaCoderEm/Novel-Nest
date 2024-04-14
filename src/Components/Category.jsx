import React from 'react'
import {Link} from 'react-router-dom'

export default function Category() {
  return (
    <>
    <section id='explore'>
        <h1 className='text-3xl font-bold text-amber-700 text-center my-5'>Trending Categories</h1>
        <div className="grid grid-cols-3 mt-10 mb-10 ">
            <Link to='/category/action' className="sq m-auto tryy p-2 rounded-lg my-2">
                <div className="pics  w-[100px] h-[70px]">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/028/274/915/small/strong-athletic-male-fighter-view-from-the-back-photo.jpg" className='rounded-lg' alt="" />
                </div>
                <div className="sqt text-center mb-3 text-semibold font-mono tracking-wider">
                    Action
                </div>
            </Link>
            <Link to='/category/romance' className="sq m-auto tryy p-2 rounded-lg my-2">
                <div className="pics  w-[100px] h-[70px]">
                    <img src="https://i.pinimg.com/550x/24/64/78/24647830c675466f7d891965b8c4ac2c.jpg" className='rounded-lg w-full h-[55px]' alt="" />
                </div>
                <div className="sqt text-center mb-3 text-semibold font-mono tracking-wider">
                    Romance
                </div>
            </Link>
            <Link to='/category/comedy' className="sq m-auto tryy p-2 rounded-lg my-2">
                <div className="pics  w-[100px] h-[70px]">
                    <img src="https://lionhearttheatre.org/wp-content/uploads/2016/01/download-14.jpg" className='rounded-lg' alt="" />
                </div>
                <div className="sqt text-center mb-3 text-semibold font-mono tracking-wider">
                    Comedy
                </div>
            </Link>
            <Link to='/category/horror' className="sq m-auto tryy p-2 rounded-lg my-2">
                <div className="pics  w-[100px] h-[70px]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJd4igk67lgLHfRkNqPm7ZHXzyC2XiODzB3qR6oKjTEw&s" className='rounded-lg h-[50px]' alt="" />
                </div>
                <div className="sqt text-center mb-3 text-semibold font-mono tracking-wider">
                    Horror
                </div>
            </Link>
            <Link to='/category/detective' className="sq m-auto tryy p-2 rounded-lg my-2">
                <div className="pics  w-[100px] h-[70px]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dmxIa0NrjeqeVqRSrWDMGQxfaJzOxqiYQJ1Lkl9A5w&s" className='rounded-lg' alt="" />
                </div>
                <div className="sqt text-center mb-3 text-semibold font-mono tracking-wider">
                    Detective
                </div>
            </Link>
            <Link to='/category/adventure' className="sq m-auto tryy p-2 rounded-lg my-2">
                <div className="pics  w-[100px] h-[70px]">
                    <img src="https://media.istockphoto.com/id/1443409611/photo/man-on-stone-on-the-hill-and-beautiful-mountains-in-haze-at-colorful-sunset-in-autumn.webp?b=1&s=170667a&w=0&k=20&c=iqigoCobHZAp1jeWM8M6-bcNOxVCveZmy76u7YwOoAg=" className='rounded-lg' alt="" />
                </div>
                <div className="sqt text-center mb-3 text-semibold font-mono tracking-wider">
                    Adventure
                </div>
            </Link>
        </div>
        </section>
    </>
  )
}
