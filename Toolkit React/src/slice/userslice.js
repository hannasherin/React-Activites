import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[],
}
export const  userSlice=createSlice({
    name:'users',
    initialState:initialState,
    reducers:{
        setUsers:()=>{
            setUser:(state,action)=>{
                state.users=[...state.users,action.payload]
            }
        }
    }
})
