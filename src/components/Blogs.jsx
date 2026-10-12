import React from 'react'

const Blogs = () => {
  return (
    <div className='bg-[#F2F2F2] h-[60vh]'>
      <div className='py-39 flex justify-between items-center '>
        <img src="breadcrumb-1.png" alt="image" />
        <div className='h-78 w-78  rounded-full bg-white relative'>
            <h1 className='absolute left-26 top-20 text-5xl font-normal'>Blog</h1>
            <h3 className='absolute left-20 top-37'><span className='hover:bg-yellow-600 '>Home</span> / <span className='text-gray-500'>Blog standered</span> </h3>
        </div>
        <img src="breadcrumb-2.png" alt="image" />
        
      </div>
    </div>
  )
}

export default Blogs
