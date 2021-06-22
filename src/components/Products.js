import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { start } from "../store/products";

const Products = () => {
  const dispatch = useDispatch();
  const listOfProducts = useSelector((state) => state.products);
  console.log(listOfProducts);

  useEffect(() => {
    dispatch(start());
  }, []);

  const products =
    listOfProducts.products &&
    listOfProducts.products.map((products) => (
      <>
        <h3>{products.name}</h3>
        <img src={products.image} alt={products.description} />
        <p>{products.description}</p>
      </>
    ));
  return <>{products}</>;
};

export default Products;
