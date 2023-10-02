import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Products } from './features/products/Products.js';
import { Cart } from './features/cart/Cart.js';
import { useState,useEffect } from 'react';
import { fetchAsync } from './features/cart/cartSlice';


function App() {

  
  const [showCart, setshowCart] = useState(false);
  const item = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAsync())
  }, []);

  return (
    <div className="App">

      <button onClick={() => setshowCart(!showCart)}>Cart [{item.length}]</button>
      {showCart?<Cart></Cart>:<Products></Products>}
      
      
    </div>
  );
}

export default App;
