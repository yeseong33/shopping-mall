/* eslint-disable */

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";


let watched = createSlice({
    name: 'watched',
    initialState: [],
})


let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12]
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 2, name: 'Grey Yordan', count: 1}
    ],
    reducers : {
        changeCount(state, action) {
            let idx = state.findIndex((a) => {return a.id === action.payload})
            state[idx].count++
        },
        addItem(state, action) {
            state.push(action.payload)
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

