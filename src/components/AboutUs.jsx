import React from 'react'
import work1 from '../assets/work1.svg'
import work2 from '../assets/work2.svg'
import work3 from '../assets/work3.svg'

const AboutUs = ({ padding = 0 }) => {
    return (
        <section className={`h-screen pt-${padding}`}>
            <div className="h-full w-screen flex flex-col justify-center text-white gap-10 relative">
                <div className='h-[75vh] w-[90vw]  mr-[10vw] bg-[#1E0C06] rounded-tr-3xl rounded-br-3xl flex flex-row shadow-[3px_3px_20px_rgb(0,0,0,0.2)] shadow-[#503a2c] relative'>
                    <div className="ml-[10vw] mt-[2vh] flex flex-col gap-16">
                        <h2 className='capitalize text-[8vh] pl-12 font-bold leading-tight'>About Us</h2>
                        <p className='w-[40%] pl-12 text-wrap leading-relaxed'>
                            <span className='font-bold'>
                                BIO CWT</span> - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.</p>
                    </div>

                    <img src={work1} alt="" className='absolute h-36 top-12 right-24' />
                    <img src={work2} alt="" className='absolute h-52 top-24 right-36 z-10 border-[12px] rounded-[28px] border-[#1E0C06]' />
                    <img src={work3} alt="" className='absolute h-36 bottom-12 right-24' />
                </div>
            </div>
        </section>
    )
}

export default AboutUs

