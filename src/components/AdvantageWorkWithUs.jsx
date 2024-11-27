import React, { useContext, useEffect, useRef } from 'react';
import { ImageContext } from '../context/ImageContext';
import gsap from 'gsap';

const AdvantageWorkWithUs = () => {
    const { images } = useContext(ImageContext);

    // Refs for animation
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const imageRef = useRef(null);
    const textRefs = useRef([]);
    const buttonRef = useRef(null);

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
                imageRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.5' // Overlap with the heading animation
            )
            .fromTo(
                textRefs.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.3, duration: 1, ease: 'power3.out' },
                '-=0.5'
            )
            .fromTo(
                buttonRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
                '-=0.5'
            );
    }, []);

    return (
        <section ref={sectionRef}>
            <div className="h-screen w-screen flex flex-col justify-center text-white gap-10">
                {/* Heading */}
                <div className="ml-[10vw] mt-[12vh]">
                    <h2
                        ref={headingRef}
                        className="capitalize text-[8vh] font-bold leading-tight pl-12"
                    >
                        Advantage
                        <br />
                        Working with US
                    </h2>
                </div>
                {/* Content */}
                <div className="grow w-full flex flex-col items-center gap-10">
                    <div className="flex gap-10 items-center w-[80vw]">
                        {/* Image */}
                        <img
                            ref={imageRef}
                            src={images.workimage}
                            alt="Work"
                            className="h-[50vh]"
                        />
                        {/* Text */}
                        <div className="flex justify-between flex-col h-full py-4 w-[40%]">
                            {[
                                'In-house carpentry production',
                                'We only treat wood with environmentally friendly and safe products',
                                'Prices from the manufacturer, no extra charges',
                            ].map((text, index) => (
                                <p
                                    key={index}
                                    ref={(el) => (textRefs.current[index] = el)}
                                    className="text-lg font-medium pl-12"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                    {/* Button */}
                    <button
                        ref={buttonRef}
                        className="rounded-full w-fit px-24 py-1.5 bg-[#728BAD] text-lg font-semibold text-white hover:bg-[#728bbd]"
                    >
                        Receive a Consultation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AdvantageWorkWithUs;
