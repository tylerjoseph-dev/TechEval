import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';

const HomeView = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const URL = process.env.REACT_APP_BACKEND_API;

    useEffect(() => {
        const abortController = new AbortController();
        axios.get(`${URL}/products`, {signal: abortController.signal})
          .then(response => setProducts(response.data.data))
    }, [])
    
    const content = products?.map((product) => <ProductCard product={product} key={product.product_id}/>)
    
  return (
    <div style={{marginTop:'95px'}}>
      <div className="row row-cols-1 row-cols-md-2 g-1">
        {content}
      </div>
    </div>
    
  )
}

export default HomeView