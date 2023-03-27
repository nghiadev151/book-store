import React, {useState,useEffect, useLocation} from 'react'
import UserLayout from '../../../components/common/Layout/UserLayout'
import ProductCard from '../../../components/ProductCard/ProductCard'
import Filter from './Filter';
function Shop() {
    
    const product = [
        {
          id: 1,
          name: "Doraemon",
          price: "1000",
          author: "Jonathan",
          img: "https://product.hstatic.net/200000346773/product/ed7ca4c4fe284d3a9a4e14d3f724a97e_5c71b000b5e24b3ebca50ea69f912d18_grande.jpeg",
        },
      ];
      const [products, setProducts] = useState([
        ...product,
        ...product,
        ...product,
        ...product,
        ...product,
        ...product,
        ...product,
        ...product,
        ...product,
        ...product,
        ...product,
        ...product,
        ...product,
      ]);
  return (
    <UserLayout>
    <div className='container mx-auto my-10 flex justify-between gap-1'>
        <div className='basis-2/12 pr-10'>
            <Filter/>
        </div>
        <div className=' basis-10/12 flex flex-wrap gap-3'>
                {products.map((product) =>{
                    return(
                        <ProductCard product={product} key={product.id}/>
                    )
                })}
            
        </div>
</div>
    </UserLayout>
    
  )
}

export default Shop