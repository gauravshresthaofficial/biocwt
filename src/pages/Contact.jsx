import React from 'react'
import Footer from '../components/Footer'
import { FiPhoneCall } from 'react-icons/fi'
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5'

const Contact = () => {
    return (
        <div
            className={`min-h-screen w-screen flex flex-col justify-between text-white gap-10 pt-20`}
        >
            <div className="px-[10vw] mt-[12vh] w-full grow flex">
                {/* <div className='flex w-full pt-10 pl-12'> */}
                <div className='w-[50%] text-2xl flex gap-10 flex-col pl-12'>
                    <h2 className='capitalize text-[8vh] font-bold leading-tight'>Contact</h2>
                    <p className='flex items-center'><FiPhoneCall className='inline-block mr-3' />+420 000 000 000</p>
                    <p className='flex items-center'><IoLocationOutline className='inline-block mr-3 w-6 h-6' />Na Plzeňce 1166/0
                        150 00</p>
                </div>

                <div className='w-[50%] pb-10'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14135.69457285549!2d85.33342825323857!3d27.65783402531212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb175804d46333%3A0x407a3f6860e99df2!2sImadol%2C%20Mahalaxmi!5e0!3m2!1sen!2snp!4v1707874315649!5m2!1sen!2snp"
                        style={{ border: "0" }}
                        allowFullScreen={true}
                        loading="lazy"
                        className="shadow-md rounded-3xl h-full w-full"
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-label="Google Maps"
                    ></iframe>
                </div>
                {/* </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Contact
