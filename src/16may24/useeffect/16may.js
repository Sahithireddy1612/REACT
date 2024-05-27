


import { useEffect, useState } from "react";
import axios from "axios";
import { checkArrayEmpty } from "../utils/utils";
import React from "react";
import "./16may.css"; 



const UseEffectProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/products");
      console.log("result:", result);
      if (result.status === 200) {
        setProducts(result.data.products);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
       
      <h2>Use Effect Example</h2>
      {checkArrayEmpty(products) ? (
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} />
            </div>
          ))}
        </div>
      ) : (
        <h4>No data</h4>
      )}
    </>
  );
};

export default UseEffectProduct;

















