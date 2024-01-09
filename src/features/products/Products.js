import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync } from './productsSlice';
import { addAsync } from '../cart/cartSlice';

export function Products() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);



  useEffect(() => {
    dispatch(fetchAsync())
  }, [])
  

  return (
    <div>
      <h1>dummyJSON Products Api</h1>
      <div>
        {/* <button
          aria-label="Decrement value"
          onClick={() => dispatch(fetchAsync())}
        >
          Fetch Products
        </button> */}

      </div>


      {
        products&& products.map((product) => {
          return (
              <div className="card">
                <img src={product.thumbnail} alt={product.title} style={{ width: "100%" }} />
                <h1>{product.title}</h1>
                <p className="price">{product.price}</p>
                <p>{product.description}</p>
                {/* <p><button>Add to Cart</button></p> */}
                <p><button onClick={()=>dispatch(addAsync(product))}>Add to Cart</button></p>
              </div>
          )
        })
      }


      {/* <div className="card">
        <img src="jeans3.jpg" alt="Denim Jeans" style={{ width: "100%" }} />
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans..</p>
        <p><button>Add to Cart</button></p>
      </div> */}

    </div>
  );
}
