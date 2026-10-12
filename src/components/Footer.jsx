import React from 'react'

const Footer = () => {
    return (
        <div className='h-[60vh] bg-gray-300'>
            <div className='px-50 py-20 grid grid-cols-4 gap-5'>
                <div>
                    <img src="logo.png" alt="image" />
                    <h1 className='py-3 text-gray-800'>Lorem ipsum dolor sit amet, cons adipi elit, sed do eiusmod tempor incididunt ut aliqua</h1>
                    <img src="payment.png" alt="image" />
                </div>
                <div className='px-12  '>
                    <h1 className='text-xl font-medium'>Information</h1>
                    <div className='py-3 text-gray-800'>
                        <h1>About Us</h1>
                        <h1>Delivery Information</h1>
                        <h1>Privacy Policy</h1>
                        <h1>Terms & Conditions</h1>
                        <h1>Customer Service</h1>
                    </div>

                </div>
                <div>
                    <h1 className='text-xl font-medium'>My Account</h1>
                    <div className='py-3 text-gray-800'>
                        <h1>My Account</h1>
                        <h1>Order History</h1>
                        <h1>Wishlist</h1>
                        <h1>News Letter</h1>
                        <h1>Order History</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-medium'>Get In touch</h1>
                    <div className=' text-gray-800'>
                        <h1><span className='font-medium'>Address:</span>Your adress goes here</h1>
                        <h1><span className='font-medium'>Telephone Enquiry:</span>(012) 3456789</h1>
                        <h1><span className='font-medium'>Email:</span>qwwdsc@gmail.com</h1>
                        <h1 className='py-5'>open: <span className='text-red-500'>8:00 AMM</span>- close: <span className='text-red-500'>18:00PM</span></h1>
                        <h1>Saturday-Sunday:close</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
