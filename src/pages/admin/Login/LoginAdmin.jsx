import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as authService from '../../../apiService/authService'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as userService from '../../../apiService/userService';
function LoginAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  }
   const handleLogin = () => {
    if(username === '' || password === ''){
      toast.warning('Please enter username and password!', toastConfig);
      return
    }
    const data = {username, password}
    console.log(data);
      const fetchLogin = async () => {
        try {
          const response = await authService.login(data);
          localStorage.setItem('token', JSON.stringify(response?.data));
            if(localStorage.getItem('token') !== null){ 
              const response = await userService.getUserByToken();
              console.log(response?.data);
              localStorage.setItem('user', JSON.stringify(response?.data));
              console.log(JSON.parse(localStorage.getItem('user')).roles);
              navigate('/admin/productManager');
          }
          if(response.status === 200){
            
            toast.success("Login success!", toastConfig);
           
            
            
          }
        } catch (error) {
          if(error.response && error.response.status === 403){
            toast.error("Login failed!", toastConfig);
          }
        }
          
      }
      fetchLogin();
     
    }
    
  return (
    <div id="bg" className="w-full flex justify-center items-center h-screen">
      <div className='bg-[#000000c4] p-10 rounded-md w-[400px] h-[350px]'>
        <div >
          <h1 className='font-bold text-white text-4xl mb-4'>Login Admin</h1>
          <div className='shadow-md'>
            <input type="text" required className='rounded-sm w-[100%] h-[35px] p-3 mb-4 shadow-sm  focus:outline-none focus:ring focus:border-blue-500' placeholder='Username...' onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div>
            <input type="password" required className='rounded-sm w-[100%] h-[35px] p-3 focus:outline-none focus:ring focus:border-blue-500' placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
            <div className='flex justify-end mb-1'>
            <Link to="/" className='block  text-yellow hover:text-yellow-hover active:text-yellow'>Forgot password?</Link>
            </div>
            <div className='flex justify-end mb-4'>  
              <p className='inline-block text-yellow'>Don't have an account? <Link to="/admin/register" className='text-yellow hover:text-primary underline decoration-white'>Signup</Link></p>
            </div>
          </div>

          <div>
            <button className='bg-yellow rounded-sm py-3 px-20 text-primary font-bold text-md hover:bg-yellow-hover duration-300 active:bg-yellow  ' onClick={handleLogin}>Login</button>
          </div>
          <Link to="/" className='block text-center text-white mt-4 hover:text-yellow duration-500'>Back to home</Link>
        </div>
      </div>

    </div>
  )
}

export default LoginAdmin