import { createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit";
import api from "../api/axios";

const initialState={
    tasks:[],
    isloading:false,
    error:'',
}

export const getTaskFromServer=createAsyncThunk(
    'tasks/getTaskFromServer',
    async(_,{rejectWithValue})=>{

        try {
            
          const response=await api.get('/tasks')
          return response.data

        } catch (error) {
            
            return rejectWithValue('No Task Found')
        }

    }
)

const taskSlice=createSlice({
    name:'tasks',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        //pending
        .addCase(getTaskFromServer.pending,(state,action)=>{
            state.isloading=true;
            state.error='';
        })
        //success
        .addCase(getTaskFromServer.fulfilled,(state,action)=>{
            state.isloading=false
            state.error=''
            state.tasks=action.payload
        })
        //error
        .addCase(getTaskFromServer.rejected,(state,action)=>{
             state.isloading=false
             state.error=action.payload
             state.tasks=[]
        })

    }
})

export default  taskSlice.reducer