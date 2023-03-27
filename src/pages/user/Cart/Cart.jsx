import React, {useEffect, useState} from 'react'
import UserLayout from '../../../components/common/Layout/UserLayout'
import { FaTrashAlt, FaReply } from 'react-icons/fa';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';

function Cart() {
    const product = [
        {
          id: 1,
          name: "Doraemon",
          price: "1000",
          author: "Jonathan",
          img: "https://product.hstatic.net/200000346773/product/ed7ca4c4fe284d3a9a4e14d3f724a97e_5c71b000b5e24b3ebca50ea69f912d18_grande.jpeg",
          description: "Preparing for school doesn't have to be a chore. Introducing All Ready for Preschool, a comprehensive collection of activities, hands-on tools, and more! Vibrantly designed around a kid-friendly family theme, this kit includes preschool essentials conveniently bundled in a sturdy carrying case for learning at home or on the go. The Parent Guide is structured upon an easy-to-follow Ready, Set, Go lesson framework, which eases your child into grade-appropriate subjects through engaging activities and games that progress in difficulty. Best of all, it coordinates with your child's write-and-wipe Activity Book, ensuring that both of you remain on ''the same page. Ready? Set? Go! It's time to help your child take the next step!",
        },
      ];
      const [total, setTotal] = useState(0)
      const [quantity, setQuantity] = useState(1)
      const [products, setProducts] = useState([...product])
      const [pro, setPro] = useState([...product,...product,...product,...product,...product,...product,...product,...product,...product,...product,...product,...product,...product])
      useEffect(() => {
        let total = 0;
        products.forEach((p) => {
          total += p.price * quantity;
        });
        setTotal(total);
      }, [products, quantity]);
      const checkQuan = () => {
        if(quantity <= 1){
          setQuantity(1)
        }else {
        setQuantity(quantity - 1)}
      }
      
  return (
    <UserLayout>
        <div className='container mx-auto'>
            <div className='text-center my-5'>
                <h1 className='text-[35px] font-medium font-sans'>Shopping Cart</h1>
                <div className='bg-[#000000] w-[50px] h-[3px] inline-block'></div>
            </div>
            <div className='flex gap-8 my-10 items-start '>
                <div className='basis-2/3 border-b border-primary'>
                {products.map((p, i) =>{
                    return (
                        <div className='flex mb-3 items-center'>
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
                                <button className='basis-1/4 content-center pb-0.5 h-full bg-[#c3c3c3] px-2.5  text-lg font-bold' onClick={checkQuan}>-</button>
                                <input min={1} value={quantity} className='w-full h-full focus:outline-none text-center p-1 appearance-none'  type="number" />
                                <button className='basis-1/4 content-center bg-[#c3c3c3] px-2 h-full text-lg font-bold' onClick={()=> setQuantity(quantity+1)}>+</button>
                            </div>
                       </div>
                        <div className='basis-1/12 flex flex-col justify-start items-end'>
                            <span className='font-bold text-primary text-[20px]'>{p.price * quantity}$</span>
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
                            <button className='bg-yellow w-full py-4 rounded-md hover:bg-yellow-hover active:bg-yellow duration-300'>Order</button>
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