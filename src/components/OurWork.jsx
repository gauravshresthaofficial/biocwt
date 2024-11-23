import React, { useState } from 'react'
import hero1 from '../assets/image-1.svg'
import hero2 from '../assets/image-2.svg'
import hero3 from '../assets/image.svg'
import workimage from '../assets/workimage.svg'

import { FaArrowLeft, FaArrowRight, FaRegCircle } from "react-icons/fa6";
import { MdCircle } from 'react-icons/md'

const images = [workimage, hero1, hero2, hero3];

const OurWork = ({ padding }) => {


    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className='max-h-screen'>
            <div
                className={`h-full bg-red-300 w-screen flex flex-col justify-center text-white gap-10 pt-${padding}`}
            >
                <div className="ml-[10vw] mt-[12vh]">
                    <h2 className='capitalize text-[8vh] font-bold leading-tight pl-12'>Our Work</h2>
                </div>
                <div className='grow flex gap-4 flex-col'>
                    <div className='flex gap-10 items-center justify-center'>
                        <FaArrowLeft
                            className='text-lg hover:text-[#FFC099] hover:scale-150 h-full duration-75 cursor-pointer'
                            onClick={handlePrev}
                        />
                        <img src={images[currentIndex]} alt="Work" className='h-[65vh]' />
                        <FaArrowRight
                            className='text-lg hover:text-[#FFC099] hover:scale-150 h-full duration-75 cursor-pointer'
                            onClick={handleNext}
                        />
                    </div>
                    <div className='h-10 flex justify-center gap-3 items-center'>
                        {images.map((_, index) => (
                            index === currentIndex ? (
                                <MdCircle key={index} className='text-white h-3' />
                            ) : (
                                <FaRegCircle key={index} className='text-white h-2.5 hover:scale-110 hover:text-[#FFC088] cursor-pointer' onClick={() => setCurrentIndex(index)} />
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWork
