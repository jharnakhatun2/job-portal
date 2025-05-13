import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



//fetch job data
export const fetchJobData = createAsyncThunk('job/fetchJobData', async()=>{
const res = await axios.get('data.json');
return res.data
})

//job slice
export const jobSlice = createSlice({
    name: 'job',
    initialState: {
        job: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder)=>{
        
        builder.addCase(fetchJobData.pending, (state)=>{
            state.isLoading = true;
        });

        builder.addCase(fetchJobData.fulfilled, (state,action)=>{
        state.job = action.payload,
        state.isLoading = false,
        state.error = null
        });

        builder.addCase(fetchJobData.rejected, (state,action)=>{
        state.job = [],
        state.isLoading = false,
        state.error = action.error.message
        })
    }
})
export default jobSlice.reducer;