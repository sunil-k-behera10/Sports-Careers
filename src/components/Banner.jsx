import React from 'react'
import { ReactTyped } from "react-typed";


export default function Banner() {
  return (
    <div className='bg-sky-700 w-full py-[80px]'>
        <div className='max-w-[1240px] my-[80px] mx-auto text-center font-bold '>
          <div className='text-xl md:text-3xl md:p-[16px] '>
            We build Careers
          </div>
          <div className='text-white md:text-[100px] md:p-[2px] '>
            Learn with Us
          </div>
          <div className='text-[20px] md:text-[50px] md:p-[2px] '>
            Grow 
            <ReactTyped className='pl-3'
            strings={["with Full Stack Development","Machine Learning","Digital Marketing"]} 
            typeSpeed={40} 
            backSpeed={50}
            loop={true} />
          </div>
        </div>
    </div>
  )
}
