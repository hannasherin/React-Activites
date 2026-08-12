import { createSlice } from "@reduxjs/toolkit";
const initialState={
    users:[],
}

export const userSlice=createSlice({
    name:'users',
    initialState:initialState,
    reducers:{
       
            setUser:(state,action)=>{
                state.users=[...state.users,action.payload]
            },
            deleteUser:(state,action)=>{
               state.users=state.users.filter((item,index)=>index !== action.payload)
            }
        
    }
})
export const {setUser,deleteUser}=userSlice.actions;
export default userSlice.reducer;