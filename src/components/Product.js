import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getApiProducts from "../Api/Api";
import ProductItem from "./ProductItems";
const Product = () => {

  const [products,setProdcuts] = useState([])


  useEffect(() => {
        getApiProducts().then(result=> {setProdcuts(result)
        })
  }, []);

  let { id } = useParams()
  const product = products.find((product) => product.id.toString() === id);
  if (!product) {
    return (
      <h1 className="text-center text-danger my-5">Product not found</h1>
    )
  }
  return ( <ProductItem product={product}/>)
}

export default Product



