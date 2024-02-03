import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Header() {
  const [toggle,setToggle] = useState(false);
  return (
    <div className='bg-sky-700 p-4'>
      <div className="max-w-[1240px] mt-2 py-2 mx-auto flex justify-between items-center ">
        <div className='text-3xl font-bold'>
          Sports Careers
        </div>
        {
          toggle ?
          <IoMdMenu onClick={()=> setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>
          :
          <IoClose  onClick={()=> setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>
        }
       
        
        <ul className=' hidden md:flex text-white gap-10'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
          <li>Services</li>
        </ul>

    {/* for responsive menu */}

        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[90px]
        ${toggle ?'left-[0]' : 'left-[-100%]'}`}>
          <li className='p-5'>Home</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Contact</li>
          <li className='p-5'>Portfolio</li>
          <li className='p-5'>Services</li>
        </ul>
      </div>
    </div>
  )
}

export default Header