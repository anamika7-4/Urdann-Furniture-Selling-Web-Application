import React from 'react'

const Latest = () => {
    return (
        <div className='px-50 py-10 h-[80vh]'>
            <h1 className='flex  justify-center text-3xl font-medium'>Latest News</h1>
            <div className='grid grid-cols-3 gap-10'>
                <div>
                    <img className='py-10' src="blog-1.png" alt="image" />
                    <h1 className='text-xl text-gray-500'>Furniture, By: Admin</h1>
                    <h1 className='text-2xl py-2  hover:text-orange-600'>Lorem ipsum dolor consectet adipisicing elit</h1>
                    <h1 className='underline'>Read More</h1>
                </div>
                <div>
                    <img className='py-10' src="blog-2.png" alt="image" />
                    <h1 className='text-xl text-gray-500'>Furniture, By: Admin</h1>
                    <h1 className='text-2xl py-2  hover:text-orange-600'>Morbi dignissim sit amet velit id vestibulum.</h1>
                    <h1 className='underline'>Read More</h1>
                </div>
                <div>
                    <img className='py-10' src="blog-3.png" alt="image" />
                    <h1 className='text-xl text-gray-500'>Furniture, By: Admin</h1>
                    <h1 className='text-2xl py-2 hover:text-orange-600'>Fusce euismod varius tellus, nec molestie turpis.</h1>
                    <h1 className='underline'>Read More</h1>
                </div>
            </div>
        </div>
    )
}

export default Latest
