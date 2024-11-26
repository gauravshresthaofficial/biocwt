import React, { useContext } from 'react'
import { ImageContext } from '../context/ImageContext'

import { FiPhoneCall } from 'react-icons/fi'
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5'
// import logo from "../assets/logo.svg"

const Footer = () => {

    const { images } = useContext(ImageContext)

    return (
        <div className='flex flex-col gap-10 px-20 py-10 text-white text-lg'
            style={{
                boxShadow: "0 -4px 30px rgba(255, 255, 255, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.1)"
            }} >
            <div className='flex items-center gap-20'>
                <img src={images.logo} alt="logo" className='h-14 cursor-pointer' />
                <p className='flex items-center'><FiPhoneCall className='inline-block mr-3' />+420 000 000 000</p>
                <p className='flex items-center'><IoLocationOutline className='inline-block mr-3 w-6 h-6' />Na Plzeňce 1166/0
                    150 00</p>
            </div>
            <div className='flex gap-20 text-sm'>
                <p>
                    Privacy Policy
                </p>

                <p>This design is not own by me. <a href="https://www.figma.com/design/Cr69eIm21YYC7dlRuwNuEL/wood-product-services-website-(Community)?node-id=0-1&node-type=canvas&t=Vqx34Xij3E6EYuj2-0"
                    className='text-yellow-700 underline-offset-4 underline hover:scale-110 hover:text-yellow-500'>View Design in Figma</a>
                </p>
            </div>
        </div>
    )
}

export default Footer
