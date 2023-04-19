import React, {useContext, useEffect, useState} from 'react'
import { FaSignOutAlt, FaTags, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { StoreContext,actions } from '../../store';
function SideBar({children}) {
    const [active, dispatch] = useContext(StoreContext);
    
    const data =[
        {name: 'Quản lí sản phẩm', icon: <FaTags/>, link: '/productManager'},
        {name: 'Quản lí khách hàng', icon: <FaUser/>, link: '/customerManager'},
    ]
    const handleActive = (index) => {
        console.log(index);
        dispatch(actions.setActive(index)) 
        console.log(active.active);
    }

  return (
    <div >
        <div className='max-w-100 h-[40px] bg-primary sticky top-0'>
            <div className='container mx-auto h-[100%] flex justify-end items-center'>
                <button className='bg-yellow h-[100%] px-3' > <FaSignOutAlt className='text-primary'/></button>
            </div>
        </div>
        <div className='flex gap-3 max-h-screen'>
            <div id="separator-sidebar" className="z-40 w-64 fixed basis-1/6 bg-primary h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <div className='p-4 border-b border-[#ffffff]'>
                    <div className='rounded-full border-2 mx-auto border-yellow w-[100px] h-[100px] flex justify-center items-center'>
                        <img className='rounded-full w-[95%] h-[95%]' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-9.jpg" alt=""  />
                    </div>
                    <h1>Anonymous</h1>
                </div>
                <div className='py-4'>
                    <ul className="space-y-2 font-medium">
                    {data.map((item, index) => {
                        return(
                            <Link key={index} onClick={()=>handleActive(index)} to={`/admin${item.link}`} >
                                <li  className={`cursor-pointer rounded-md ${active.active === index ? 'bg-yellow': 'hover:bg-[#62c7f3c2]' }  py-5 flex items-center justify-start pl-5 w-full h-[30px]`} >
                                    <div className='text-left flex gap-5 justify-start items-center text-white' >
                                        {item.icon}
                                        <p>{item.name}</p>
                                    </div>
                                </li>
                        </Link>
                    )})}
                    </ul>
                </div>
                </div>
            </div>
            <div className='basis-5/6 ml-[270px] py-3'>
                {children}
            </div>
        </div>
        
    </div>
  )
}

export default SideBar