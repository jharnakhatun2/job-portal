import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/counter/CounterSlice";
import PostReducer from "../features/posts/PostSlice";
import jobReducer from "../features/job/jobSlice";

const store = configureStore({
    reducer : {
        counter : CounterReducer,
        posts : PostReducer,
        job : jobReducer
    }
})

export default store;