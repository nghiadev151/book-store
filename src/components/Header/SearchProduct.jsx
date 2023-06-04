import React from "react";

function SearchProduct({ product, close, noResult }) {
  return (
    <div className={` bg-white rounded-md shadow-lg p-5  ${close && product.length<=0  ? 'hidden' : ''}`}>
    {product.length <= 0 ? 
            <>
              <div className={`w-full h-[50px] pt-3 ${noResult  ? 'hidden' : ''}`}>
                <p className="text-lg font-medium">Không có sản phẩm nào được tìm thấy!</p>
              </div>
              </>
             : <>
      {product.map((pro, index) => {
        return (
          <div
            key={index}
            className="transition-all flex justify-start items-center gap-4 mb-3 p-1 hover:bg-[#85858581] rounded-md">
            <div>
                <img className="w-[50px] h-[50px] p-1" src={pro.image} alt="" />
            </div>
            <div className="text-left">
                <h4 className="font-medium">{pro.name}</h4>
                <p className="text-[18px] font-medium text-primary">
                    {pro.price}$
                </p>
            </div>
            
            
          </div>
        );
      })}
      </>
    }
    </div>
  );
}

export default SearchProduct;
