import React from 'react'

const Banner1 = () => {
    return (
        <div className='px-50 py-10 grid grid-cols-2 gap-10 h-[60vh]'>
            <div>
                <img className='w-1000 h-70 relative'    src="banner-4.png" alt="image" />
                <h2 className='text-orange-400 font-medium text-xl absolute top-425 left-60 z-1 '>Sale 30%</h2>
                <h1 className='text-4xl font-medium absolute top-435 left-60 z-1'>New Furniture</h1>
                <h3 className='absolute top-445 left-60 z-1 '>Lorem ipsum dolor sit amet consecte<br></br> adipisicing elit sed do</h3>
                <button className='bg-orange-400 text-white pt-2 pb-2 pl-5 pr-5 absolute top-460 left-60 z-1'>
                    <h2>Shop Now</h2>
                </button>
            </div>
            <div>
                <h2><span className='relative top-10 left-12 z-1 text-gray-300 text-xl'>Up To 30%</span> <span className='relative bottom-5 z-1 left-35'><img src="sale.png" alt="image" /></span><span className='text-gray-300  relative bottom-18 z-1 left-70 text-2xl'>Every Item</span></h2>
                <img   className='h-70 relative bottom-36 ' src="banner-5.png" alt="image" />
            </div>

        </div>
    )
}

export default Banner1
