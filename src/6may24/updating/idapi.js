import axios from "axios";
import { Component } from "react";
//import Product from "../../3may24/products";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class ProductId extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      productid: {},
    };
  }

  data = async () => {
    const dta = await axios.get("https://fakestoreapi.com/products");
    this.setState({
      products: dta.data,
    });
  };

  componentDidMount() {
    this.data();
    this.content();
  }

  content = async (id) => {
    const Id = await axios.get(`https://fakestoreapi.com/products/${id}`);
    // console.log(xyz.data);
    this.setState({
      productid: Id,
    });
  };

  render() {
    console.log(this.state.productid.data);
    return (
      <>
        {this.state.productid.data ? (
          <>
            <Card style={{ width: "18rem",margin:"0px 0px 50px 600px" }} >
              <Card.Img
                variant="top"
                src={this.state.productid.data.image}
                height={250}
              />
              <Card.Body>
                <Card.Title>{this.state.productid.data.title}</Card.Title>
                <Card.Text>
                  <b>Id:</b> {this.state.productid.data.id}
                </Card.Text>
                <Card.Text>
                  <b>Category :</b> {this.state.productid.data.category}
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        ) : (
          <>
            <h2>No items found</h2>
          </>
        )}

        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {this.state.products.map((items) => {
              return (
                <>
                  <Button
                    onClick={() => this.content(items.id)}
                    variant="success"
                  >
                    {items.id}
                  </Button>
                </>
              );
            })}
          </div>
        </>
      </>
    );
  }
}
export default ProductId;