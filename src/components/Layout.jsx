import React from 'react'
import  { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = () => {

  return (
    <>
        <div className='flex h-full  '>
            <div className='lg:basis-[15%]   '>
                {/* <Sidebar /> */}
            </div>
            <div className='lg:basis-[85%] mx-auto sm:px-6 px-0 flex item-center flex-col'>
                <Navbar/>
                <div className='py-6 mx-auto'>

                    <Outlet/>
                </div>
            </div>

            
        </div>
    </>
  )
}

export default Layout