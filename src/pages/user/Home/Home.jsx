import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import UserLayout from "../../../components/common/Layout/UserLayout";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Carousels from "./Carousel";

function Home() {
  const product = [
    {
      name: "Doraemon",
      price: "1000",
      author: "Jonathan",
      img: "https://product.hstatic.net/200000346773/product/ed7ca4c4fe284d3a9a4e14d3f724a97e_5c71b000b5e24b3ebca50ea69f912d18_grande.jpeg",
    },
  ];
  const [products, setProducts] = useState([
    ...product,
    ...product,
    ...product,
    ...product,
    ...product,
    ...product,
    ...product,
    ...product,
    ...product,
    ...product,
    ...product,
    ...product,
    ...product,
  ]);
  return (
    <UserLayout>
      <Carousels></Carousels>
      <div className="container mx-auto flex flex-wrap gap-8 justify-center " >
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
        ;
      </div>
    </UserLayout>
  );
}

export default Home;
