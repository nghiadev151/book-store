import React, {useEffect, useState} from 'react'
import { Slider, Checkbox } from 'antd';
import * as authorService from '../../../apiService/authorService';
import * as publisherService from '../../../apiService/publisherService';
import * as productService from '../../../apiService/productService';
import "./style.css"
function Filter({onDataChange}) {
    const [brand, setBrand] = useState([]);
    const [au, setAu] = useState([]);
    const [publisher, setPublisher] = useState('');
    const [author, setAuthor] = useState('');
    const [minPrice, setMinPrice] = useState('0');
    const [maxPrice, setMaxPrice] = useState('500');
    const handleDataPublis = (value, checked) => {
        if(checked){
            setPublisher(value);
        }else {
            setPublisher('');
        }
    }
    const handleDataAuthor = (value, checked) => {
        if(checked){
           setAuthor(value);
        }else{
            setAuthor('');
        }
    }
    const onChangePrice = (value) => {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
        
    }
    useEffect(() => {
        const fetchBrand = async () => {
            const response = await publisherService.getAllPublisher();
            console.log(response?.data);
            setBrand(response?.data);
        }
        fetchBrand();
        const fetchAuthor = async () => {
            const response = await authorService.getAllAuthor();
            setAu(response?.data);
        }
        fetchAuthor();
    },[]);
    useEffect(() => {
        const filter = async () => {
           console.log(publisher, author, minPrice, maxPrice);
            const response = await productService.filterProduct(publisher, author, minPrice, maxPrice);
            console.log(response?.data);
            onDataChange(response?.data);
        }
        filter();
    },[author,  publisher, minPrice, maxPrice]);
  return (
    <div className='sticky top-[214px]'>
        <div className=''>
            <h2 className='text-left font-bold uppercase mb-2'>Brand</h2>
            <div className=' mb-3 scroll-component max-h-[200px] overflow-hidden overflow-y-scroll'>
                {brand.map((b,index) => {
                    return (
                        <div key={index} className='text-left flex items-center'>
                            <Checkbox onChange={(e)=> handleDataPublis(b.name, e.target.checked)}>{b.name}</Checkbox>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className=''>
            <h2 className='text-left font-bold uppercase mb-2'>Author</h2>
            <div className='mb-3 scroll-component max-h-[200px] overflow-hidden overflow-y-scroll'>
                {au.map((author, index) => {
                    return (
                        <div key={index} className='text-left '>
                        <Checkbox  onChange={(e)=>handleDataAuthor(author.name, e.target.checked)}>{author.name}</Checkbox>
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            <h2 className='text-left font-bold uppercase mb-2'>Price</h2>
            <Slider range={{draggableTrack: true,}} max={500} defaultValue={[0, 500]} onChange={onChangePrice} />
            <p><span>{minPrice}$</span> - <span>{maxPrice}$</span></p>
        </div>
    </div>
  )
}

export default Filter