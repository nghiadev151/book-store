import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/common/Layout/AdminLayout";
import { useContext } from "react";
import { StoreContext, actions } from "../../../store";
import * as category from "../../../apiService/categoryService";
import * as orderService from "../../../apiService/OrderService";
import {storage, storageRef} from "../../../utils/firebaseConfig"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

function EditOrder() {
   const [order, setOrder] = useState({});
   const [isFirst, setIsFirst] = useState(true)
   const [data, setData] = useState({
    phone: "",
    address:'',
    totalPrice: '',
    
   });
  const [dataEdit, dispatch] = useContext(StoreContext);
  
  const handleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(actions.setShowModalEditOrder(!dataEdit.modalEditOrder));
  };
  const handleData = (e) => {
    const newData = {...data};
    newData[e.target.name] = e.target.value;
    setData(newData);
  }
  const handleSubmit = () => {
    

   const fetchUpdateOrder = async () => {
    // console.log(data);
    const res = await orderService.updateOrder(dataEdit.idEditOrder, data);
    if(res.status === 200){
      toast.success("Update order success!", {
        position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      });
    }else{
      toast.error("Update order failed!", {
        position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      });
    }
    // console.log(res);
   }
   fetchUpdateOrder();
    
  };
  

  useEffect(() => {
    if(isFirst || dataEdit.idEditOrder === undefined){
      setIsFirst(false);
      return;
    }
    // console.log(dataEdit.idEdit);
   
    const fetchOrderById = async () => {
      const res = await orderService.getOrderById(dataEdit.idEditOrder);
      // console.log(res?.data);
      const newData = {...data}
      newData.phone = res.data.phone;
      newData.address = res.data.address;
      newData.totalPrice = res.data.totalPrice;
      setData(newData);
      setOrder(res.data);
     
    }
    fetchOrderById();
    
  }, [dataEdit.idEditOrder]);
  
   
    
  
  
  return (
    <div
      className={`bg-[#00000085] absolute bottom-0 overflow-y-auto left-0 w-full h-full z-50 ${dataEdit.idEditOrder ? "visible" : "invisible"}`}
    >
      <div className="flex justify-center ">
        <div className="basis-1/3 bg-[#fff] rounded-md shadow-xl px-10  py-5 my-22 mt-4">
          <div className="mb-3">
            <label className="block text-left font-medium" htmlFor="name">
              Phone:
            </label>
            <input className="rounded-sm w-[100%] h-full p-2 mt-1 shadow-sm outline-1 outline-double outline-[#9e9a9ab2]  focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              defaultValue={data.phone}
              onChange={handleData}
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-left font-medium"
              htmlFor="address"
            >
              Address:
            </label>
            <input className="rounded-sm w-[100%] h-full p-2 mt-1 shadow-sm outline-1 outline-double outline-[#9e9a9ab2]  focus:outline-none focus:ring focus:border-blue-500"
              
              type="text"
              name="address"
              id="address"
              defaultValue={data.address}
              onChange={handleData}
            />
          </div>
          <div className="mb-3">
            <label className="block text-left font-medium" htmlFor="price">
              Total price:
            </label>
            <input className="rounded-sm w-[100%] h-full p-2 mt-1 shadow-sm outline-1 outline-double outline-[#9e9a9ab2]  focus:outline-none focus:ring focus:border-blue-500"
              type="number"
              name="price"
              id="price"
              defaultValue={data.totalPrice}
              onChange={handleData}
            />
          </div>
        
          
          <div className="text-right mt-2">
            <button
              onClick={handleSubmit}
              className="text-left text-[#10552a] text-[18px] font-medium bg-[#2dd51d82] px-3 py-2 mx-2 rounded-md"
            >
              Update Order
            </button>
            <button
              className="text-left text-[#8b1d1d] text-[18px] font-medium bg-[#f7464e82] px-3 py-2 rounded-md"
              onMouseDown={handleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditOrder;
