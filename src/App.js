import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import { fetchTodos } from './redux/slices/todoSlice';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart';

import { fetchAsync } from './features/cart/cartSlice';
import News from './components/news/news';

function App() {

  // const dispatch = useDispatch();
  // const state = useSelector(state => state);
  // console.log("State", state);



  // const [showCart, setShowCart] = useState(false);
  // const items = useSelector(state => state.cart.items);

  // useEffect(() => {
  //   dispatch(fetchAsync())

  // }, [])




  // if (state.todo.isLoading) {
  //   return <h1>Loading........</h1>
  // }







  return (
    <>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button type="button" onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
          {
            state.todo.data && state.todo.data.map((todo) => {
              return (
                <div key={todo.id}>

                  <li>Todos name: {todo.title}</li>

                </div>
              )
            }
            )}

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}

        <News />



        {/* <Products  /> */}







        {/* button ke click krne pe cart shoew ho nahi to na ho */}
        {/* toogle ka mltb abi jo uski value hai us se ulta hojaye  !setShowCard is true */}
        {/* <button onClick={() => setShowCart(!showCart)}> Fetch Cart [ {items.length} ]</button> */}

        {/* {showCart ?
          <Cart /> : <Products />

        } */}



      </div>
    </>
  );
}

export default App;
