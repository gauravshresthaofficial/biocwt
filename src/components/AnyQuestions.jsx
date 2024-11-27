import React, { useContext, useEffect, useRef } from 'react';
import { ImageContext } from '../context/ImageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const AnyQuestions = () => {
    const { images } = useContext(ImageContext);

    // Refs for animation
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const formFieldsRef = useRef([]);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
        });

        // Animations
        tl.fromTo(
            headingRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
            .fromTo(
                formFieldsRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out' },
                '-=0.5' // Overlap with heading animation
            )
            .fromTo(
                textRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.5'
            )
            .fromTo(
                imageRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.5'
            );
    }, []);

    return (
        <section ref={sectionRef}>
            <div className="w-screen flex flex-col justify-center text-white overflow-hidden relative">
                {/* Heading */}
                <div className="ml-[10vw] mt-[12vh] mb-10">
                    <h2
                        ref={headingRef}
                        className="capitalize text-[8vh] font-bold leading-tight pl-12"
                    >
                        Any Questions?
                    </h2>
                </div>

                {/* Form and Text */}
                <div className="flex justify-between w-[90vw] mx-auto grow relative overflow-hidden pb-10">
                    <div className="w-[50%] h-full px-20 flex gap-4 flex-col">
                        <input
                            ref={(el) => (formFieldsRef.current[0] = el)}
                            type="text"
                            placeholder="Name"
                            className="rounded-3xl w-full bg-inherit border border-[#3765ef] p-2.5 px-8 focus:border-[#FFC099] bg-slate-100 outline-none"
                        />

                        <input
                            ref={(el) => (formFieldsRef.current[1] = el)}
                            type="text"
                            placeholder="Your Telephone Number"
                            className="rounded-3xl w-full bg-inherit border border-[#3765ef] p-2.5 px-8 focus:border-[#FFC099] bg-slate-100 outline-none"
                        />

                        <textarea
                            ref={(el) => (formFieldsRef.current[2] = el)}
                            name=""
                            rows={6}
                            id=""
                            className="rounded-3xl w-full bg-inherit border border-[#3765ef] p-2.5 px-8 focus:border-[#FFC099] bg-slate-100 outline-none"
                        ></textarea>

                        <button
                            ref={(el) => (formFieldsRef.current[3] = el)}
                            className="rounded-full w-fit px-10 py-1 bg-[#728BAD] text-lg font-semibold text-white hover:bg-[#728bbd]"
                        >
                            Send
                        </button>
                    </div>

                    <div ref={textRef} className="w-[50%] px-20">
                        <p className="font-medium">
                            Write to us and we will be sure to answer all your questions and give
                            you a comprehensive consultation.
                        </p>
                    </div>

                    {/* Image */}
                    <img
                        ref={imageRef}
                        src={images.imagemiddle}
                        alt=""
                        className="absolute right-24 -bottom-56 h-[30rem]"
                    />
                </div>

                <Footer />
            </div>
        </section>
    );
};

export default AnyQuestions;
