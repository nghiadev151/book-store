import React, { useEffect } from 'react'
import AdminLayout from '../../../components/common/Layout/AdminLayout'
import ProductManager from '../ProductManager/ProductManager'


function Home() {
 useEffect(() => {
  localStorage.setItem('active', 0)
  }, [])
  return (
    <AdminLayout>
        Thống kê
       
    </AdminLayout>
  )
}

export default Home