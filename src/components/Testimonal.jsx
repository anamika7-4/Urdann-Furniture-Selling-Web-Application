import React from 'react'

const Testimonal = () => {
    return (
        <div className='h-[80vh]'>
            <h1 className='font-medium text-4xl px-160'>Testimonal</h1>
            <div className='w-20 h-1 bg-orange-600 relative left-170 top-2'></div>
            <div className='px-50 py-50 grid grid-cols-3 gap-10'>
                <div className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua.</div>
                <div className='text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua.
                    {/* <div className='w-90 h-70 border-2 border-gray-600 bg-white absolute left-140 top-450'></div> */}
                </div>
                <div className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut labo et dolore magna aliqua.</div>
           </div>
        </div>

    )
}

export default Testimonal
