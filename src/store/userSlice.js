import { createSlice } from "@reduxjs/toolkit"

// useState 과 같은 기능
let user = createSlice({
    name: 'usr',
    initialState: {name:'kim', age:20},
    reducers : {
        changeName(state) {
            state.name = 'park'
        },
        changeAge(state, action) {
            state.age += action.payload
        }
    }
})

export let { changeName, changeAge } = user.actions

export default user;