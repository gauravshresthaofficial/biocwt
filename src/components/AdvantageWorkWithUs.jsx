import React from 'react'
import workimage from '../assets/workimage.svg'

const AdvantageWorkWithUs = () => {
    return (
        <section>
            <div className="h-screen w-screen flex flex-col justify-center text-white gap-10">
                <div className="ml-[10vw] mt-[12vh]">
                    <h2 className='capitalize text-[8vh] font-bold leading-tight pl-12'>Advantage<br />Working with US</h2>
                </div>
                <div className="grow w-full flex flex-col items-center gap-10">
                    <div className='flex gap-10 items-center w-[80vw] '>
                        <img src={workimage} alt="" className='h-[50vh]' />
                        <div className='flex justify-between flex-col h-full py-4 w-[40%]'>
                            <p className='text-lg font-medium pl-12'>In-house carpentry production</p>
                            <p className='text-lg font-medium pl-12'>We only treat wood with environmentally friendly and safe products</p>
                            <p className='text-lg font-medium pl-12'>Prices from the manufacturer, no extra charges</p>
                        </div>
                    </div>
                    <button className='rounded-full w-fit px-24 py-1.5 bg-[#728BAD] text-lg font-semibold text-white hover:bg-[#728bbd]'>Receive a Consultantion</button>
                </div>
            </div>
        </section>
    )
}

export default AdvantageWorkWithUs
