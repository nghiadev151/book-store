import React, {useRef} from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
function Sliders({products}) {
  const productRef = useRef()
  const scroll = (scrollOffset) => {
      productRef.current.scrollLeft += scrollOffset;
  }
  return (
    <div className="container mx-auto  relative w-full h-full">
        <div style={{gridTemplateColumns: `repeat(${products.length}, 250px)`}} ref={productRef} className={`relative rounded-md grid mt-6 py-5 gap-4 scroll-smooth overflow-y-hidden overflow-x-hidden overflow-hidden `} >
          {products.map((product, index) => {
            return (
              
                <div key={index} className="relative rounded-md overflow-hidden origin-center-left hover:scale-110 hover:z-10 duration-300">
                  <img className='rounded-md' src={product.img} alt=""/>
                  <div className="absolute bottom-0 left-0 h-[30px] w-full text-white text-[22px] rounded-b-md font-light font-serif mx-0 my-auto bg-[#00000098]">{product.name}</div>
                </div>
              
            // <ProductCard key={index} product={product} />;
          )
          })}
        </div>
        <button onClick={()=>scroll(-252)} className="absolute top-[43%] left-[25px] px-1 py-3 rounded-md opacity-70 z-20 bg-[#00000098] hover:bg-[#000000ce] hover:opacity-100 duration-300">
            <FaAngleLeft className="text-white text-[25px]"/>
          </button>
          <button onClick={()=>scroll(252)} className="absolute top-[43%] right-[25px] px-1 py-3 rounded-md opacity-70 z-20 bg-[#00000098] hover:bg-[#000000ce] hover:opacity-100 duration-300">
            <FaAngleRight className="text-white text-[25px]"/>
          </button>
      </div>
  )
}

export default Sliders