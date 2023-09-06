import { createSlice } from "@reduxjs/toolkit";

export const vendorSlice = createSlice({
    name:"userDetails",
    initialState:{
        value:{
            isUserAuth:false

        },
    },
    reducers:{
        vlogin:(state,action)=>{
            state.value={...action.payload,isUserAuth:true}
        },
        vlogout:(state)=>{
            state.value={
                isUserAuth:false,
                user:null
            };
        },
    },
});

export const{vlogin,vlogout} =vendorSlice.actions
export default vendorSlice.reducer;
