import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/CounterSlice";
import PostReducer from "../features/posts/PostSlice";

const store = configureStore({
    reducer : {
        counter : CounterReducer,
        posts : PostReducer,
    }
})

export default store;