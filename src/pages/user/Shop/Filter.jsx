import React, {useState} from 'react'

function Filter() {
    const brands = [
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
    ] 
    
    const [brand, setBrand] = useState([...brands]);
    const [author, setAuthor] = useState([...authors]);
    const [price, setPrice] = useState();
  return (
    <div className='sticky top-[214px]'>
        <div>
            <h2 className='text-left'>Brand</h2>
            <div className=''>
                {brand.map((b,index) => {
                    return (
                        <div key={index} className='text-left'>
                            <input type="checkbox" name={b.name} id={b.id} value={b.name} onChange={(e) => setBrand(e.target.value)}/>
                            <label id={b.id}>{b.name}</label>
                        </div>
                    )
                })}
            </div>
        </div>
        <div>
            <h2 className='text-left'>Author</h2>
            <div className=''>
                {author.map((author, index) => {
                    return (
                        <div key={index} className='text-left'>
                            <input type="checkbox" className='inline-block' name={author.name} id={author.id} value={author.name} onChange={(e) => setAuthor(e.target.value)}/>
                            <label id={author.id}>{author.name}</label>
                        </div>
                    )
                })}
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Filter