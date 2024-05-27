import { useEffect, useState } from "react";
import axios from "axios";
import { checkArrayEmpty } from "../utils/utils";
import React from "react";
import "./search.css"; 

const UseEffectProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
     
      <input 
        type="text" 
        placeholder="Search by category or title" 
        value={searchQuery} 
        onChange={handleSearchChange}
        className="search-bar"
      />
      {checkArrayEmpty(filteredProducts) ? (
        <div className="product-list">
          {filteredProducts.map((product) => (
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

export default UseEffectProductSearch;
