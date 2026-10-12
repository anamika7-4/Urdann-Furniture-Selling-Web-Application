import React from 'react'

const Deal = () => {
  return (
    <div className='px-50 py-3'>
      <h1 className='font-medium uppercase text-2xl'>Deal of The Day</h1>
      <div className='h-1 w-150 bg-gray-300 relative bottom-3 left-60'></div>
      <div className='grid grid-cols-4 py-10 gap-8'>
        <div>
          <img src="product-1.png" alt="image" />
          <h2 className='py-5 text-xl'>New Modern Sofa Set</h2>
          <h2 className='text-gray-500 text-xl'>$25.89 <span className='text-red-500'>20.25</span></h2>

        </div>
        <div>
          <img src="product-2.png" alt="image" />
          <h2 className='py-5 text-xl'>New Modern Sofa Set</h2>
          <h2 className='text-gray-500 text-xl '>$50.25</h2>

        </div>
        <div>
          <img src="product-3.png" alt="image" />
          <h2 className='py-5 text-xl' >Easy Modern Chair</h2>
          <h2 className='text-gray-500 text-xl'>$45.00 <span className='text-red-500'>40.00</span></h2>

        </div>
        <div>
          <img src="product-4.png" alt="image" />
          <h2 className='py-5 text-xl'>Stylish Swing Chair</h2>
          <h2 className='text-gray-500 text-xl '>$30.25</h2>

        </div>


      </div>
    </div>
  )
}

export default Deal
