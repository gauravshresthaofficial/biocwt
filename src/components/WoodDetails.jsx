import React from 'react'
import hero1 from '../assets/image-1.svg'
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const cardData = [
    {
        title: "Oak",
        image: hero1,
        features: [
            { icon: <GiCheckMark className='text-[#FFC099] w-4' />, text: "Durability" },
            { icon: <GiCheckMark className='text-[#FFC099] w-4' />, text: "Beautiful Texture" },
            { icon: <GiCheckMark className='text-[#FFC099] w-4' />, text: "Water Resistance" },
            { icon: <RxCross2 className='text-[#FFC099] w-4' />, text: "Expensive" },],
    },
    {
        title: "Buk",
        image: hero1,
        features: [
            { icon: <GiCheckMark className='text-[#FFC099] w-4' />, text: "Durability" },
            { icon: <RxCross2 className='text-[#FFC099] w-4' />, text: "Hard to handle" },],
    },
    {
        title: "Ash",
        image: hero1,
        features: [
            { icon: <GiCheckMark className='text-[#FFC099] w-4' />, text: "Durability" },
            { icon: <RxCross2 className='text-[#FFC099] w-4' />, text: "Hard to handle" },],
    },];


const Card = ({ title, image, features }) => (
    <div className="max-w-[20vw] flex flex-col items-center gap-6">
        <img src={image} alt={title} className='h-44' />
        <p className='font-semibold text-lg leading-none'>{title}</p>
        <div className="flex gap-3 flex-col justify-start w-full px-4">
            {features.map((feature, index) =>
            (<div key={index} className='flex items-center gap-3'>
                {feature.icon}
                <p className='inline'>{feature.text}</p>
            </div>
            ))}
        </div>
    </div>);


const WoodDetails = () => {
    return (
        <section>
            <div className="h-screen w-screen flex flex-col flex-grow justify-center text-white gap-10">
                <div className="ml-[10vw] mt-[12vh]">
                    <h2 className='capitalize text-[8vh] font-bold leading-tight pl-12'>The wood we</h2>
                    <h2 className='capitalize text-[8vh] font-bold leading-tight pl-12'>Work with</h2>
                </div>

                <div className='flex w-full justify-around grow'> {cardData.map((card, index) => (<Card key={index} {...card} />))} </div>
            </div>
        </section>
    )
}

export default WoodDetails
