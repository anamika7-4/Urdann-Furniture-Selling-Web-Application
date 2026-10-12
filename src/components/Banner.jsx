import React from 'react'

const Banner = () => {
    return (
        <div className='px-50 py-25 grid grid-cols-3 gap-8 '>
            <div>
                <h3 className='text-xs font-sans-serif font-semibold absolute top-220 left-55 z-1'>NEW ARRIVAL</h3>
                <h1 className='absolute top-225 left-55 z-1 text-2xl font-semibold'>Office Chair</h1>
                <h3 className='text-3 underline font-sans-serif font-semibold absolute top-235 left-55 z-1 '>Shop Now</h3>
                <img className='relative' src="banner-1.png" alt="image" />
                <div className='z-1 text-red-500 font-semibold text-2xl relative top-60 left-50'>-10</div>
                </div>
                <div>
                <h3 className='text-xs font-sans-serif font-semibold absolute top-220 left-150 z-1'>NEW ARRIVAL</h3>
                <h1 className='absolute top-225 left-150 z-1 text-2xl font-semibold'>Hanging Chair</h1>
                <h3 className='text-3 underline font-sans-serif font-semibold absolute top-235 left-150 z-1 '>Shop Now</h3>
                <img className='relative' src="banner-2.png" alt="image" />
                </div>
                <div>
                <h3 className='text-xs font-sans-serif font-semibold absolute top-220 left-250 z-1'>NEW ARRIVAL</h3>
                <h1 className='absolute top-225 left-250 z-1 text-2xl font-semibold'>Folding Chair</h1>
                <h3 className='text-3 underline font-sans-serif font-semibold absolute top-235 left-250 z-1 '>Shop Now</h3>
                <img className='relative' src="banner-3.png" alt="image" />
                <div className='z-1 text-red-500 font-semibold text-2xl relative top-60 left-0'>-10</div>

                </div>
            

        </div>
    )
}

export default Banner
