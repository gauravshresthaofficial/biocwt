import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import hero1 from '../assets/image-1.svg'
import hero2 from '../assets/image-2.svg'
import hero3 from '../assets/image.svg'
import workimage from '../assets/workimage.svg'
import work1 from '../assets/work1.svg'
import work2 from '../assets/work2.svg'
import work3 from '../assets/work3.svg'
import imagemiddle from '../assets/imagemiddle.svg'
import cross from '../assets/icons/maki_cross.svg';
import tick from '../assets/icons/twemoji_check-mark.svg';
import { RxCross2 } from "react-icons/rx";
import group9 from '../assets/Group9.svg'

import { PiLessThanBold } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight, FaRegCircle } from "react-icons/fa6";

import { GiCheckMark } from "react-icons/gi";
import { MdCircle } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5'
import AnyQuestions from '../components/AnyQuestions'
import AboutUs from '../components/AboutUs'
import AdvantageWorkWithUs from '../components/AdvantageWorkWithUs'
import OurWork from '../components/OurWork'
import WoodDetails from '../components/WoodDetails'

// import workimage from '../assets/workimage.svg';

// const cardData = [
//     {
//         title: "Oak",
//         image: hero1,
//         features: [
//             { icon: <GiCheckMark className='text-[#FFC099] w-4' />, text: "Durability" },
//             { icon: <GiCheckMark className='text-[#FFC099] w-4' />, text: "Beautiful Texture" },
//             { icon: <GiCheckMark className='text-[#FFC099] w-4' />, text: "Water Resistance" },
//             { icon: <RxCross2 className='text-[#FFC099] w-4' />, text: "Expensive" },],
//     },
//     {
//         title: "Buk",
//         image: hero1,
//         features: [
//             { icon: <GiCheckMark className='text-[#FFC099] w-4' />, text: "Durability" },
//             { icon: <RxCross2 className='text-[#FFC099] w-4' />, text: "Hard to handle" },],
//     },
//     {
//         title: "Ash",
//         image: hero1,
//         features: [
//             { icon: <GiCheckMark className='text-[#FFC099] w-4' />, text: "Durability" },
//             { icon: <RxCross2 className='text-[#FFC099] w-4' />, text: "Hard to handle" },],
//     },];

// const Card = ({ title, image, features }) => (
//     <div className="max-w-[20vw] flex flex-col items-center gap-6">
//         <img src={image} alt={title} className='h-44' />
//         <p className='font-semibold text-lg leading-none'>{title}</p>
//         <div className="flex gap-3 flex-col justify-start w-full px-4">
//             {features.map((feature, index) =>
//             (<div key={index} className='flex items-center gap-3'>
//                 {feature.icon}
//                 <p className='inline'>{feature.text}</p>
//             </div>
//             ))}
//         </div>
//     </div>);

const images = [workimage, hero1, hero2, hero3];

const Home = () => {

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handlePrev = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    // };

    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    // };


    return (
        <>
            {/* <img src={group9} alt="" className='absolute right-0 top-0 scrollbar-hide' /> */}
            <section className='h-screen w-screen relative flex justify-center items-center'>
                <div className="w-[50vw] h-full absolute bg-hero-pattern bg-cover top-0 left-0" loading="lazy"></div>

                <div className='h-[70vh] w-[90vw] divide-x-2 divide-[#FFC099]  ml-[10vw] bg-[#1E0C06] rounded-tl-3xl rounded-bl-3xl z-10 mt-20 flex flex-row flex-grow'>
                    <div className="w-[50%] h-full p-12 flex flex-col justify-around">
                        <div>
                            <h1 className='text-[12vh] text-white font-semibold leading-none'>SOLID</h1>
                            <h1 className='text-[12vh] text-white font-semibold leading-none'>WOOD</h1>
                            <h1 className='text-[12vh] text-white font-semibold leading-none'>PRODUCTS</h1>
                        </div>

                        <h4 className='text-[#FFC099] text-lg tracking-wider'>
                            Oak, beech, ash
                            <br />
                            <span className='font-bold'>1700 CZK</span> per m3
                        </h4>

                        <button className='rounded-full w-fit px-10 py-1 bg-[#728BAD] text-lg font-semibold text-white hover:bg-[#728bbd]'>Order</button>


                    </div>

                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                    <div className="w-[50%] h-full relative">
                        <img src={hero2} alt="Hero 2" className='h-44 absolute top-10 right-32 object-cover' loading='lazy'/>
                        <img src={hero1} alt="Hero 1" className='h-44 absolute bottom-40 left-32 object-cover' loading='lazy'/>
                        <img src={hero3} alt="Hero 3" className='h-44 absolute bottom-10 right-32 object-cover' loading='lazy'/>

                    </div>

                </div>
            </section>


            {/* <section>
                <div className="h-screen w-screen flex flex-col flex-grow justify-center text-white gap-10">
                    <div className="ml-[10vw] mt-[12vh]">
                        <h2 className='capitalize text-[8vh] font-bold leading-tight pl-12'>The wood we</h2>
                        <h2 className='capitalize text-[8vh] font-bold leading-tight pl-12'>Work with</h2>
                    </div>

                    <div className='flex w-full justify-around grow'> {cardData.map((card, index) => (<Card key={index} {...card} />))} </div>
                </div>
            </section> */}

            <WoodDetails/>

            {/* Our Work */}
            {/* <section>
                <div className="h-screen w-screen flex flex-col justify-center text-white gap-10">
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
            </section> */}
            <OurWork/>


            {/* Advantage working with us */}
            {/* <section>
                <div className="h-screen w-screen flex flex-col justify-center text-white gap-10">
                    <div className="ml-[10vw] mt-[12vh]">
                        <h2 className='capitalize text-[8vh] font-bold leading-tight pl-12'>Advantage<br />Working with US</h2>
                    </div>
                    <div className="grow w-full flex flex-col items-center gap-10">
                        <div className='flex gap-10 items-center w-[80vw] '>
                            <img src={workimage} alt="" className='h-[50vh]' />
                            <div className='flex justify-between flex-col h-full py-4 w-[40%]'>
                                <p className='text-lg font-medium pl-12'>In-house carpentry production</p>
                                <p className='text-lg font-medium pl-12'>We only treat wood with environmentally friendly and safe products</p>
                                <p className='text-lg font-medium pl-12'>Prices from the manufacturer, no extra charges</p>
                            </div>
                        </div>
                        <button className='rounded-full w-fit px-24 py-1.5 bg-[#728BAD] text-lg font-semibold text-white hover:bg-[#728bbd]'>Receive a Consultantion</button>
                    </div>
                </div>
            </section> */}
            <AdvantageWorkWithUs/>

            {/* About Us */}
            {/* <section>
                <div className="h-screen w-screen flex flex-col justify-center text-white gap-10 relative">
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
            </section> */}
            <AboutUs/>


            {/* Any Questions */}
            {/* <section>
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
            </section> */}
            <AnyQuestions/>

        </>
    )
}

export default Home
