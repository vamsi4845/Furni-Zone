import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"
import cartReducer from "./features/cart/cartSlice";
import compareReducer from "./features/compare/compareSlice";
export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        userState:userReducer,
        compareState: compareReducer,
    
    }
})