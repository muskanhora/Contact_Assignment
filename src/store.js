import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from './components/ContactSlice';

const store=configureStore({
    reducer:{
        contact:ContactSlice
    }
})

export default store;