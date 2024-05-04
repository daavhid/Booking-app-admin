import React from 'react'
import { MdArrowDownward, MdArrowDropDown, MdKeyboardArrowDown, MdKeyboardArrowUp, MdMenu, MdMoreVert } from 'react-icons/md'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Revenue = () => {
  return (
    <div className='flex justify-center mx-auto flex-col md:gap-3  text-gray-400 '>
        <div className='flex justify-between'>
            <h1 className='font-bold text-gray-400'>Total Revenue</h1>
            <MdMoreVert className='font-semibold text-xl'/>
        </div>
        <div className='flex items-center flex-col gap-3 '>
            <CircularProgressbar value={70} text='70%' className='md:w-[10rem] sm:w-[9rem] w-[7rem] '/>
            <span className='text-xl text-gray-500 font-medium'>Total sales made today</span>
            <span className=' md:text-4xl text:3xl  text-black'>$442</span>
            <span className='text-center sm:text-sm text-xs font-medium'>previous transactions processing. Last payments may not be included</span>
        </div>
        <div className='flex justify-between py-4 '>
            <div className='flex justify-center items-center flex-col'>
                <p>Target</p>
                <span className='flex items-center font-semibold text-red-400'><MdKeyboardArrowDown className='text-2xl'/>$12.4k</span>
            </div>
            <div className='flex items-center flex-col'>
                <p>Last week</p>
                <span className='flex items-center font-semibold text-green-500'><MdKeyboardArrowUp className='text-2xl'/>$12.4k</span>
            </div>
            <div className='flex items-center flex-col'>
                <p>Last Month</p>
                <span className='flex items-center font-semibold text-red-400'><MdKeyboardArrowDown className='text-2xl'/>$12.4k</span>
            </div>

        </div>
    </div>
  )
}

export default Revenue