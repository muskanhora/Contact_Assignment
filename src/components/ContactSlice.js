import { createSlice } from "@reduxjs/toolkit";

const contactSlice=createSlice({
    name:'contact',
    initialState:{
        items:[]
    },
    reducers:{
        addContact:(state,action)=>{
            state.items.push(action.payload)
        }
    }
})

export const{addContact}=contactSlice.actions;

export default contactSlice.reducer;
