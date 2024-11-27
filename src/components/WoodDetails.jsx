import React, { useContext, useEffect, useRef } from 'react';
import { ImageContext } from '../context/ImageContext';
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, image, features, cardRef }) => (
    <div
        ref={cardRef}
        className="max-w-[20vw] flex flex-col items-center gap-6 opacity-0"
    >
        <img src={image} alt={title} className="h-44" loading="lazy" />
        <p className="font-semibold text-lg leading-none">{title}</p>
        <div className="flex gap-3 flex-col justify-start w-full px-4">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                    {feature.icon}
                    <p className="inline">{feature.text}</p>
                </div>
            ))}
        </div>
    </div>
);

const WoodDetails = () => {
    const { images } = useContext(ImageContext);
    const cardsRef = useRef([]);
    const headingRef = useRef(null);

    const cardData = [
        {
            title: "Oak",
            image: images.wood1,
            features: [
                { icon: <GiCheckMark className="text-[#FFC099] w-4" />, text: "Durability" },
                { icon: <GiCheckMark className="text-[#FFC099] w-4" />, text: "Beautiful Texture" },
                { icon: <GiCheckMark className="text-[#FFC099] w-4" />, text: "Water Resistance" },
                { icon: <RxCross2 className="text-[#FFC099] w-4" />, text: "Expensive" },
            ],
        },
        {
            title: "Buk",
            image: images.wood3,
            features: [
                { icon: <GiCheckMark className="text-[#FFC099] w-4" />, text: "Durability" },
                { icon: <RxCross2 className="text-[#FFC099] w-4" />, text: "Hard to handle" },
            ],
        },
        {
            title: "Ash",
            image: images.wood2,
            features: [
                { icon: <GiCheckMark className="text-[#FFC099] w-4" />, text: "Durability" },
                { icon: <RxCross2 className="text-[#FFC099] w-4" />, text: "Hard to handle" },
            ],
        },
    ];

    useEffect(() => {
        // Heading animation
        gsap.fromTo(
            headingRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                },
            }
        );

        // Cards animation
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    delay: index * 0.2, // Stagger the cards
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    },
                }
            );
        });
    }, []);

    return (
        <section>
            <div className="h-screen w-screen flex flex-col flex-grow justify-center text-white gap-10">
                <div ref={headingRef} className="ml-[10vw] mt-[12vh]">
                    <h2 className="capitalize text-[8vh] font-bold leading-tight pl-12">
                        The wood we
                    </h2>
                    <h2 className="capitalize text-[8vh] font-bold leading-tight pl-12">
                        Work with
                    </h2>
                </div>

                <div className="flex w-full justify-around grow">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            cardRef={(el) => (cardsRef.current[index] = el)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WoodDetails;
