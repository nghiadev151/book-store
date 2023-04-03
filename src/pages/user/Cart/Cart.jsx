import React, {useEffect, useState} from 'react'
import UserLayout from '../../../components/common/Layout/UserLayout'
import { FaTrashAlt, FaReply } from 'react-icons/fa';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext} from '../../../store';
import {actions} from '../../../store';

function Cart() {
   
      const [total, setTotal] = useState(0)
      
      const [pro, dispatch] = useContext(StoreContext) 
      const [quantity, setQuantity] = useState(1)
      
      
     
   
      useEffect(() => {
        let total = 0;
        pro.products.forEach((p) => {
          total += p.price * pro.quantityItem;
        });
        setTotal(total);
      }, [pro, pro.quantity]);
      const decrease = () => {
        if(pro.quantityItem > 1) {
            setQuantity(quantity-1)
            dispatch(actions.setQuantity(quantity - 1))
        }
      }
      const increase = () => {
        setQuantity(quantity + 1);
        console.log(quantity);
        dispatch(actions.setQuantity(quantity + 1))
      }
      const setQuan = (e) => {
        dispatch(actions.setQuantity(e.target.value))
      }
  return (
    <UserLayout>
        <div className='container mx-auto'>
            <div className='text-center my-5'>
                <h1 className='text-[35px] font-medium font-sans'>Shopping Cart</h1>
                <div className='bg-[#000000] w-[50px] h-[3px] inline-block'></div>
            </div>
            <div className='flex gap-8 my-10 items-start '>
            {pro.products.length === 0 ? 
                <div className={`basis-2/3 p-4 bg-white  rounded-[8px] mb-5`}>
                    <div className="flex flex-col items-center justify-center">
                        <img alt="Your cart is empty" className="block w-[400px]" src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png"/>
                        <h5 className="absolute bottom-[200px] font-bold text-base">Bạn chưa thêm sản phẩm vào giỏ hàng</h5>
                    </div>
                </div>
                : <div className='basis-2/3 '>
                {pro.products.map((p, i) =>{
                    return (
                        <div key={i} className='flex mb-3 border-b pb-3 border-primary items-center'>
                        <div className='basis-1/12'>
                            <img className='w-full h-full' src={p.img} alt="" />
                        </div>
                        <div className='basis-3/12 pl-10'>
                            <h2 className='text-[20px] font-medium'>{p.name}</h2>
                            
                        </div>
                        <div className='basis-3/12'>
                            <span>{p.price}$</span>
                        </div>
                       <div className='basis-3/12'>
                            <div className='flex items-center justify-center h-[30px]  w-[100px] rounded-[5px] mr-2 border  border-[#c3c3c3]'>
                                <button className='basis-1/4 content-center pb-0.5 h-full bg-[#c3c3c3] px-2.5  text-lg font-bold' onClick={decrease}>-</button>
                                <input min={1} value={pro.quantityItem} onChange={setQuan} className='w-full h-full focus:outline-none text-center p-1 appearance-none'  type="number" />
                                <button className='basis-1/4 content-center bg-[#c3c3c3] px-2 h-full text-lg font-bold' onClick={increase}>+</button>
                            </div>
                       </div>
                        <div className='basis-1/12 flex flex-col justify-start items-end'>
                            <span className='font-bold text-primary text-[20px]'>{p.price * pro.quantityItem}$</span>
                        </div>
                        <div className='basis-1/12 flex flex-col justify-start items-end'>
                            <Tooltip placement="top" title="Delete">
                            <button className='font-medium text-primary text-[18px]'>
                                <FaTrashAlt className='text-[#696969]'/>
                            </button>
                            </Tooltip>
                        </div>
                    </div>
                    )
                })}
                    
                </div>
            }
                <div className='basis-1/3 shadow-lg rounded-md shadow-yellow'>
                    <div className='bg-[#f5f5f5] p-5 rounded-md'>
                        <h1 className='text-[20px] text-left font-medium'>Checkout</h1>
                        <div className='flex justify-between items-center border-y mt-3 py-3  border-primary'>
                            <h2 className='text-[18px] font-medium text-[#7e7d7d]'>Total payment:</h2>
                            <span className='text-[25px] text-primary font-bold'>{total || 0}$</span>
                        </div>
                        <div className='text-left py-3 text-md'>
                        Shipping fee will be calculated at the checkout page.
                        You can enter the discount code at the checkout page.
                        </div>
                        <div>
                            <button className='bg-yellow w-full text-primary py-4 rounded-md hover:bg-yellow-hover active:bg-yellow duration-300'>Order</button>
                        </div>
                        <Link to="/shop" className='flex justify-center items-center mt-3'>
                            <FaReply />
                            <p className='pl-2'>Continute shopping</p>
                        </Link>
                    </div>
                </div>
            </div>
           
        </div>
    </UserLayout>
   
  )
}

export default Cart