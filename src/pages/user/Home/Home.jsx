import React, { useEffect, useState } from "react";
import UserLayout from "../../../components/common/Layout/UserLayout";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Carousels from "./Carousel";
import Sliders from "./Sliders";


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
      <Sliders products={products}/>
      <Sliders products={products}/>
    </UserLayout>
  );
}

export default Home;
