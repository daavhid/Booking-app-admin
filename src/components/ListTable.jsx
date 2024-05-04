import React from 'react'
import img1 from '../assets/img1.webp'


const ListTable = () => {
    const data = [
        {
            trackingId:'#12345hh',
            product:<span className='flex items-center gap-3'><img src={img1} className='w-8 h-8 object-cover rounded-full'/>playStation5</span>,
            customer:'John Smith',
            date:'1 March',
            amount:'$450',
            payment:'cash on delivery',
            status:'pending'
        },
        {
            trackingId:'#12345hh',
            product:<span className='flex items-center gap-3'><img src={img1} className='w-8 h-8 object-cover rounded-full'/>playStation5</span>,
            customer:'John Smith',
            date:'1 March',
            amount:'$450',
            payment:'cash on delivery',
            status:'approved'
        },
        {
            trackingId:'#134ed567',
            product:<span className='flex items-center gap-3'><img src={img1} className='w-8 h-8 object-cover rounded-full'/>playStation5</span>,
            customer:'John Smith',
            date:'1 March',
            amount:'$450',
            payment:'cash on delivery',
            status:'pending'
        },
        {
            trackingId:'#1438456',
            product:<span className='flex items-center gap-3'><img src={img1} className='w-8 h-8 object-cover rounded-full'/>playStation5</span>,
            customer:'John Smith',
            date:'1 March',
            amount:'$450',
            payment:'cash on delivery',
            status:'pending'
        },
        {
            trackingId:'#1e34f677',
            product:<span className='flex items-center gap-3'><img src={img1} className='w-8 h-8 object-cover rounded-full'/>playStation5</span>,
            customer:'John Smith',
            date:'1 March',
            amount:'$450',
            payment:'cash on delivery',
            status:'approved'
        },
        {
            trackingId:'#13e45655',
            product:<span className='flex items-center gap-3'><img src={img1} className='w-8 h-8 object-cover rounded-full'/>playStation5</span>,
            customer:'John Smith',
            date:'1 March',
            amount:'$450',
            payment:'cash on delivery',
            status:'pending'
        },
    ]
  return (
    <div className='shadow-xl px-6 py-5 rounded-xl'>
        <p className='text-gray-500 font-semibold py-3'>Latest Transaction</p>
        <table className='w-full  shadow-xl'>
            <thead>
                <tr className=''>
                    <th className='text-left px-4 font-normal text-xl text-gray-500'>Tracking ID</th>
                    <th className='text-left font-normal text-xl text-gray-500'>Product</th>
                    <th className='text-left font-normal text-xl text-gray-500'>Customer</th>
                    <th className='text-left font-normal text-xl text-gray-500'>Date</th>
                    <th className='text-left font-normal text-xl text-gray-500'>Amount</th>
                    <th className='text-left font-normal text-xl text-gray-500'>Payment Method</th>
                    <th className='text-left font-normal text-xl text-gray-500'>Status</th>
                </tr>
            </thead>
            <tbody className=''>
                {data.map((item,key)=>{
                    console.log(item)
                    return(
                        <tr key={key} className='border peer border-gray-100 first:border-t-0 '>
                            <td className='font-light text-gray-600  py-4 pl-4'>{item.trackingId}</td>
                            <td className='font-light text-gray-600  capitalize'>{item.product}</td>
                            <td className='font-light text-gray-600  capitalize'>{item.customer}</td>
                            <td className='font-light text-gray-600  capitalize'>{item.date}</td>
                            <td className='font-light text-gray-600  capitalize'>{item.amount}</td>
                            <td className='font-light text-gray-600  capitalize'>{item.payment}</td>
                            <td className={`font-light text-gray-600  capitalize `}><span className={`p-1.5 rounded-lg ${item.status==='pending'?'bg-yellow-100':'bg-green-100'}`}>{item.status}</span></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ListTable