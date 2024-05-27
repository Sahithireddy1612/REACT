import { useEffect, useState } from "react";
import axios from "axios";
import { checkArrayEmpty } from "../utils/utils";
import React from "react";
import "./idfetch.css";

const UseEffectProductId = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

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

  const handleButtonClick = (id) => {
    setSelectedProductId(id);
  };

  const selectedProduct = products.find((product) => product.id === selectedProductId);

  return (
    <>
      <h2>Use Effect Example</h2>
      <div className="button-list">
        {products.map((product) => (
          <button className="button" key={product.id} onClick={() => handleButtonClick(product.id)}>
            {product.id}
          </button>
        ))}
      </div>
      {selectedProduct ? (
        <div className="product-card">
          <h3>{selectedProduct.title}</h3>
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
          <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
        </div>
      ) : (
        <h4>No product selected</h4>
      )}
    </>
  );
};

export default UseEffectProductId;
