import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchAsync, } from './cartSlice';
import "./Cart.css"
import { deleteAsync, updateAsync } from './cartSlice';

export function Cart() {

  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  // app.js me dekhe isko
  // useEffect(() => {
  //   dispatch(fetchAsync())

  // }, [])


  const handleChange = (e, id) => {
    console.log("event.target.value in cart.js", e.target.value);
    dispatch(updateAsync({ id, change: { quantity: e.target.value } }))
  }


  return (
    <div>
      <h1>Card Component</h1>
      <div>


      </div>


      {
        items && items.map((item) => {
          return (
            <div className="cart-item">
              <img
                className="img-fluid"
                src={item.thumbnail}
                alt=""
              />
              <div className="description">
                <p>{item.title}</p>
                <span>{item.brand}</span>
                <strong>${item.price}</strong>
              </div>
              <div className="quantity">
                Quantity
                <select value={item.quantity}
                  // onChange={handleChange}
                  onChange={(e) => handleChange(e, item.id)}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <div className='close'>
                <button
                  onClick={() => dispatch(deleteAsync(item.id))}
                >X</button>
              </div>
            </div>
          )
        })
      }


      {/* ye formula hai sum ka accumulator and iterator */}
      {/* iterator jo ke yaha item he hai */}
      <h1>Total : {items.reduce((acc, item) => item.price * item.quantity + acc, 0)} </h1>



    </div>
  );
}
