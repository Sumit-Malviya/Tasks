import { useState, useEffect } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        console.log("API data", data);
        console.log("got the data");
        setProduct(data);
      })
      .catch((err) => {
        console.log("Error", err);
        setProduct([]);
      });
  }, []);

  console.log("Re-Render", product);

  return (
    <div>
      <h1>Products</h1>
      <ol>
        {product.map((element, id) => {
          return <li key={id}>{element.title}</li>;
        })}
      </ol>
    </div>
  );
};

export default Products;
