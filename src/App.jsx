import React from 'react'
import Header from './components/Header'
import Summer from './components/Summer'
import Banner from './components/Banner'
import Deal from './components/Deal'
import Banner1 from './components/Banner1'
import Logo from './components/Logo'
import Single from './components/Single'
import Bg from './components/Bg'
import Hot from './components/Hot'
import Brand from './components/Brand'
import Latest from './components/Latest'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Pages from './Pages/Pages'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Contact from './Pages/Contact'


const App = () => {
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<HomeLayout/>} >
          <Route index element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/pages" element={<Pages/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Route>
      </Routes>

      


    </div>
  )
}

export default App
