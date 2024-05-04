import React from 'react'
import { MdKeyboardArrowUp, MdMonetizationOn, MdPerson, MdShoppingCart, MdWallet } from 'react-icons/md'

const Widget = ({type}) => {
    let data;
    switch(type){
        case 'users':
            data={
                title:'USERS',
                isMoney:false,
                text:'See all users',
                icon:<MdPerson className='text-red-500 text-xl '/>,
                bgCol:'bg-red-100'
            }
            break
        case 'orders':
            data={
                title:'ORDERS',
                isMoney:false,
                text:'View all orders',
                icon:<MdShoppingCart className='text-yellow-500 text-xl '/>,
                bgCol:'bg-yellow-100'
            }
            break
        case 'earnings':
            data={
                title:'EARNINGS',
                isMoney:true,
                text:'View all earnings',
                icon:<MdMonetizationOn className='text-green-500 text-xl '/>,
                bgCol:'bg-green-100'
            }
            break
        case 'balance':
            data={
                title:'MY BALANCE',
                isMoney:true,
                text:'See details',
                icon:<MdWallet className='text-red-500 text-xl '/>,
                bgCol:'bg-red-100'
            }
            break
        default:
            data = {}
    }

  return (
        <div className='shadow-lg flex flex-col gap-5 p-3 rounded-lg'>
            <div className='flex justify-between'>
                <h1 className='text-gray-300 font-semibold'>{data.title}</h1>
                <span className='flex items-center'><MdKeyboardArrowUp className='text-green-700 text-2xl'/>+2%</span>
            </div>
            <span className='text-3xl'>720</span>
            <span className='flex justify-between'><span className='relative after:absolute after:h-[2.5px] after:bottom-1.5 after:bg-gray-300 after:left-0 after:w-full text-gray-500 font-semibold text-sm'>{data.text}</span> <span className={`w-7 h-7 rounded-md ${data.bgCol} flex items-center justify-center`}>{data.icon}</span></span>
        </div>
    
  )
}

export default Widget