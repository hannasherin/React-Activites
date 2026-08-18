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

export const deleteTask=createAsyncThunk(
    'tasks/deleteTask',
    async(id,{rejectWithValue})=>{
        try {
            await api.delete(`/tasks/${id}`)
            return id
        } catch (error) {
            return rejectWithValue('not sk found')
        }

    }
)

//post 
export const addToTask=createAsyncThunk(
    'tasks/addToTask',
    async(formData,{rejectWithValue})=>{
        try {
            const response=await api.post('/tasks',formData)
            return response.data
        } catch (error) {
            return rejectWithValue({error:'No Task Created'})
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


        // ===========delete Task ============
        .addCase(deleteTask.pending,(state,action)=>{
               state.isloading=true
        })

        .addCase(deleteTask.fulfilled,(state,action)=>{
            state.isloading=false
            state.tasks=state.tasks.filter((task)=>task.id !== action.payload)
        })

        .addCase(deleteTask.rejected,(state,action)=>{
            state.isloading=false
            state.error=action.payload
        })


        // ==============Task Created ===========

        .addCase(addToTask.pending,(state,action)=>{
            state.isloading=true
        })

         .addCase(addToTask.fulfilled,(state,action)=>{
            state.isloading=false
            state.tasks.push(action.payload)
        })

         .addCase(addToTask.rejected,(state,action)=>{
            state.isloading=false
            state.error=action.payload.error
        })
    }
})

export default  taskSlice.reducer