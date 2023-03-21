import React from 'react'
import Logo from '../../assets/img/Bookworn-black.svg'
function Footer() {
  return (
    <div className='bg-primary'>
      <div className='container mx-auto flex py-20 justify-center '>
      <div className='basis-1/3'>
        <img src={Logo} alt="" />
      </div>
      <div className='basis-1/6'>
        <h1>About Us</h1>
        <ul>
          <li>VISION</li>
          <li>ACTICLES</li>
          <li>CAREERS</li>
          <li>SERVICE TERMS</li>
          
        </ul>
      </div>
      <div className='basis-1/6'>
      <h1>Discovery</h1>
      <ul>
          <li>HOME</li>
          <li>BOOKS</li>
          <li>AUTHORS</li>
          <li>SUBSJECTS</li>
          <li>ADVANDED SEARCH</li>
        </ul>
      </div>
      <div className='basis-1/6'>
      <h1>My Account</h1>
      <ul>
          <li>SIGNIN</li> 
          <li>VIEW CART</li>
          <li>MY WISHLIST</li>
          <li>TRACK MY ORDER</li>

        </ul>
      </div>
      <div className='basis-1/6'>
      <h1>Help</h1>
      <ul>
          <li>HELP CENTER</li>
          <li>REPORT A PROBLEM</li>
          <li className='uppercase'>Suggesting edits</li>
          <li>CONTACT US</li>
        </ul>
      </div>
        
      </div>
    </div>
  )
}

export default Footer