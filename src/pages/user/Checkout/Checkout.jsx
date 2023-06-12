import React, {useState, useEffect} from 'react'
import UserLayout from '../../../components/common/Layout/UserLayout'
import { Link, useNavigate } from 'react-router-dom'
import { FaTrashAlt, FaReply } from 'react-icons/fa'
import * as cartService from '../../../apiService/CartService'
import * as orderService from '../../../apiService/OrderService'
import * as userService from '../../../apiService/userService'
import { formatCurrency } from '../../../utils/format'
import { StoreContext } from "../../../store";
import { useContext } from "react";
import { actions } from "../../../store"
import { toast } from 'react-toastify'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
function Checkout() {
    const [products, setProducts] = useState([]);
    // const [address, setAddress] = useState('');
    // const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const [cart, dispatch] = useContext(StoreContext);
    const handleCheckOut = (values) => {
       const data = {address:values.address, phone:values.phone, totalPrice: products.totalCost}
        const fetchCheckOut = async () => {
            try {
                if(localStorage.getItem('token') === null){
                    toast.error("Please login and add product to cart!", {
                      position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                    return;
                  }
                const res = await orderService.checkOut(data);
                if(res.status === 200){
                    dispatch(actions.setQuantityCart(0));
                    navigate('/cart');
                    toast.success("Check out success!", {
                        position: toast.POSITION.TOP_RIGHT,
                          autoClose: 1000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                      });
                }
                const fetchUser = async () => {
                    const response = await userService.getUserByToken();
                    localStorage.setItem('user', JSON.stringify(response?.data));
                    
                  }
                  fetchUser();
            } catch (error) {
                if(error.response && error.response.status === 403){
                    toast.error("Check out failed!", {
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
        fetchCheckOut();
    }
    useEffect(() => {
        if(localStorage.getItem('token') === null){
            navigate('/login')
        }
        const fetchCart = async () => {
            const res = await cartService.getCart();
            // console.log(res.data.cartItems);
            setProducts(res.data)
           }
           fetchCart();
    },[])
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        address: Yup.string().required('Address is required'),
        phone: Yup.string().required('Phone is required'),
    });
    const initialValues = {
        name: '',
        address: '',
        phone: '',
    }
  return (
    <UserLayout>
        <div className="container mx-auto my-5 py-8">
        <h1 className='font-bold text-2xl font-sans text-primary mb-5'>Check Out</h1>
        <Formik onSubmit={(values)=>handleCheckOut(values)}
        initialValues={initialValues}
        validationSchema={validationSchema}>
        <Form>
            <div className="flex flex-row gap-5">
                <div className="basis-1/3 p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                    <h1 className='text-[20px] text-left font-medium'>User Infomation</h1>
                        </div>
                    <div className="mb-3">
                        <label className="block text-left font-medium" htmlFor="name">
                        Name:
                        </label>
                        <Field required className="rounded-sm w-[100%]  p-2 mt-1 shadow-sm outline-1 outline-double outline-[#9e9a9ab2]  focus:outline-none focus:ring focus:border-blue-500"
                        type="text"
                        id="name"
                        name="name"
                        //   value={data.name}
                        //   onChange={handleData}
                        />
                        <ErrorMessage name="name" component="div" className="text-[#fa0000] text-left" />
                    </div>
                    <div className="mb-3">
                        <label
                        className="block text-left font-medium"
                        htmlFor="address"
                        >
                        Address
                        </label>
                        <Field required className="rounded-sm w-[100%]  p-2 mt-1 shadow-sm outline-1 outline-double outline-[#9e9a9ab2]  focus:outline-none focus:ring focus:border-blue-500"
                        type="text"
                        name="address"
                        id="address"
                        // value={address}
                        // onChange={(e) => setAddress(e.target.value)}
                        
                        />
                        <ErrorMessage name="address" component="div" className="text-[#fa0000] text-left" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-left font-medium" htmlFor="phone">
                        Phone:
                        </label>
                        <Field required className="rounded-sm w-[100%]  p-2 mt-1 shadow-sm outline-1 outline-double outline-[#9e9a9ab2]  focus:outline-none focus:ring focus:border-blue-500"
                        type="number"
                        name="phone"
                        // value={phone}
                        // onChange={(e) => setPhone(e.target.value)}
                        id="phone"/>
                        <ErrorMessage name="phone" component="div" className="text-[#fa0000] text-left" />
                    </div>
                </div>
                <div className="basis-1/3 rounded-[5px] shadow-sm bg-[#f5f5f5] overflow-y-auto">
                        <div
                            className="flex items-center justify-between p-5 rounded-t-[5px] border-b border-[#efefef] ">
                            <div className="flex items-center gap-3">
                            <h1 className='text-[20px] text-left font-medium'>Order Infomation</h1>
                            </div>
                        </div>
                        {products.cartItems?.map((item, index) => (
                            <div key={index} className="px-5 border-b border-[#efefef]">
                            <div className="flex items-center justify-between py-3">
                                <div className='basis1/4 w-[70px] h-[60px] mr-5'>
                                    <img className='w-[40px] h-[60px]' src={item.product?.image} alt="" />
                                </div>
                                <div className='text-left basis2/4 w-full'>
                                    <h5 className='font-bold text-[18px]'>{item.product?.name}</h5>
                                    <p>x{item.quantity}</p>
                                </div>
                                <div className='basis1/4'>
                                    <h1 className='text-[20px] text-primary font-medium'>{formatCurrency(item.quantity * item.product?.price)}</h1>
                                </div>
                            </div>

                        </div>
                        ))}
                        
                        
                    </div>
                <div className="basis-1/3 flex flex-col gap-5">
                    
                    <div className='bg-[#f5f5f5] p-5 rounded-md'>
                        <h1 className='text-[20px] text-left font-medium'>Checkout</h1>
                        <div className='flex justify-between items-center border-y mt-3 py-3  border-primary'>
                            <h2 className='text-[18px] font-medium text-[#7e7d7d]'>Total payment:</h2>
                            <span className='text-[25px] text-primary font-bold'>{formatCurrency(products.totalCost || 0)}</span>
                        </div>
                        <div className='text-left py-3 text-md'>
                        Shipping fee will be calculated at the checkout page.
                        You can enter the discount code at the checkout page.
                        </div>
                        <div>
                            <button type='submit' className='bg-yellow w-full text-primary py-4 rounded-md hover:bg-yellow-hover active:bg-yellow duration-300' >Order</button>
                        </div>
                        <Link to="/shop" className='flex justify-center items-center mt-3'>
                            <FaReply />
                            <p className='pl-2'>Continute shopping</p>
                        </Link>
                    </div>
                </div>
            </div>
            </Form>
            </Formik>
        </div>
    </UserLayout>
  )
}

export default Checkout