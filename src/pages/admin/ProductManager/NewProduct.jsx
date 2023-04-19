import React, {useState} from 'react'
import AdminLayout from '../../../components/common/Layout/AdminLayout'
import { publicRequest } from '../../../utils/requestConfig';
import { useContext } from 'react'
import { StoreContext,actions } from '../../../store'

function NewProduct() {
    const [name, setName] = useState('');
  const [des, setDes] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [quan, setQuan] = useState('');
  const [modal, dispatch] = useContext(StoreContext)
  const handleModal = () => {
    dispatch(actions.setShowModal(!modal.modal))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        name: name,
        des: des,
        price: price,
        quan: quan,
        img: img,
        
    };

    publicRequest.post('/products', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={`bg-[#00000085] absolute bottom-0 overflow-y-hidden left-0 w-full h-full z-50 ${modal.modal ? 'visible': 'invisible'}`}>
        <form className='flex justify-center '  onSubmit={handleSubmit}>
            <div className='basis-1/3 bg-[#fff] rounded-md shadow-xl px-10  py-5 my-48'>
                <div className='mb-3'>
                    <label className='block text-left font-medium' htmlFor="name">Name:</label>
                    <input className='bg-[#e6e6e6] px-1 rounded-sm focus:outline-none w-full h-[30px]' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='block text-left font-medium' htmlFor="description">Description:</label>
                    <textarea rows="4" className='bg-[#e6e6e6] px-1 rounded-sm focus:outline-none w-full' type="text" id="description" value={des} onChange={(e) => setDes(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='block text-left font-medium' htmlFor="price">Price:</label>
                    <input className='bg-[#e6e6e6] px-1 rounded-sm focus:outline-none w-full h-[30px]' type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='block text-left font-medium' htmlFor="quantity">Quantity:</label>
                    <input className='bg-[#e6e6e6] px-1 rounded-sm focus:outline-none w-full h-[30px]' type="number" id="quantity" value={quan} onChange={(e) => setQuan(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='block text-left font-medium' htmlFor="image">Image:</label>
                    <input className='bg-[#e6e6e6] px-1 rounded-sm focus:outline-none w-full h-[30px]' type="text" id="image" value={img} onChange={(e) => setImg(e.target.value)} />
                </div>
                <div className='text-right mt-2'>
                    <button type="submit" className='text-left text-[#10552a] text-[18px] font-medium bg-[#2dd51d82] px-3 py-2 mx-2 rounded-md'>Add New Product</button>
                    <button type="submit" className='text-left text-[#8b1d1d] text-[18px] font-medium bg-[#f7464e82] px-3 py-2 rounded-md' onClick={handleModal}>Cancel</button>
                </div>
               
            </div>
           
        </form>
    </div>
  )
}

export default NewProduct