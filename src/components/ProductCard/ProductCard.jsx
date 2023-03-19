import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductCard({product}) {
  const [active, setActive] = useState(false);
  const handleActive = () => {  
    setActive(true)
  }

  return (
    <div className=" mt-10 w-[325px] h-[435px]">
    <div className="bg-[#e2e2e1] rounded-[5px] p-5 flex items-center justify-center">
      <div className="relative w-full shadow-xl shadow-[#777775] mb-2 rounded-[5px] overflow-hidden">
        <div
          style={{ backgroundImage: `url(${product.img})` }}
          className="rounded-[5px]  w-full min-h-[317px] min-w-[219px] pt-full bg-cover bg-center"
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start  bg-[#00000065] opacity-0 hover:opacity-100 duration-500" onMouseEnter={handleActive} onMouseLeave={() => setActive(false)}>
            <button className={`py-2 px-5 m-auto text-primary rounded-sm text-lg font-medium bg-yellow ${ active ? 'translate-y-6 duration-700': '-translate-y-6 duration-700'}` }>Add to cart</button>
        </div>
      </div>
      </div>
      <div>
        <h1 className="text-[22px] font-light font-serif">{product.name}</h1>
        <p className="text-[#777777]">{product.author}</p>
        <span className="line-through text-[#777777] font-semibold font-serif mr-2">1200$</span>
        <span className="text-primary font-semibold font-serif">{product.price}$</span>
      </div>
    </div>
  );
}

export default ProductCard;
