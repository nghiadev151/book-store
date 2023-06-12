import React, {useContext, useEffect, useState} from 'react'
import UserLayout from '../../../components/common/Layout/UserLayout'
import { FaTrashAlt, FaReply } from 'react-icons/fa';
import { Tooltip } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import * as cartService from '../../../apiService/CartService';
import { toast } from 'react-toastify';
import { StoreContext } from '../../../store'
import { actions } from '../../../store'
import { formatCurrency } from '../../../utils/format';
import { useTranslation } from 'react-i18next';

function Cart() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [cart, dispatch] = useContext(StoreContext);
      const [products, setProducts] = useState([])
      const [quan, setQuan] = useState(0)

      const fetchCart = async () => {
        const res = await cartService.getCart();
        // console.log(res.data.cartItems);
        setProducts(res.data)
        
        
       }
      useEffect(() => {
        if(localStorage.getItem('token') === null){
            
            setProducts([]);
            navigate('/login');
            return;
        }
       fetchCart();
     
      }, [products]);
      const decrease = (id, q) => { 
        if(q > 1){
            const newData = {productId: id, quantity: q - 1}

            fetchUpdateQuan(newData);
        }
       
      }
      const increase = (id, q) => {
         const newData = {productId: id, quantity: q + 1}
        console.log(newData);
         fetchUpdateQuan(newData);
        
      }
      const fetchUpdateQuan = async (data) => {
        const res = await cartService.updateQuantity(data);
        
        console.log(res);
        fetchCart();
    }
    const handleDelete = (id) => {
        const fetchDelete = async () => {
            try {
                const res = await cartService.removeFromCart(id);
                if(res.status === 200){
                fetchCart();
            
                dispatch(actions.setQuantityCart(cart.quantityItem-1));
                  toast.success("Remove success!", {
                    position: toast.POSITION.TOP_RIGHT,
                      autoClose: 1000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                  });
                }
              } catch (error) {
                if(error.response && error.response.status === 403){
                  toast.error("Remove failed!", {
                    position: toast.POSITION.TOP_RIGHT,
                      autoClose: 1000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                  });
                }
              }

        }
        fetchDelete();
    }
  return (
    <UserLayout>
        <div className='container mx-auto'>
            <div className='text-center my-5'>
                <h1 className='text-[35px] font-medium font-sans'>{t('shopping-cart')}</h1>
                <div className='bg-[#000000] w-[50px] h-[3px] inline-block'></div>
            </div>
            <div className='flex gap-8 my-10 items-start '>
            {products.length === 0 ? 
                <div className={`basis-2/3 p-4 bg-white  rounded-[8px] mb-5`}>
                    <div className="flex flex-col items-center justify-center">
                        <img alt="Your cart is empty" className="block w-[400px]" src="https://firebasestorage.googleapis.com/v0/b/bookstore-151.appspot.com/o/image%2Fno%20cart%20item.png?alt=media&token=a0ff0f01-70f6-4cf1-b592-a0334e7310e6"/>
                        <h5 className="absolute bottom-[200px] mb-2 font-bold text-base">No cart item</h5>
                    </div>
                </div>
                : <div className='basis-2/3 '>
                {products.cartItems.map((p, i) =>{
                    return (
                        <div key={i} className='flex mb-3 border-b pb-3 border-primary items-center'>
                        <div className='basis-1/12'>
                            <img className='w-full h-full' src={p.product?.image} alt="" />
                        </div>
                        <Link to={`/product/${p.product?.id}`} className='basis-3/12 pl-10'>
                            <h2 className='text-[20px] font-medium'>{p.product?.name}</h2>
                        </Link>
                        <div className='basis-3/12'>
                            <span>{formatCurrency(p.product?.price)}</span>
                        </div>
                       <div className='basis-3/12'>
                            <div className='flex items-center justify-center h-[30px]  w-[100px] rounded-[5px] mr-2 border  border-[#c3c3c3]'>
                                <button className='basis-1/4 content-center pb-0.5 h-full bg-[#c3c3c3] px-2.5  text-lg font-bold' onClick={()=>decrease(p.product?.id, p.quantity)}>-</button>
                                <input min={1} value={p.quantity}   className='w-full h-full focus:outline-none text-center p-1 appearance-none'  type="number" onChange={(e)=>setQuan(e.target.value)}/>
                                <button className='basis-1/4 content-center bg-[#c3c3c3] px-2 h-full text-lg font-bold' onClick={()=>increase(p.product?.id, p.quantity)}>+</button>
                            </div>
                       </div>
                        <div className='basis-1/12 flex flex-col justify-start items-end'>
                            <span className='font-bold text-primary w-[60px] text-[20px]'>{formatCurrency(p.product?.price * p.quantity)}</span>
                        </div>
                        <div className='basis-1/12 flex flex-col justify-start items-end'>
                            <Tooltip placement="top" title="Delete">
                            <button className='font-medium text-primary text-[18px]'>
                                <FaTrashAlt className='text-[#696969]' onClick={()=>handleDelete(p.id)}/>
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
                        <h1 className='text-[20px] text-left font-medium'>{t('checkout')}</h1>
                        <div className='flex justify-between items-center border-y mt-3 py-3  border-primary'>
                            <h2 className='text-[18px] font-medium text-[#7e7d7d]'>{t('total')}:</h2>
                            <span className='text-[25px] text-primary font-bold'>{formatCurrency(products.totalCost || 0)}</span>
                        </div>
                        <div className='text-left py-3 text-md'>
                        {t('fee')}
                        </div>
                        <Link to='/checkout'>
                            <button className='bg-yellow w-full text-primary py-4 rounded-md hover:bg-yellow-hover active:bg-yellow duration-300'>{t('order')}</button>
                        </Link>
                        <Link to="/shop" className='flex justify-center items-center mt-3'>
                            <FaReply />
                            <p className='pl-2'>{t('continue-shopping')}</p>
                        </Link>
                    </div>
                </div>
            </div>
           
        </div>
    </UserLayout>
   
  )
}

export default Cart