import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name:"userDetails",
    initialState:{
        value:{
            isUserAuth:false

        },
    },
    reducers:{
        login:(state,action)=>{
            state.value={...action.payload,isUserAuth:true}
        },
        logout:(state)=>{
            state.value={
                isUserAuth:false
            };
        },
    },
});

export const{login,logout} =adminSlice.actions
export default adminSlice.reducer;
