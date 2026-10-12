import React from 'react'

const Summer = () => {
  return (
    <div className={`h-[80vh]  bg-[url('slider-bg-1.jpg')] bg-cover flex   `}>
      <div className='px-50 flex flex-1'>
        <div className='tracking-widest'>
          <div className='w-[55px] h-1 bg-[#E97730] mt-45  '>
          </div>
          <h2 className=' relative bottom-3 left-18 font-semibold'>NEW ARRIVAL</h2>
          <h1 className='text-6xl font-normal'>Summer<br></br>Collection</h1>
          <button className='bg-[#E97730] text-white pt-5 pb-5 pl-10 pr-10 mt-8 hover:bg-black'>
            <h3>SHOP NOW</h3>
          </button>
        </div>

      </div>
      <div>
        <img className='relative right-50 top-25' src="slider-img-1.png" alt="image" />
        <div className='w-20 h-20 bg-gray-200 rounded-full border-amber-50 border-2 absolute bottom-110 right-50 '>
          <h1 className='text-orange-400 text-center  font-semibold relative top-3'><span className='font-bold text-2xl'>30%</span><br></br> OFF</h1>
        </div>
      </div>

    </div>











  )
}

export default Summer
