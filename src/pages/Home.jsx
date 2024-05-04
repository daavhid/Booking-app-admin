import React from 'react'
import Widget from '../components/Widget'
import Charts from '../components/Charts'
import Revenue from '../components/Revenue'
import ListTable from '../components/ListTable'

const Home = () => {
  return (
    <div className=''>
        <div className=' mx-auto  flex flex-col'>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-1 px-5'>
                <Widget type='users'/>
                <Widget type='orders'/>
                <Widget type='earnings'/>
                <Widget type='balance'/>
            </div>
            <div className='px-5 flex flex-col sm:flex-row  py-8 gap-1 md:gap-2'>
                <div className=' px-6 py-4  lg:basis-[35%] md:basis-[40%] basis-[50%]  shadow-xl rounded-2xl border'>

                    <Revenue/>
                </div>
                <div className='grow  sm:my-0 shadow-xl rounded-2xl border md:h-[500px] h-[400px]'>
                    <Charts/>
                </div>
            </div>
            {/* <div className='px-5 py-2'>
                <ListTable/>
            </div> */}
        </div>
    </div>
  )
}

export default Home