import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
    name: 'Counter',
    initialState : { count : 0 },
    reducer : {
        increment: state => {
            state.count = state.count + 1 ;
        },
        decrement: state => {
            state.count = state.count - 1 ;
        },
        reset: state => {
            state.count = 0 ;
        },
        incrementByFive: (state, action) => {
            state.count = state.count + action.payload ;
        }
    }
})

export const {increment, decrement, reset, incrementByFive} = counterReducer.actions
export default counterReducer.reducer;