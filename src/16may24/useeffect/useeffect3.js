import { useEffect, useState } from "react";
import axios from "axios";
import { checkObjEmpty, checkArrayEmpty } from "../utils/utils";
import React from "react";

const UseEffect3 = () => {
  const [products, setProducts] = useState([]);
  //const [count, setCount] = useState(1);
  const [eachProduct, setEachProduct] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

//   useEffect(() => {
//     fetchEachProduct();
//   }, [count]);

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

//   const fetchEachProduct = async () => {
//     try {
//       const result = await axios.get(`https://dummyjson.com/products/${count}`);
//       console.log("result:", result);
//       if (result.status === 200) {
//         setEachProduct(result.data); 
//       }
//     } catch (error) {
//       console.error("Error fetching product:", error);
//     }
//   };

//   const handleIncrement = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

  return (
    <>
      <h2>Use Effect Example</h2>

      {/* {eachProduct && checkObjEmpty(eachProduct) ? (
        <h3>{eachProduct.title}</h3>
      ) : (
        <h4>No data</h4>
      )} */}

      {/* <h3>{count}</h3>
      <button onClick={handleIncrement}>Count increment</button> */}

      {checkArrayEmpty(products) ? (
        <>
          {products.map((eachProduct) => (
            <React.Fragment key={eachProduct.id}>
              <h3>{eachProduct.title}</h3>
            </React.Fragment>
          ))}
        </>
      ) : null}
    </>
  );
};

export default UseEffect3;
