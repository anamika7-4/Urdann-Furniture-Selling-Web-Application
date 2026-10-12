import React from 'react'

const Bg = () => {
    return (
        <div className='px-50 '>
            <img className='relative py-10' src="bg-1.png" alt="image" />

            <div className='px-20  '>
                <h1 className='absolute z-1 top-690  text-4xl font-medium '>New Dining<br></br>
                    Chair Set         </h1>
                    <div className='w-25 h-1 bg-orange-600 absolute top-720'></div>
                    <h1 className='absolute top-725 text-3xl font-normal text-orange-600'>Up To 30% Off</h1>
                    <button className='bg-orange-500 text-white absolute top-740 p-2 pl-5 pr-5'>Shop Now</button>
            </div>
        </div>
    )
}

export default Bg
