import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    items: [],
}
export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>state.push(action.payload),
        removeItem:(state,action)=> state.filter((item)=>item.id!==action.payload),
    }
})

export default CartSlice.reducer;
export const {addItem,removeItem}=CartSlice.actions;
