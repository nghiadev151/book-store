import React, { useState } from "react";
import AdminLayout from "../../../components/common/Layout/AdminLayout";

import { publicRequest } from "../../../utils/requestConfig";
import { useContext } from "react";
import { StoreContext, actions } from "../../../store";
import { Select, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";


function NewProduct() {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [quan, setQuan] = useState("");
  const [cid, setCid] = useState("");
  const [modal, dispatch] = useContext(StoreContext);
  const handleModal = () => {
    dispatch(actions.setShowModal(!modal.modal));
  };
  const handleChange = (value) => {
    setCid(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      description: des,
      price: price,
      image: img,
      quantity: quan,
      category: cid,
     
    };
    console.log(data);
    publicRequest
      .post("/products", data)
      .then((response) => {
        console.log("response: " + response);
      })
      .catch((error) => {
        console.log("err: "+error);
      });
  };
  return (
    <div
      className={`bg-[#00000085] absolute bottom-0 overflow-y-hidden left-0 w-full h-full z-50 ${
        modal.modal ? "visible" : "invisible"
      }`}
    >
      <form className="flex justify-center " onSubmit={handleSubmit}>
        <div className="basis-1/3 bg-[#fff] rounded-md shadow-xl px-10  py-5 my-48">
          <div className="mb-3">
            <label className="block text-left font-medium" htmlFor="name">
              Name:
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-left font-medium"
              htmlFor="description"
            >
              Description:
            </label>
            <TextArea
              rows={4} 
              type="text"
              id="description"
              value={des}
              onChange={(e) => setDes(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="block text-left font-medium" htmlFor="price">
              Price:
            </label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="block text-left font-medium" htmlFor="quantity">
              Quantity:
            </label>
            <Input id="quantity" type="number" value={quan}  onChange={(e) => setQuan(e.target.value)}/>
          </div>
          <div className="mb-3 text-left">
          <label className="block text-left font-medium" htmlFor="quantity">
              Category:
            </label>
            <Select
              defaultValue="Category"
              style={{ width: '30%' }}
              
              onChange={handleChange}
              options={[
                { value: "1", label: "Jack" },
                { value:"2", label: "Lucy" },
                { value: "3", label: "yiminghe" },
              ]}
            />
          </div>
          <div className="mb-3">
            <label className="block text-left font-medium" htmlFor="image">
              Image:
            </label>
            <Input
              type="text"
              id="image"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="text-right mt-2">
            <button
              type="submit"
              className="text-left text-[#10552a] text-[18px] font-medium bg-[#2dd51d82] px-3 py-2 mx-2 rounded-md"
            >
              Add New Product
            </button>
            <button
              type="submit"
              className="text-left text-[#8b1d1d] text-[18px] font-medium bg-[#f7464e82] px-3 py-2 rounded-md"
              onClick={handleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
