import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface IuserProfile{
    firstname : string,
    lastname: string,
    email : string,
    country : string
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


export const addUserInfo = createAsyncThunk('user/addUserInfo', async (data : any, thunkAPI) => 
{
    const {rejectWithValue} = thunkAPI;
    try
    {
        const res = await axios.post("http://localhost:3000/user/addInfo", data, {
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        console.log("response : ", res);
        return (res.data)
    }
    catch(error  : any)
    {
        return (rejectWithValue(error.response.data))
    }
})

export const getUserInfo = createAsyncThunk('user/getUserInfo', async (_, thunkAPI) => 
{
    console.log("herehere");
    const {rejectWithValue} = thunkAPI;
    try
    {
        const res = await axios.get("http://localhost:3000/user/getInfo", {
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

export const deleteUserInfo = createAsyncThunk('user/deleteuserinfo', async (data : any, thunkAPI) => 
{
    const {rejectWithValue} = thunkAPI;
    try
    {
        const res = await axios.delete("http://localhost:3000/user/deleteuser", {
            headers : {
                'Content-Type' : 'application/json',
            },
            params : {
                id : data,
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
        .addCase(addUserInfo.pending, (state, action) => {
            state.isloading = true
            console.log(action)
        })
        .addCase(addUserInfo.fulfilled, (state, action) => {
            state.isloading = false
            console.log(action)
        })
        .addCase(addUserInfo.rejected, (state, action) => {
            state.isloading = true
            console.log(action)
        })
        .addCase(getUserInfo.pending, (state, action) => {
            state.isloading = true
            console.log(action)
        })
        .addCase(getUserInfo.fulfilled, (state, action) => {
            state.isloading = false
            state.user  = action.payload
        })
        .addCase(getUserInfo.rejected, (state, action) => {
            state.isloading = true
            console.log(action)
        })
        .addCase(deleteUserInfo.pending, (state, action) => {
            state.isloading = true
            console.log(action)
        })
        .addCase(deleteUserInfo.fulfilled, (state, action) => {
            state.isloading = false
            state.user  = action.payload
        })
        .addCase(deleteUserInfo.rejected, (state, action) => {
            state.isloading = true
            console.log(action)
        })
    }
})


export default userInfo.reducer