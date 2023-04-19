import React from 'react'
import SideBar from '../../SideBar/SideBar'

import NewProduct from '../../../pages/admin/ProductManager/NewProduct'

function AdminLayout({children}) {
 
  return (
    <div className='relative w-full max-w-full h-screen'>
      <SideBar children={children}>
      </SideBar>
      <div>
      <NewProduct/>
      </div>
     
      
    </div>
  )
}

export default AdminLayout