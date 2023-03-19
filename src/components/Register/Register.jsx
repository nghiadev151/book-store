import React, {useEffect, useState, useRef, useMemo, memo} from 'react'
import {Link} from 'react-router-dom'
function Register() {
  const [gender, setGender] = useState('male')
  const [g, setG] = useState(0)


  return (
    <div id="bg" className="w-full flex justify-center items-center h-screen">
    <div className='bg-[#000000c4] p-10 rounded-md w-[400px] h-[450px]'>
      <div>
        <h1 className='font-bold text-white text-4xl mb-4'>Login</h1>
        <div>
          <input type="text" className='rounded-sm w-[100%] h-[35px] p-3 mb-4 focus:outline-none focus:ring focus:border-blue-500' placeholder='Fullname...' />
        </div>
        <div className='flex bg-white rounded-sm pl-3 items-center mb-4'>
          <p className='text-[#949294]'>Gender: </p>
          <div className='flex justify-center items-center'>
          <button className={`${gender=== 'male' ? 'bg-yellow': 'bg-[#e9e9e9]'} text-primary px-2 m-2 rounded-md`} onClick={()=> setGender('male')}>Male</button>
          <button className={`${gender === 'female' ? 'bg-yellow': 'bg-[#e9e9e9]'} text-primary px-2 m-2 rounded-md`} onClick={()=> setGender('female')}>FeMale</button>
          </div>
          
        </div>
        <div>
          <input type="password" className='rounded-sm w-[100%] h-[35px] p-3 mb-4 focus:outline-none focus:ring focus:border-blue-500' placeholder='Phone...' />
        </div>
        <div className='shadow-md'>
          <input type="email" className='rounded-sm w-[100%] h-[35px] p-3 mb-4 shadow-sm  focus:outline-none focus:ring focus:border-blue-500' placeholder='Email...'/>
        </div>
        <div>
          <input type="password" className='rounded-sm w-[100%] h-[35px] p-3 mb-4 focus:outline-none focus:ring focus:border-blue-500' placeholder='Password...' />
        </div>
       
        <div>
          <button className='bg-yellow rounded-sm py-3 px-20 text-primary font-bold text-md hover:bg-yellow-hover duration-300 active:bg-yellow  '>Signup</button>
        </div>
      </div>
    </div>

  </div>
  )
}

export default memo(Register)