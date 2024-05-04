import React from 'react'
import {MdAddChart, MdCreditCard, MdDashboard, MdExitToApp, MdLocalShipping, MdNotifications, MdNotificationsNone, MdOutlineAccountCircle, MdOutlineNotifications, MdOutlinePsychology, MdOutlineSettingsSystemDaydream, MdPersonOutline, MdSettings, MdSettingsApplications, MdSettingsSystemDaydream, MdStore} from 'react-icons/md'
import {FaFirstOrder, FaUser} from 'react-icons/fa6'

const Sidebar = () => {
  return (
    <div className='md:min-w-[150px] w-[200px] bg-gray-100 md:bg-transparent  z-10 opacity-100 min-h-[100vh] fixed top-0 left-0 md:sticky md:top-0 md:w shadow-md border-gray-600/45 '>
        <div className='text-center border border-r-0  py-3 '>

            <span className='font-bold text-purple-800 '>XAMI<span className=' text-purple-400'>ADMIN</span></span>
        </div>
        <div className='py-3 md:py-6 px-3 flex flex-col gap-1'>
            <div>
                <p className='font-medium text-xs text-gray-400'>MAIN</p>
                <div className='flex items-center gap-3 px-3 py-2  hover:bg-purple-300/50 cursor-pointer'>
                    <MdDashboard className='text-xl text-purple-500'/>
                    <span className='text-gray-500 text-sm '>Dashboard</span>

                </div>
            </div>
            <div className=''>
                <p className='font-medium text-xs text-gray-400'>LISTS</p>
                <div className='flex items-center gap-3 px-3 py-2 hover:bg-purple-300/50 cursor-pointer'>
                    <MdPersonOutline className='text-xl text-purple-500 '/>
                    <span className='text-gray-500 text-sm'>Users</span>
                </div>
                <div className='flex items-center gap-3 px-3 py-2  hover:bg-purple-300/50 cursor-pointer'>
                    <MdStore className='text-xl text-purple-500' />
                    <span className='text-gray-500 text-sm'>Products</span>

                </div>
                <div className='flex items-center gap-3 px-3 py-2  hover:bg-purple-300/50 cursor-pointer'>
                    <MdCreditCard className='text-xl text-purple-500'/>
                    <span className='text-gray-500 text-sm'>Orders</span>

                </div>
                <div className='flex items-center gap-3 px-3 py-2  hover:bg-purple-300/50 cursor-pointer'>
                    <MdLocalShipping className='text-xl text-purple-500'/>
                    <span className='text-gray-500 text-sm'>Delivery</span>

                </div>
            </div>
            <div className=''>
                <p className='font-medium text-xs text-gray-400'>USEFUL</p>
                <div className='flex items-center gap-3 px-3 py-2 hover:bg-purple-300/50 cursor-pointer'>
                    <MdAddChart className='text-xl text-purple-500 '/>
                    <span className='text-gray-500 text-sm'>Stats</span>
                </div>
                <div className='flex items-center gap-3 px-3 py-2  hover:bg-purple-300/50 cursor-pointer'>
                    <MdNotificationsNone className='text-xl text-purple-500' />
                    <span className='text-gray-500 text-sm'>Notifications</span>

                </div>
            </div>
            <div className=''>
                <p className='font-medium text-xs text-gray-400'>SERVICES</p>
                <div className='flex items-center gap-3 px-3 py-2 hover:bg-purple-300/50 cursor-pointer'>
                    <MdOutlineSettingsSystemDaydream className='text-xl text-purple-500 '/>
                    <span className='text-gray-500 text-sm'>System Health</span>
                </div>
                <div className='flex items-center gap-3 px-3 py-2  hover:bg-purple-300/50 cursor-pointer'>
                    <MdOutlinePsychology className='text-xl text-purple-500' />
                    <span className='text-gray-500 text-sm'>Logs</span>

                </div>
                <div className='flex items-center gap-3 px-3 py-2  hover:bg-purple-300/50 cursor-pointer'>
                    <MdSettingsApplications className='text-xl text-purple-500' />
                    <span className='text-gray-500 text-sm'>Settings</span>

                </div>
            </div>
            <div className=''>
                <p className='font-medium text-xs text-gray-400'>USER</p>
                <div className='flex items-center gap-3 px-3 py-2 hover:bg-purple-300/50 cursor-pointer'>
                    <MdOutlineAccountCircle className='text-xl text-purple-500 '/>
                    <span className='text-gray-500 text-sm'>Profile</span>
                </div>
                <div className='flex items-center gap-3 px-3 py-2  hover:bg-purple-300/50 cursor-pointer'>
                    <MdExitToApp className='text-xl text-purple-500' />
                    <span className='text-gray-500 text-sm'>Logout</span>
                </div>
               
            </div>
            <div className=''>
                <p className='font-medium text-xs text-gray-400'>THEME</p>
                <div className='flex gap-4 py-2'>
                    <div className=' px-4 py-4  bg-gray-200 border-2 border-gray-300 rounded-md cursor-pointer'></div>
                    <div className=' px-4 py-4 bg-gray-800 border-2 border-gray-300 rounded-md cursor-pointer'></div>
                </div>
               
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar