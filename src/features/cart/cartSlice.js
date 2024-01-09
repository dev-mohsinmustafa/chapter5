import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItems, addItems, updateItem, deleteItem } from './cartAPI';

const initialState = {
  items: [],
  status: 'idle',
};


export const fetchAsync = createAsyncThunk(
  //cart slice ka name hai 
  'cart/fetchItems',
  async () => {
    // const {data} = await fetchProducts();
    // return data;
    // console.log(data);
    const response = await fetchItems();
    return response.data;

  }
);




export const addAsync = createAsyncThunk(
  //cart slice ka name hai 
  'cart/addItems',
  async (item) => {
    const { id, thumbnail, title, brand, price, } = item;
    // const response = await addItems(item);
    const response = await addItems({ id, thumbnail, title, brand, price, quantity: 1 });
    return response.data;
  }
);



export const deleteAsync = createAsyncThunk(
  //cart slice ka name hai 
  'cart/deleteItems',
  async (id) => {
    const response = await deleteItem(id);
    return response.id;
  }
  // async (id) => {
  //   await deleteItem(id);
  //   return id;
  // }
);



// difficult
export const updateAsync = createAsyncThunk(
  //cart slice ka name hai 
  'cart/updateItem',
  async ({id, change}) => {
    const response = await updateItem( id, change );
    return response.data;
    
  }

);



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })

      .addCase(addAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })

      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // check index
        const index = state.items.findIndex(item => item.id === action.payload)
        // delete ke leye splice
        // 1 is number of elements jo hatany hoty hain
        state.items.splice(index, 1);
      })


      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id)
        console.log(index, action.payload);
        // yaha replace krene ge kyo ke kuch change howa hoga na 
        state.items.splice(index, 1 , action.payload);
      })

  },
});

export const { } = cartSlice.actions;




export default cartSlice.reducer;