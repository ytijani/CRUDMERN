import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducer/userSlice";



const store = configureStore({
    reducer : {
        user : userSlice
    }
})


export default store;