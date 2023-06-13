import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as orderService from '../../../apiService/OrderService';
import { useContext } from 'react'
import { Pagination } from 'antd'
import { StoreContext } from '../../../store'
import { actions } from '../../../store'
import { formatCurrency } from '../../../utils/format';
import { toast } from "react-toastify";
function ListOrder() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [modal, dispatch] = useContext(StoreContext)

  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    console.log(page, pageSize);
      const response = await orderService.getOrders(page,pageSize);
      setOrders(response?.data.content);
      setTotal(response?.data.totalElements);
    // console.log(pro);
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
    fetchOrders();
  }, [modal, page, pageSize])
const handleModal = (id) => {
  dispatch(actions.setShowModalEditOrder(!modal.modalEditOrder, id))
 
}
const handleDelete = (id) => {
  const fetchDelete = async () => {
    try {
    const res = await orderService.cancelOrder(id);
      if(res.status === 200){
        toast.success("Delete order success!", {
          position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        fetchOrders();
      }
    } catch (error) {
      if(error.response && error.response.status === 403){
        toast.error("Delete order failed!", {
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
  fetchDelete();
}
  return (
    <div>
      <div className="mt-3 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-[#6b7280] table-auto">
          <thead className="text-sm text-[#374151] uppercase bg-[#f9fafb] ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer
              </th>
              <th scope="col" className="px-6 py-3">
               Phone
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="bg-white">
              <td className="px-6 py-4 font-medium text-[#111827] whitespace-nowrap">
                {order.id}
              </td>
              <td className="px-6 py-4">{order.user?.fullName}</td>
              <td className="px-6 py-4">
                {order.phone}
              </td>
              <td className="text-center px-6 py-4">{order.address}</td>
              <td className="px-6 py-4">{formatCurrency(order.totalPrice)}</td>
              <td className="px-6 py-4">
                <Link className="font-medium text-[#3b82f6] hover:underline" onClick={()=>handleModal(order.id)}>
                  Edit
                </Link>
                <span
                  className="ml-2 cursor-pointer font-medium text-[#3b82f6] hover:underline"
                  onClick={()=>handleDelete(order.id)}
                >
                  Delete
                </span>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <div className='my-5'>
        <Pagination showSizeChanger onShowSizeChange={onShowSizeChange}  onChange={handlePageChange}  defaultCurrent={1} total={total} />
      </div>
    </div>
  );
}

export default ListOrder;
