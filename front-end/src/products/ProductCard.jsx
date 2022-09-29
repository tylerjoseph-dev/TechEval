import axios from 'axios';
import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  const URL = process.env.REACT_APP_BACKEND_API

  return (
    <Card style={{ width: '30rem', marginLeft:'15px', marginTop: '15px'}}>
      <Card.Img variant="top" src={product.product_image} />
      <Card.Body>
        <Card.Title>{product.product_title}</Card.Title>
        <h2>${product.product_price}</h2>
          <Link to={`/products/${product.product_id}`}><Button variant="primary">See Details...</Button></Link>
          
          
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
