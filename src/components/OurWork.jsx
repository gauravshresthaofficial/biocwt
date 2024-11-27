import React, { useContext, useEffect, useRef, useState } from 'react';
import { ImageContext } from '../context/ImageContext';
import { FaRegCircle } from "react-icons/fa6";
import { MdCircle } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurWork = ({ padding }) => {
    const { images } = useContext(ImageContext);
    const photos = [images.workimage, images.hero1, images.hero2, images.hero3];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Refs for elements to animate
    const headingRef = useRef(null);
    const imageRef = useRef(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

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

        // Image animation
        gsap.fromTo(
            imageRef.current,
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 75%',
                },
            }
        );

    }, []);

    return (
        <section className="max-h-screen">
            <div
                className={`h-full w-screen flex flex-col justify-center text-white gap-10 pt-${padding}`}
            >
                {/* Heading */}
                <div ref={headingRef} className="ml-[10vw] mt-[12vh]">
                    <h2 className="capitalize text-[8vh] font-bold leading-tight pl-12">
                        Our Work
                    </h2>
                </div>

                {/* Image and navigation */}
                <div className="grow flex gap-4 flex-col">
                    <div className="flex gap-10 items-center justify-center">
                        <img
                            src={images.arrow}
                            className="text-lg hover:text-[#FFC099] hover:scale-110 h-8 duration-75 cursor-pointer"
                            onClick={handlePrev}
                            alt="Previous"
                        />
                        <img
                            ref={imageRef}
                            src={photos[currentIndex]}
                            alt="Work"
                            className="h-[65vh] w-[60vw] object-cover rounded-3xl"
                            loading="lazy"
                        />
                        <img
                            src={images.arrow}
                            className="text-lg hover:text-[#FFC099] hover:scale-110 h-8 rotate-180 duration-75 cursor-pointer"
                            onClick={handleNext}
                            alt="Next"
                        />
                    </div>

                    {/* Navigation Dots */}
                    <div className="h-10 flex justify-center gap-3 items-center">
                        {photos.map((_, index) => (
                            index === currentIndex ? (
                                <MdCircle
                                    key={index}
                                    className="text-white h-3"
                                />
                            ) : (
                                <FaRegCircle

                                    key={index}
                                    className="text-white h-2.5 hover:scale-110 hover:text-[#FFC088] cursor-pointer"
                                    onClick={() => setCurrentIndex(index)}
                                />
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWork;
