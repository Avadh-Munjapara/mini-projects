import { configureStore } from "@reduxjs/toolkit";
import cartsliceReducer from "./slices/CartSlice";

const store=configureStore({
    reducer:{
        cart: cartsliceReducer,
    }
})

export default store;