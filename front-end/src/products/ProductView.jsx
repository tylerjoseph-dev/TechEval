import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';

const ProductView = () => {
    const {product_id} = useParams();
    const [product, setProduct] = useState({});
    const URL = process.env.REACT_APP_BACKEND_API
    const isLikeClicked = localStorage.getItem(`techeval_${product_id}`) == 'true';
    const history = useHistory();

    const handleDelete = async (event) => {
        event.preventDefault();
        await axios.delete(`http://${URL}/products/${product.product_id}`);
        history.push('/products');
      }

    const onSubmit = async () => {
        if(isLikeClicked){
            await axios.delete(`http://${URL}/products/${product.product_id}/like`);
            localStorage.setItem(`techeval_${product_id}`, false);
        }else{
            await axios.post(`http://${URL}/products/${product.product_id}/like`);
            localStorage.setItem(`techeval_${product_id}`, true);
        }
        window.location.reload()
    }


    useEffect(() => {
        const abortController = new AbortController();

        axios.get(`http://${URL}/products/${product_id}`, {signal: abortController.signal})
            .then(resp => setProduct(resp.data.data));

    }, [])

  return (
    <div style={{marginTop: '95px'}} className='center-alt'>
        <div className="card" style={{width: "50vw"}}>
        <div className="card-header"><img src={product.product_image} className="img-fluid mx-auto d-block"></img></div>
        <div className="card-body">
            <h3 className="card-title">{product.product_title}</h3>
            <h4 className="card-title">${product.product_price}</h4>
            <p className="card-text">{product.product_description}</p>
            <a onClick={onSubmit} className={isLikeClicked ? "btn btn-warning" : "btn btn-primary"}>{isLikeClicked ? "Unlike" : "Like"}</a><span><b>{product.product_likes} Likes</b></span>
            <Link to={`/products/${product.product_id}/update`} style={{marginLeft: '25px'}}><Button variant="secondary">Edit Listing</Button></Link>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
    </div>
    </div>
    
  )
}

export default ProductView