import React, {useState,useEffect, useLocation} from 'react'
import { Pagination } from 'antd';
import UserLayout from '../../../components/common/Layout/UserLayout'
import ProductCard from '../../../components/ProductCard/ProductCard'
import Filter from './Filter';
import * as productsService from '../../../apiService/productService';
function Shop() {
      const [products, setProducts] = useState([]);
      const [page, setPage] = useState(0);
      const [pageSize, setPageSize] = useState(10);
      const handleFilter = (data) => {
        setProducts(data);
      }
      const onShowSizeChange = (current, pageSize) => {
        setPage(current-1);
        setPageSize(pageSize);
        console.log(current, pageSize);
      }
      const handlePageChange = (page) => {
        if(page === 1){
          setPage(0);
        } else{ setPage(page-1);}
       
        console.log(page);
      }
      useEffect(() => {
        const fetchProducts = async () => {
          console.log(page,pageSize);
          const response = await productsService.getAllProduct(page,pageSize);
          console.log(response);
        setProducts(response?.data.content);
        }
        fetchProducts();
      },[page,pageSize])
  return (
    <UserLayout>
      <div className='container mx-auto my-10 flex justify-between gap-1'>
          <div className='basis-2/12 pr-10'>
              <Filter onDataChange={handleFilter}/>
          </div>
          <div className=' basis-10/12 flex flex-wrap gap-3'>
                  {products.map((product ,index) =>{
                      return(
                          <ProductCard product={product} key={product.id}/>
                      )
                  })}
              
          </div>
      </div>
      <div className='mb-5'>
        <Pagination showSizeChanger onShowSizeChange={onShowSizeChange}  onChange={handlePageChange}  defaultCurrent={1} total={50} />
      </div>
      
    </UserLayout>
    
  )
}

export default Shop