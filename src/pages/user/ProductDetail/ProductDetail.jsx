import React, {useEffect, useState} from 'react'
import UserLayout from '../../../components/common/Layout/UserLayout'
import Sliders from '../Home/Sliders';
import { useParams } from "react-router-dom";
import * as productService from '../../../apiService/productService';
import { toast } from 'react-toastify';
import * as cartService from '../../../apiService/CartService';
import { useContext } from 'react'
import { StoreContext } from '../../../store'
import { formatCurrency } from '../../../utils/format';
import { actions } from '../../../store'
function ProductDetail() {
      const [cart, dispatch] = useContext(StoreContext);
      const {id} = useParams();
      const [quantity, setQuantity] = useState(1)
      const [products, setProducts] = useState([])
      const [pro, setPro] = useState([])
      const checkQuan = () => {
        if(quantity <= 1){
          setQuantity(1)
        }else {
        setQuantity(quantity - 1)}
      }
      useEffect(() => {
        console.log(id);
        const fetchProduct = async() =>{
          const res = await productService.getProductById(id);
          setProducts(res.data)
        }
        const getPr = async() => {
          const res = await productService.getBestSellers();
          setPro(res.data)
        }
        fetchProduct();
        getPr();
      }, [id])
      const handleAddToCart = async () => {
        try {
          if(localStorage.getItem('token') === null){
            toast.error("Please login!", {
              position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
          }
          const data = {productId:id , quantity:quantity}
          const res = await cartService.addToCart(data);
          const resGet = await cartService.getCart();
          if(res.status === 200){
            dispatch(actions.setQuantityCart(resGet.data.cartItems.length));
            toast.success("Add to cart success!", {
              position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
          }
        } catch (error) {
          if(error.response && error.response.status === 403){
            toast.error("Add to cart failed!", {
              position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
          }
        }
      }
  return (
   <UserLayout>
    <div className='flex container mx-auto my-10 p-10'>
      <div className='basis-5/12 flex justify-center'>
        <div className='bg-[#F5F8FC] rounded-[5px] p-14 w-[400px] h-[450px] flex items-center justify-center'>
          <img className='w-full h-full' src={products.image} alt="" />
        </div>
         
      </div>
      <div className='basis-1/2 text-left'>
        <h1 className='font-bold text-[35px] font-serif mb-3'>{products.name}</h1>
        <span className='font-semibold text-primary font-serif mb-5 text-[20px]'>{formatCurrency(products.price)}</span>
        <p className='text-[#616060] mt-3'>{products.description}</p> 
        <div className='flex items-center mt-5'>
          <div className='flex items-center justify-center h-[40px]  w-[120px] rounded-[5px] mr-2 border  border-[#c3c3c3]'>
          <button className='basis-1/4 content-center pb-0.5 h-full bg-[#c3c3c3] px-2.5  text-lg font-bold' onClick={checkQuan}>-</button>
            <input min={1} value={quantity} className='w-full h-full focus:outline-none text-center p-1 appearance-none'  type="number" />
            <button className='basis-1/4 bg-[#c3c3c3] px-2 h-full text-lg font-bold' onClick={()=> setQuantity(quantity+1)}>+</button>
          </div>
        
          <button className='bg-yellow text-primary font-bold py-2 px-4 rounded hover:bg-yellow-hover active:bg-yellow duration-300' onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
    <div className='container mx-auto my-10'>
      <h1 className='font-bold text-[35px] font-serif'>We think you'll like...</h1>
    </div>
    <Sliders products={pro}/>
   </UserLayout>
  )
}

export default ProductDetail