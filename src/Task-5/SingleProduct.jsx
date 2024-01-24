import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log("Single Product API data", data);
        setProduct(data);
      })
      .catch((err) => {
        console.log("Error fetching single product", err);
        setProduct(null);
      });
  }, [id]);

  if (!product) {
    return <div>Product not found in the list</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default SingleProduct;
