import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const detailsRef = useRef([]);
    const mapRef = useRef(null);

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
                detailsRef.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: 'power3.out' },
                '-=0.5' // Overlap with heading animation
            )
            .fromTo(
                mapRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.5'
            );
    }, []);

    return (
        <div
            ref={sectionRef}
            className="min-h-screen w-screen flex flex-col justify-between text-white gap-10 pt-20"
        >
            <div className="px-[10vw] mt-[12vh] w-full grow flex">
                <div className="w-[50%] text-2xl flex gap-10 flex-col pl-12">
                    <h2
                        ref={headingRef}
                        className="capitalize text-[8vh] font-bold leading-tight"
                    >
                        Contact
                    </h2>
                    <p
                        ref={(el) => (detailsRef.current[0] = el)}
                        className="flex items-center"
                    >
                        <FiPhoneCall className="inline-block mr-3" />
                        +420 000 000 000
                    </p>
                    <p
                        ref={(el) => (detailsRef.current[1] = el)}
                        className="flex items-center"
                    >
                        <IoLocationOutline className="inline-block mr-3 w-6 h-6" />
                        Na Plzeňce 1166/0 150 00
                    </p>
                </div>

                <div className="w-[50%] pb-10">
                    <iframe
                        ref={mapRef}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14135.69457285549!2d85.33342825323857!3d27.65783402531212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb175804d46333%3A0x407a3f6860e99df2!2sImadol%2C%20Mahalaxmi!5e0!3m2!1sen!2snp!4v1707874315649!5m2!1sen!2snp"
                        style={{ border: '0' }}
                        allowFullScreen={true}
                        loading="lazy"
                        className="shadow-md rounded-3xl h-full w-full"
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-label="Google Maps"
                    ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
