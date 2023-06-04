import React, {useEffect, useState, useRef, useMemo, memo} from 'react'
import {Link} from 'react-router-dom'
import * as authService from '../../apiService/authService.js'
import {toast} from "react-toastify";
function Register() {
  const [data, setData] = useState({
    username: '',
    password: '',
    fullName: '',
    email: '',
    roles:"ROLE_USER"

  });
  const [gender, setGender] = useState('male')
  const [g, setG] = useState(0)
const handleData = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
 
  
}
const handleRegister = () => {
 
  const fetchRegister = async () => {
    const response = await authService.register(data);
    if(response?.status === 200){
      toast.success("Register success", {
        position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      });
    }
    if(response?.status === 400){
      toast.error("Username is already", {
        position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      });
    }
  }
  fetchRegister();
}
  return (
    <div id="bg" className="w-full flex justify-center items-center h-screen">
    <div className='bg-[#000000c4] p-10 rounded-md w-[400px] h-[450px]'>
      <div type="form">
        <h1 className='font-bold text-white text-4xl mb-4'>SingUp</h1>
        
        <div>
          <input type="text" className='rounded-sm w-[100%] h-[35px] p-3 mb-4 focus:outline-none focus:ring focus:border-blue-500' name='username'  placeholder='Username...' onChange={handleData}/>
        </div>
        <div className='flex bg-white rounded-sm pl-3 items-center mb-4'>
          <p className='text-[#949294]'>Gender: </p>
          <div className='flex justify-center items-center'>
          <button className={`${gender=== 'male' ? 'bg-yellow': 'bg-[#e9e9e9]'} text-primary px-2 m-2 rounded-md`} onClick={()=> setGender('male')}>Male</button>
          <button className={`${gender === 'female' ? 'bg-yellow': 'bg-[#e9e9e9]'} text-primary px-2 m-2 rounded-md`} onClick={()=> setGender('female')}>FeMale</button>
          </div>
          
        </div>
        <div>
          <input type="password" name='password'  className='rounded-sm w-[100%] h-[35px] p-3 mb-4 focus:outline-none focus:ring focus:border-blue-500' placeholder='Password...' onChange={handleData}/>
        </div>
       
        <div>
          <input type="text" name='fullName'  className='rounded-sm w-[100%] h-[35px] p-3 mb-4 focus:outline-none focus:ring focus:border-blue-500' placeholder='Fullname...' onChange={handleData}/>
        </div>
        <div className='shadow-md'>
          <input type="email" name='email'  className='rounded-sm w-[100%] h-[35px] p-3 mb-4 shadow-sm  focus:outline-none focus:ring focus:border-blue-500' placeholder='Email...' onChange={handleData}/>
        </div>
        
        <div>
          <button className='bg-yellow rounded-sm py-3 px-20 text-primary font-bold text-md hover:bg-yellow-hover duration-300 active:bg-yellow  ' onClick={handleRegister}>Signup</button>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Register