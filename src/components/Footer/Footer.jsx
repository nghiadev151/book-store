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
      <ul>
          <li>HOME</li>
          <li>BOOKS</li>
          <li>AUTHORS</li>
          <li>SUBSJECTS</li>
          <li>Advanced Search</li>
        </ul>
      </ul>
      </div>
      <div className='basis-1/6'>
      <h1>My Account</h1>
      </div>
      <div className='basis-1/6'>
      <h1>Help</h1>
      </div>
        
      </div>
    </div>
  )
}

export default Footer