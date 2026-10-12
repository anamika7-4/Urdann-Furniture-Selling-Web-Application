import React from 'react'
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div>
      <header className=' px-50 py-10 flex justify-between items-center'>
        <img className='' src="logo.png" alt="image" />
        <nav>
          <ul className='flex justify-between items-center gap-7'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/pages">PAGES</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>
        </nav>
        <div className='flex justify-between items-center gap-3 '>
          <img className='w-7 h-7' src="search.svg" alt="search image" />
          <img className='w-7 h-7' src="contact.svg" alt="contact image" />
          <img className='w-7 h-7' src="love.svg" alt="love image" />
          <div>
          <img className='w-7 h-7 relative' src="cart.svg" alt="cart image"/>
            <div className='absolute top-8 right-48 w-5 h-5 rounded-full bg-black text-amber-50'>
              01
            </div>
          </div>
        </div>






      </header>
    </div>
  )
}

export default Header
