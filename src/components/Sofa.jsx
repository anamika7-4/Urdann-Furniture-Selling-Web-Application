import React from 'react'

const Sofa = () => {
    return (
        <div className='py-10'>
            <div className='h-[70vh] '>
                <img src="bg-2.png" alt="" />
            </div>
            <div className='flex justify-center items-center relative bottom-100 gap-3 font-medium'>
                <div className='w-15 h-1 bg-orange-600'></div>
                <h1 className='uppercase text-white'>Up To 40% Off</h1>
                <div className='w-15 h-1 bg-orange-600'></div>
            </div>
            <div className='text-orange-600 text-5xl absolute top-330 font-bold left-150'>New Furniture<br></br><span className='absolute left-20'>Sofa Set</span></div>
            <button className='pl-10 pr-10 pt-2 pb-2 bg-orange-600 text-white absolute top-360 left-173'>
                Shop Now
            </button>
        </div>
    )
}

export default Sofa
