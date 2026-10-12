import React from 'react'

const Single = () => {
    return (
        <div className='px-50 py-10 flex  h-[60vh]'>
            <div className='flex flex-1'>
                <img className='pl-5' src="single-product.png" alt="image" />
            </div>
            <div className='flex flex-1'>
                <h1 className='text-3xl font-semibold relative'>Modern Chair</h1>
                <h1 className='text-orange-600 font-medium text-2xl absolute top-578 right-171'>$20.25</h1>
                <h3 className='absolute top-590 left-190 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo <br></br>incididunt ut labore et dolore mt aliqua. Ut enim ad minim veniam, quis nostrud<br></br> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute<br></br> irure dolor in reprehenderit in voluptate</h3>
                <h2 className='absolute top-620 left-190 text-xl font-medium'>Color:</h2>

                <div className='w-4 h-4 bg-pink-700 absolute top-622 left-208'></div>
                <div className='w-4 h-4 bg-amber-600 absolute top-622 left-214'></div>
                <div className='w-4 h-4 bg-violet-800 absolute top-622 left-220'></div>
                <div className='flex  '>
                    <button className='bg-white text-xl text-gray-500 h-10 pl-3 pr-3 pt-2 pb-5 border-gray-500 border-2 absolute top-640 left-190'>
                        - 1 +
                    </button>
                    <button className='absolute top-640 bg-orange-500 text-white p-2 pl-10 pr-10 left-210'>
                        Add to cart
                    </button>
                    
                </div>


            </div>

        </div>
    )
}

export default Single
