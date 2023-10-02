import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAsync } from '../cart/cartSlice';

import {
  fetchAsync,
  
} from './productsSlice';


import './Products.css';

export function Products() {

  
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  },[]);

  return (
    <div>
      <div>

        {products.map((product) => (
          <div className="card">
            <img src={product.thumbnail} alt={product.title} style={{ width: "100%"}}/>
            <h1>{product.title}</h1>
            <p className="price">Rs {product.price}</p>
            <p>{product.description}</p>
            <p><button onClick={()=>dispatch(addAsync(product))}>Add to Cart</button></p>
          </div>
        ))}

      </div>
    </div>
  );
}
