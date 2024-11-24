import React from 'react'

import { FiPhoneCall } from 'react-icons/fi'
import { IoLocationOutline, IoLocationSharp } from 'react-icons/io5'
import logo from "../assets/logo.svg"

const Footer = () => {
    return (
        <div className='flex flex-col gap-10 px-20 py-10 text-white text-lg'
            style={{
                boxShadow: "0 -4px 30px rgba(255, 255, 255, 0.4), inset 0 2px 2px rgba(255, 255, 255, 0.1)"
            }} >
            <div className='flex items-center gap-20'>
                <img src={logo} alt="logo" className='h-14 cursor-pointer' />
                <p className='flex items-center'><FiPhoneCall className='inline-block mr-3' />+420 000 000 000</p>
                <p className='flex items-center'><IoLocationOutline className='inline-block mr-3 w-6 h-6' />Na Plzeňce 1166/0
                    150 00</p>
            </div>
            <p>
                Privacy Policy
            </p>
        </div>
    )
}

export default Footer
