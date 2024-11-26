import React, { useContext, useEffect, useRef } from 'react';
import { ImageContext } from '../context/ImageContext';
import gsap from 'gsap';

import { PiLessThanBold } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight, FaRegCircle } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { MdCircle } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

import AnyQuestions from '../components/AnyQuestions';
import AboutUs from '../components/AboutUs';
import AdvantageWorkWithUs from '../components/AdvantageWorkWithUs';
import OurWork from '../components/OurWork';
import WoodDetails from '../components/WoodDetails';


const Home = () => {
    const { images } = useContext(ImageContext);

    const home = useRef(null);
    const bgimage = useRef(null);
    const rectangle = useRef(null);
    const textLines = useRef([]);
    const imagesRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

        // Background image animation
        tl.fromTo(
            bgimage.current,
            { x: '-100%', opacity: 0 },
            { x: '0%', opacity: 1 }
        )

            .fromTo(
                rectangle.current,
                { x: '10%', opacity: 0 },
                { x: '0%', opacity: 1 },
            )

            // Text lines animation
            .fromTo(
                textLines.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.3 },
                '<0.5' // Offset the animation by 0.5 seconds
            )

            // Button animation
            .fromTo(
                '.order-button',
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, ease: 'back.out(1.7)' },
                '-=0.5' // Overlap with the previous animation by 0.5 seconds
            )

            // Images animation
            .fromTo(
                imagesRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, stagger: 0.2, ease: 'elastic.out(1, 0.75)' },
                '-=0.5' // Overlap with the button animation
            );
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section ref={home} className="h-screen w-screen relative flex justify-center items-center">
                <div ref={bgimage} className="w-[50vw] h-full absolute bg-hero-pattern bg-cover top-0 left-0"></div>
                <div ref={rectangle} className="h-[70vh] w-[90vw] divide-x-2 divide-[#FFC099] ml-[10vw] bg-[#1E0C06] rounded-tl-3xl rounded-bl-3xl z-10 mt-20 flex flex-row">
                    <div className="w-[50%] h-full p-12 flex flex-col justify-around">
                        <div>
                            <h1
                                ref={(el) => (textLines.current[0] = el)}
                                className="text-[12vh] text-white font-semibold leading-none"
                            >
                                SOLID
                            </h1>
                            <h1
                                ref={(el) => (textLines.current[1] = el)}
                                className="text-[12vh] text-white font-semibold leading-none"
                            >
                                WOOD
                            </h1>
                            <h1
                                ref={(el) => (textLines.current[2] = el)}
                                className="text-[12vh] text-white font-semibold leading-none"
                            >
                                PRODUCTS
                            </h1>
                        </div>
                        <h4
                            ref={(el) => (textLines.current[3] = el)}
                            className="text-[#FFC099] text-lg tracking-wider"
                        >
                            Oak, beech, ash
                            <br />
                            <span className="font-bold">1700 CZK</span> per m3
                        </h4>
                        <button className="order-button rounded-full w-fit px-10 py-1 bg-[#728BAD] text-lg font-semibold text-white hover:bg-[#728bbd]">
                            Order
                        </button>
                    </div>
                    <div className="w-[50%] h-full relative">
                        <img
                            ref={(el) => (imagesRef.current[0] = el)}
                            src={images.hero2}
                            alt="Hero 2"
                            className="h-44 absolute top-10 right-32 object-cover"
                            loading="lazy"
                        />
                        <img
                            ref={(el) => (imagesRef.current[1] = el)}
                            src={images.hero1}
                            alt="Hero 1"
                            className="h-44 absolute bottom-40 left-32 object-cover"
                            loading="lazy"
                        />
                        <img
                            ref={(el) => (imagesRef.current[2] = el)}
                            src={images.hero3}
                            alt="Hero 3"
                            className="h-44 absolute bottom-10 right-32 object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Wood Details */}
            <WoodDetails />

            {/* Our Work */}
            <OurWork />

            {/* Advantage Working with Us */}
            <AdvantageWorkWithUs />

            {/* About Us */}
            <AboutUs />

            {/* Any Questions */}
            <AnyQuestions />
        </>
    );
};

export default Home;
