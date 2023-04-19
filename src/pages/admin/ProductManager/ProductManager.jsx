import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import ListProduct from './ListProduct'
import NewProduct from './NewProduct'
import { useContext } from 'react'
import { StoreContext } from '../../../store'
import { actions } from '../../../store'
import AdminLayout from '../../../components/common/Layout/AdminLayout'

function ProductManager() {
  const [modal, dispatch] = useContext(StoreContext)
  const handleModal = () => {
   
    dispatch(actions.setShowModal(!modal.modal))
    console.log(modal);
  }
  return (
    <AdminLayout>
    <div className=''>
        
        <div className='bg-[#2dd51d82] w-[200px] cursor-pointer flex items-center justify-center rounded-md py-2 px-3' onClick={handleModal}>
            <FaPlus className='text-[#10552a] mr-2'/>
            <button className='text-[#10552a] text-[18px] font-medium'>Add new product</button>
        </div>
      
        <div className='flex justify-between items-center mr-3 border-b border-[#d8d8d8] pb-2'>
          <div className='flex'>
            <p>Hiện</p>
            <select className=' rounded-sm w-[50px] focus:outline-none bg-[#d8d8d8] mx-2' name="" id="">
                <option value="10">10</option>
                <option value="10">20</option>
            </select>
            <p>sản phẩm</p>
          </div>
          <div className='flex justify-end items-center bg-[#d8d8d8] p-2 rounded-sm '>
            <p>Tìm kiếm: </p>
            <input className='ml-2 rounded-sm focus:outline-none px-1' type="text" />
          </div>
        </div>
          <ListProduct/>
      
        
    </div>
    </AdminLayout>
  )
}

export default ProductManager