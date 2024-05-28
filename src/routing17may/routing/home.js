import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import CustomNavbar from '../../stylingcomponents/navbar/navbar';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './home.css';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    console.log('Added to cart:', productId);
  };

  return (
    <div>
      <CustomNavbar/>
      <Container>
        <h1 className="mt-4">Welcome to the Home Page</h1>
        <Row className="product-list mt-4">
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card className="product-card">
                <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <div className="product-buttons">
                    <Button variant="primary" onClick={() => handleAddToCart(product.id)}>Add to Cart</Button>
                    <Link to={`/product/${product.id}`}>
                      <Button variant="secondary" className="ml-2">Product Details</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
