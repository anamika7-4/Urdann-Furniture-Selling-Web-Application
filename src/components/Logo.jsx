import React from 'react'

const Logo = () => {
  return (
    <div className='px-50 grid grid-cols-4 gap-3 h-[20vh]'>
      <div>
        <div>
            <h2 className='absolute left-70 top-522 text-xl font-normal'>Free Shipping</h2>
            <h3 className='absolute left-70 top-530 text-gray-500'>Free Shipping on all order</h3>
        </div>
        <div className='w-20 h-20 rounded-full bg-gray-100'>
        <img className='relative top-5 left-3'src="car.png" alt="image" />

        </div>
      </div>
      <div>
        <div>
            <h2 className='absolute left-145 top-522 text-xl font-normal'>Support 24/7</h2>
            <h3 className='absolute left-145 top-530 text-gray-500'>Support 24 hours a day</h3>
        </div>
        <div className='w-20 h-20 rounded-full bg-gray-100'>
        <img className='relative top-5 left-4'src="time.png" alt="image" />

        </div>
      </div>
      <div>
        <div>
            <h2 className='absolute left-215 top-522 text-xl font-normal'>Money Return</h2>
            <h3 className='absolute left-215 top-530 text-gray-500'>Back Guarantee Under</h3>
        </div>
        <div className='w-20 h-20 rounded-full bg-gray-100'>
        <img className='relative top-5 left-5'src="dollar.png" alt="image" />

        </div>
      </div>
      <div>
        <div>
            <h2 className='absolute left-285 top-522 text-xl font-normal'>Order Discount</h2>
            <h3 className='absolute left-285 top-530 text-gray-500'>Onevery order over $150</h3>
        </div>
        <div className='w-20 h-20 rounded-full bg-gray-100'>
        <img className='relative top-5 left-5'src="discount.png" alt="image" />

        </div>
      </div>
    </div>
  )
}

export default Logo
