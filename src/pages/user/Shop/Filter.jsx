import React, {useState} from 'react'
import { Slider, Checkbox } from 'antd';
import "./style.css"
function Filter() {
    const brands = [
        {id: 1, name: "Piatus",},
        {id: 2, name: "Quardo",},
        {id: 3, name: "Orion",},
        {id: 4, name: "Little Brown",},
        {id: 5, name: "Thorsons",},
        {id: 6, name: "Modern books",},
        {id: 1, name: "Piatus",},
        {id: 2, name: "Quardo",},
        {id: 3, name: "Orion",},
        {id: 4, name: "Little Brown",},
        {id: 5, name: "Thorsons",},
        {id: 6, name: "Modern books",},

    ]
    const authors = [
        {id: 1, name: "Jonathan",},
        {id: 2, name: "Catherine Lacey",},
        {id: 3, name: "Jinwoo Chong",},
        {id: 4, name: "Matthew Desmond",},
        {id: 5, name: "Cecile Pin",},
        {id: 1, name: "Jonathan",},
        {id: 2, name: "Catherine Lacey",},
        {id: 3, name: "Jinwoo Chong",},
        {id: 4, name: "Matthew Desmond",},
        {id: 5, name: "Cecile Pin",},
    ] 
    
    const [brand, setBrand] = useState([...brands]);
    const [author, setAuthor] = useState([...authors]);
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(1000);
    const onChangePrice = (value) => {
        setPrice1(value[0]);
        setPrice2(value[1]);
    }
  return (
    <div className='sticky top-[214px]'>
        <div className=''>
            <h2 className='text-left font-bold uppercase mb-2'>Brand</h2>
            <div className=' mb-3 scroll-component max-h-[200px] overflow-hidden overflow-y-scroll'>
                {brand.map((b,index) => {
                    return (
                        <div key={index} className='text-left flex items-center'>
                            <Checkbox>{b.name}</Checkbox>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className=''>
            <h2 className='text-left font-bold uppercase mb-2'>Author</h2>
            <div className='mb-3 scroll-component max-h-[200px] overflow-hidden overflow-y-scroll'>
                {author.map((author, index) => {
                    return (
                        <div key={index} className='text-left '>
                        <Checkbox>{author.name}</Checkbox>
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            <h2 className='text-left font-bold uppercase mb-2'>Price</h2>
            <Slider range={{draggableTrack: true,}} max={1000} defaultValue={[0, 1000]} onChange={onChangePrice} />
            <p><span>{price1}$</span> - <span>{price2}$</span></p>
        </div>
    </div>
  )
}

export default Filter