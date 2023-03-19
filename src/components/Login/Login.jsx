import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div id="bg" className="w-full flex justify-center items-center h-screen">
      <div className='bg-[#000000c4] p-10 rounded-md w-[400px] h-[350px]'>
        <form action="">
          <h1 className='font-bold text-white text-4xl mb-4'>Login</h1>
          <div className='shadow-md'>
            <input type="email" className='rounded-sm w-[100%] h-[35px] p-3 mb-4 shadow-sm  focus:outline-none focus:ring focus:border-blue-500' placeholder='Email...'/>
          </div>
          <div>
            <input type="password" className='rounded-sm w-[100%] h-[35px] p-3 focus:outline-none focus:ring focus:border-blue-500' placeholder='Password...' />
            <div className='flex justify-end mb-1'>
            <Link to="/" className='block  text-yellow hover:text-yellow-hover active:text-yellow'>Forgot password?</Link>
            </div>
            <div className='flex justify-end mb-4'>  
              <p className='inline-block text-yellow'>Don't have an account? <Link to="/register" className='text-yellow hover:text-primary underline decoration-white'>Signup</Link></p>
            </div>
          </div>

          <div>
            <button className='bg-yellow rounded-sm py-3 px-20 text-primary font-bold text-md hover:bg-yellow-hover duration-300 active:bg-yellow  '>Login</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login