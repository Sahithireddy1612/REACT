// import axios from "axios";
// import { Component } from "react";
// import { Spinner } from "react-bootstrap";
// //import Prod from "../card/card.js";
// //import Product from "../../3may24/products";
// import Button from "react-bootstrap/Button";
// //import Spinner from "../my-app/src/stylingcomponents/spinner/spinner.js";

// class ProductCategory extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Products: [],
//       ProductCategory:[]
//     };
//   }

// //   all = async () => {
// //     const dta = await axios("https://fakestoreapi.com/products");
// //     this.setState({
// //       products: dta.data,
// //       ProductCategory:dta.data
// //     });
// //   };

//   data = async () => {
//     const dta = await axios.get("https://fakestoreapi.com/products");
//     this.setState({
//       products: dta.data,
//     });
//   };

//   componentDidMount() {
//     this.data();
//     this.content();
//   }
//   content = async (category) => {
//     const category = await axios.get(`https://fakestoreapi.com/products/${category}`);
//     // console.log(xyz.data);
//     this.setState({
//       ProductCategory: category,
//     });
//   };

//   render() {
//     console.log(this.state.ProductCategory.data);
//     return (
//       <>
//        {this.state.ProductCategory.data ? (
//           <>
//             <Card style={{ width: "18rem",margin:"0px 0px 50px 600px" }} >
//               <Card.Img
//                 variant="top"
//                 src={this.state.ProductCategory.data.image}
//                 height={250}
//               />
//               <Card.Body>
//                 <Card.Title>{this.state.ProductCategory.data.title}</Card.Title>
//                 <Card.Text>
//                   <b>Id:</b> {this.state.ProductCategory.data.category}
//                 </Card.Text>
//                 <Card.Text>
//                   <b>Category :</b> {this.state.ProductCategory.data.category}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </>
//         ) : (
//           <>
//             <h2>No items found</h2>
//           </>
//         )}

//         <>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "20px",
//             }}
//           >
//             {this.state.products.map((items) => {
//               return (
//                 <>
//                   <Button
//                     onClick={() => this.content(items.category)}
//                     variant="success"
//                   >
//                     {items.category}
//                   </Button>
//                 </>
//               );
//             })}
//           </div>
//         </>
//       </>
//     );
//   }
// }
// export default ProductCategory