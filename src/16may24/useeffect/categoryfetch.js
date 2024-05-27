import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "./fetchcategory.css";

const UseEffectProductCategory = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductCategory, setSelectedProductCategory] = useState(null);

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

  const handleButtonClick = (category) => {
    setSelectedProductCategory(category);
  };

  const uniqueCategories = [...new Set(products.map((product) => product.category))];


  const selectedProducts = products.filter((product) => product.category === selectedProductCategory);

  return (
    <>
      <h2>Use Effect Example</h2>
      <div className="button-list">
        {uniqueCategories.map((category) => (
          <button className="button" key={category} onClick={() => handleButtonClick(category)}>
            {category}
          </button>
        ))}
      </div>
      {selectedProducts.length > 0 ? (
        <div className="product-list">
          {selectedProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} />
            </div>
          ))}
        </div>
      ) : (
        <h4>No product selected</h4>
      )}
    </>
  );
};

export default UseEffectProductCategory;
