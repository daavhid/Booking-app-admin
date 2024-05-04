import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MdTableBar, MdTableChart, MdTableRows } from 'react-icons/md';

const data = [
    {name:'January',total:1200,firm:200},
    {name:'Febraury',total:1000,firm:2000},
    {name:'March',total:5000,firm:300},
    {name:'April',total:700,firm:400},
    {name:'May',total:3200},
    {name:'June',total:200},

]

const Chart = ()=>{

    return (
        <>
            <p className='text-gray-500 px-4 font-semibold text-xl'>
                Last 6 months (Revenue)
            </p>
            <ResponsiveContainer width='100%'   className={`!mx-auto !h-[90%] ! !w-[100%]`}>
                    <AreaChart width='100%' height={250} data={data} className='w-full'
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke='gray' className='!text-xs'/>
                            
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="firm" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
                    
                    </AreaChart>
            </ResponsiveContainer>
        </>
    );
  }

export default Chart
