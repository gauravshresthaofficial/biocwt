import React from 'react'
import logo from "../assets/logo.svg"
import imagemiddle from '../assets/imagemiddle.svg'

import { FiPhoneCall } from 'react-icons/fi'
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5'

const AnyQuestions = () => {
    return (
        <section>
            <div className="w-screen flex flex-col justify-center text-white overflow-hidden relative">
                <div className="ml-[10vw] mt-[12vh] mb-10">
                    <h2 className='capitalize text-[8vh] font-bold leading-tight pl-12'>Any Questions?</h2>
                </div>

                <div className="flex justify-between w-[90vw] mx-auto grow relative overflow-hidden pb-10">

                    <div className='w-[50%] h-full px-20 flex gap-4 flex-col'>
                        <input type="text" placeholder='Name' className='rounded-3xl w-full bg-inherit border border-[#3765ef] p-2.5 px-8 focus:border-[#FFC099] bg-slate-100 outline-none' />

                        <input type="text" placeholder='Your Telephone Number' className='rounded-3xl w-full bg-inherit border border-[#3765ef] p-2.5 px-8 focus:border-[#FFC099] bg-slate-100 outline-none' />

                        <textarea name="" rows={6} id=""
                            className='rounded-3xl w-full bg-inherit border border-[#3765ef] p-2.5 px-8 focus:border-[#FFC099] bg-slate-100 outline-none'
                        ></textarea>

                        <button className='rounded-full w-fit px-10 py-1 bg-[#728BAD] text-lg font-semibold text-white hover:bg-[#728bbd]'>Send</button>
                    </div>

                    <div
                        className="w-[50%] px-20"
                    >
                        <p className='font-medium'>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</p>
                    </div>

                    <img src={imagemiddle} alt="" className='absolute right-24 -bottom-56 h-[30rem]' />
                </div>

                <div className='flex flex-col gap-10 px-20 py-10 text-white text-lg'
                    style={{
                        boxShadow: "0 -4px 30px rgba(255, 255, 255, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.1)"
                    }} >
                    <div className='flex items-center gap-20'>
                        <img src={logo} alt="logo" className='h-14 cursor-pointer' />
                        <p className='flex items-center'><FiPhoneCall className='inline-block mr-3' />+420 000 000 000</p>
                        <p className='flex items-center'><IoLocationOutline className='inline-block mr-3 w-6 h-6' />Na Plzeňce 1166/0
                            150 00</p>
                    </div>
                    <p>
                        Privacy Policy
                    </p>
                </div>

            </div>
        </section>
    )
}

export default AnyQuestions
