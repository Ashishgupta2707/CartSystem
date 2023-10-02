import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAsync } from './cartSlice';
import './Cart.css';

import {
  fetchAsync,
  
} from './cartSlice';


// import './Cart.css';

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <div>
        {items.map((item) => (
          <div className='cart-item'>
            <img className='img-fluid' src={item.thumbnail} alt='' />
            <div className='description'>
              <p>{item.title}</p>
              <span>{item.brand}</span>
              <strong>Rs {item.price}</strong>
            </div>
            <div className='quantity'>
              Quantity
              <select value={item.quantity} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className='close'>
              <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
            </div>
          </div>  
        ))}

      </div>
    </div>
  );
}
