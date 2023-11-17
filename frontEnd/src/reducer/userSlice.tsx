import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface IuserProfile{
    firstname : string,
    lastname: string,
    username : string,
    email : string,
    image? : string
}
interface Iprofile {
    user : IuserProfile | null,
    isloading : boolean,
    error : string | null,
}

const initialState  : Iprofile= {
    user : null,
    isloading : false,
    error : null
}



const addUserInfo = createAsyncThunk('user/addUserInfo', async (data : any, thunkAPI) => 
{
    const {rejectWithValue} = thunkAPI;
    try
    {
        const res = await axios.post("http://localhost:3000/user/addInfo", data, {
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        return (res.data)
    }
    catch(error  : any)
    {
        return (rejectWithValue(error.response.data))
    }
})



const userInfo = createSlice({
    name : 'user',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
    builder 
        .addCase(addUserInfo.pending, (state) => {
            state.isloading = true
        })
        .addCase(addUserInfo.fulfilled, (state, action) => {
            state.isloading = false
            console.log(action)
        })
        .addCase(addUserInfo.rejected, (state, action) => {
            state.isloading = true
            console.log(action)
        })
            
    }
})


export default userInfo.reducer