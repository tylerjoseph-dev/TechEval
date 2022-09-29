import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ErrorAlert from '../shared/ErrorAlert';

const UpdateProduct = () => {


  const URL = process.env.REACT_APP_BACKEND_API
  const history = useHistory();
  const {product_id} = useParams();
  const initialFormState = {
    product_title: '',
    product_description: '',
    product_image: '',
    product_price: 0.00,
    
  }

  const [formData, setFormData] = useState({...initialFormState});
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios.get(`${URL}/products/${product_id}`).then((response) => setFormData({...response.data.data}));
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      setErrors(null);
      console.log(formData);
      await axios.put(`${URL}/products/${product_id}`,{data: formData})//.then(history.push('/products'));
      history.push('/products')
    }catch(e){
      setErrors(e.response.data.error)
    }
  }

  const handleChange = ({target}) => {
      if(target.name === "product_price") {
        setFormData({
          ...formData,
          [target.name]: parseFloat(target.value),
        });
      } else {
        setFormData({
          ...formData,
          [target.name]: target.value
        });
      }
  };


  return (
    <div style={{marginTop: '85px', width: '25vw'}} className='center'>
    <ErrorAlert error={errors}/>
  <h2 style={{color:'white'}}>Update Product</h2>
<form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product_title" style={{color: 'white'}}>Product Title</label>
          <input
            name="product_title"
            type="text"
            className="form-control"
            id="product_title"
            aria-describedby="product_title"
            placeholder="Scholarly Walks v5"
            minLength={2}
            required={true}
            onChange={handleChange}
            value={formData.product_title}
          />
        </div>

        <div className="form-group">
          <label htmlFor="product_price" style={{color: 'white'}}>Product Price</label>
          <input
            name="product_price"
            type="decimal"
            className="form-control"
            id="product_price"
            aria-describedby="product_price"
            placeholder="15"
            onChange={handleChange}
            value={formData.product_price}
          />
        </div>

        <label htmlFor="product_description" style={{color: 'white'}}>Product Description</label>
          <input
            name="product_description"
            type="text"
            className="form-control"
            id="product_description"
            aria-describedby="product_description"
            placeholder="A Scholar walking in the forest"
            minLength={2}
            required={true}
            onChange={handleChange}
            value={formData.product_description}
          />

        <label htmlFor="product_image" style={{color: 'white'}}>Product Image (URL)</label>
          <input
            name="product_image"
            type="url"
            className="form-control"
            id="product_image"
            aria-describedby="product_image"
            minLength={2}
            required={true}
            onChange={handleChange}
            value={formData.product_image}
          />
        <button
          type="cancel"
          className="btn btn-danger"
          onClick={() => history.push(`/products/${product_id}`)}
        >
          Cancel
        </button>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default UpdateProduct