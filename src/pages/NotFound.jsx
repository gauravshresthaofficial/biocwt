import React from 'react'
import n4 from '../assets/404/H1.svg'
import n0 from '../assets/404/n0.svg'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section className='h-screen w-screen relative flex flex-col justify-center items-center'>
            <div className="w-[50vw] h-full absolute bg-hero-pattern bg-cover top-0 left-0" loading="lazy"></div>

            <div className='flex z-10'>
                <img src={n4} alt=""  />
                <img src={n0} alt="" />
                <img src={n4} alt="" />
            </div>
            <div className='z-10 flex flex-col justify-center items-center gap-2 text-white'>
                <h2 className='font-bold text-3xl'>Woops</h2>
                <p className='text-[#FFC099] text-lg'>Oh, you must be lost, there is no such page.</p>
                <Link to={"/"} className='rounded-full w-fit mt-4 px-10 py-1 bg-[#728BAD] text-lg font-semibold text-white hover:bg-[#728bbd]'>
                    Go to the home page
                </Link>
            </div>
        </section>
    )
}

export default NotFound
