import React from 'react'

const Hot = () => {
    return (
        <div className='px-50 py-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-semibold'>Hot Products</h1>
                <div className='flex justify-between items-center gap-5 text-xl text-gray-500 hover:text-orange-600 '>
                    <h2>New Arrival</h2>
                    <h2>Best Sellers</h2>
                    <h2>Sale Items</h2>
                </div>
            </div>
            <div className='py-10 grid grid-cols-4 gap-8'>
                <div>
                    <img src="product-5.png" alt="image" />
                    <h2 className='py-5 text-xl font-normal'>Interior moderno render</h2>
                    <h2 className='text-gray-400'>$25.89<span className='text-red-500'> $20.25</span></h2>
                </div>
                <div>
                    <img src="product-6.png" alt="image" />
                    <h2 className='py-5 text-xl font-normal'>Stylish Dining Chairr</h2>
                    <h2 className='text-gray-400'>$50.25</h2>
                </div>
                <div>
                    <img src="product-7.png" alt="image" />
                    <h2 className='py-5 text-xl font-normal'>Interior moderno render</h2>
                    <h2 className='text-gray-400'>$25.89<span className='text-red-500'> $20.25</span></h2>
                </div>
                <div>
                    <img className='h-70'         src="cart-1.jpg" alt="image" />
                    <h2 className='py-5 text-xl font-normal'>Interior moderno render</h2>
                    <h2 className='text-gray-400'>$30.25</h2>
                </div>
               <div>
                    <img src="product-8.png" alt="image" />
                    <h2 className='py-5 text-xl font-normal'>Modern Swivel Chair</h2>
                    <h2 className='text-gray-400'>$25.89<span className='text-red-500'> $20.25</span></h2>
                </div>
                <div>
                    <img src="product-2.png" alt="image" />
                    <h2 className='py-5 text-xl font-normal'>New Modern Sofa Set</h2>
                    <h2 className='text-gray-400'>$50.25</h2>
                </div>
                <div>
                    <img src="product-3.png" alt="image" />
                    <h2 className='py-5 text-xl font-normal'>Easy Modern Chair</h2>
                    <h2 className='text-gray-400'>$25.89<span className='text-red-500'> $20.25</span></h2>
                </div>
                <div>
                    <img src="product-9.png" alt="" />
                    <h2 className='py-5 text-xl font-normal'>Modern Loungue Chair</h2>
                    <h2 className='text-gray-400'>$30.25</h2>
                </div>
            </div>
        </div>
    )
}

export default Hot
