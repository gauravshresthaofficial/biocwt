import React, { useContext, useEffect, useRef } from 'react';
import { ImageContext } from '../context/ImageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = ({ padding = 0 }) => {
    const { images } = useContext(ImageContext);

    // Refs for animations
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const imageRefs = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%', // Start animation when 80% of the section enters the viewport
                end: 'bottom 20%', // End animation when 20% of the section is visible
                toggleActions: 'play none none reverse',
            },
        });

        tl.fromTo(
            headingRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
            .fromTo(
                textRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.5' // Overlap with the heading animation
            )
            .fromTo(
                imageRefs.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'back.out(1.7)' },
                '-=0.5'
            );
    }, []);

    return (
        <section ref={sectionRef} className={`h-screen pt-${padding}`}>
            <div className="h-full w-screen flex flex-col justify-center text-white gap-10 relative">
                <div className="h-[75vh] w-[90vw] mr-[10vw] bg-[#1E0C06] rounded-tr-3xl rounded-br-3xl flex flex-row shadow-[3px_3px_20px_rgb(0,0,0,0.2)] shadow-[#503a2c] relative">
                    {/* Heading */}
                    <div className="ml-[10vw] mt-[2vh] flex flex-col gap-16">
                        <h2
                            ref={headingRef}
                            className="capitalize text-[8vh] pl-12 font-bold leading-tight"
                        >
                            About Us
                        </h2>
                        {/* Text */}
                        <p
                            ref={textRef}
                            className="w-[40%] pl-12 text-wrap leading-relaxed"
                        >
                            <span className="font-bold">BIO CWT</span> - We manufacture solid wood
                            products according to individual drawings. We make chairs, armchairs,
                            wardrobes, beds, and much more in our own workshop, equipped with all
                            the necessary industrial equipment.
                        </p>
                    </div>

                    {/* Images */}
                    <img
                        ref={(el) => (imageRefs.current[0] = el)}
                        src={images.work1}
                        alt="Work 1"
                        className="absolute h-36 top-12 right-24"
                    />
                    <img
                        ref={(el) => (imageRefs.current[1] = el)}
                        src={images.work2}
                        alt="Work 2"
                        className="absolute h-52 top-24 right-36 z-10 border-[12px] rounded-[28px] border-[#1E0C06]"
                    />
                    <img
                        ref={(el) => (imageRefs.current[2] = el)}
                        src={images.work3}
                        alt="Work 3"
                        className="absolute h-36 bottom-12 right-24"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
