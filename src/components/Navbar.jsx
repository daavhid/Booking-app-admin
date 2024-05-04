import React from 'react'
import { MdDarkMode, MdOutlineChatBubbleOutline, MdOutlineDarkMode, MdOutlineFullscreenExit, MdOutlineLanguage, MdOutlineList, MdOutlineNotificationsActive, MdOutlineNotificationsNone, MdOutlineSearch } from 'react-icons/md'
import img1 from '../assets/img1.webp'

const Navbar = () => {
  return (
    <div className='flex px-5 border-l-0 border-r-0 items-center justify-between w-full border'>
        <div className='  py-3 '>
            <span className='flex items-center border'><input className='outline-none' type="text" name="" id="" /><MdOutlineSearch/></span>
        </div>
        <div className='flex items-center gap-6'>
            <span className='flex items-center font-thin'><MdOutlineLanguage className='text-xl'/>
            English</span>
            
            <MdOutlineDarkMode className='text-xl'/>
            <MdOutlineFullscreenExit className='text-xl'/>
            <div className='relative'>
                <MdOutlineNotificationsNone className='text-xl'/>
                <div className='bg-red-700 text-white flex items-center justify-center font-semibold text-xs rounded-full w-4 h-4 absolute -top-2 -right-1'>1</div>
            </div>
            <div className="relative">
                <MdOutlineChatBubbleOutline className='text-xl'/>
                <div className='bg-red-700 text-white flex items-center justify-center font-semibold text-xs rounded-full w-4 h-4 absolute -top-2 -right-1'>1</div>
            </div>
            <MdOutlineList className='text-xl'/>
            <div>
                <img src={img1} alt="food" className='w-8 h-8 object-cover rounded-full' />
            </div>
        </div>
    </div>
  )
}

export default Navbar