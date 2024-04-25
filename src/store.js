/* eslint-disable */

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";




let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12]
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 1, name: 'Grey Yordan', count: 1}
    ],
    reducers : {
        changeCount(state, action) {
            state[action.payload[0]].count += action.payload[1]
        },
        addItem(state, action) {
            Array.prototype.push.apply(state, action.payload);
        }
    }
})

export let { changeCount, addItem } = cart.actions


export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer,
    }
})

