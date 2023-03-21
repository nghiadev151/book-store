import React, {useState} from 'react'
import UserLayout from '../../../components/common/Layout/UserLayout'
import Sliders from '../Home/Sliders';
function ProductDetail() {
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
      const [quantity, setQuantity] = useState(1)
      const [products, setProducts] = useState(...product)
      const [pro, setPro] = useState([...product,...product,...product,...product,...product,...product,...product,...product,...product,...product,...product,...product,...product])
      const checkQuan = () => {
        if(quantity <= 1){
          setQuantity(1)
        }else {
        setQuantity(quantity - 1)}
      }
  return (
   <UserLayout>
    <div className='flex container mx-auto my-10 p-10'>
      <div className='basis-5/12 flex justify-center'>
        <div className='bg-[#F5F8FC] rounded-[5px] p-14 w-[400px] h-[450px] flex items-center justify-center'>
          <img className='w-full h-full' src={products.img} alt="" />
        </div>
         
      </div>
      <div className='basis-1/2 text-left'>
        <h1 className='font-bold text-[35px] font-serif mb-3'>{products.name}</h1>
        <span className='font-semibold text-primary font-serif mb-5 text-[20px]'>{products.price}$</span>
        <p className='text-[#616060] mt-3'>{products.description}</p> 
        <div className='flex items-center mt-5'>
          <div className='flex items-center justify-center h-[40px]  w-[120px] rounded-[5px] mr-2 border  border-[#c3c3c3]'>
          <button className='basis-1/4 bg-[#c3c3c3] px-2.5 h-full text-lg font-bold' onClick={checkQuan}>-</button>
            <input min={1} value={quantity} className='w-full h-full focus:outline-none text-center p-1 appearance-none'  type="number" />
            <button className='basis-1/4 bg-[#c3c3c3] px-2 h-full text-lg font-bold' onClick={()=> setQuantity(quantity+1)}>+</button>
          </div>
        
          <button className='bg-yellow text-primary font-bold py-2 px-4 rounded'>Add to cart</button>
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