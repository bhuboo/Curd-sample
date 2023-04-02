import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    Users:[],
    userList:[],
    status:null,
    loading:false,
    Regtype:"",
}

export const userFetch = createAsyncThunk(
    "user/userFetch",
     async ()=>{
            const response = await axios.get("http://localhost:8000/Showuser")
            return response.data.UserDetail;
    }
)

const productsSlice = createSlice({
    name:'Users',
    initialState,
    reducers:{
        addToVIEW: (state, action) => {
                state.userList =[action.payload]
       },
       Updateapi:(state,action) => {
          state.Regtype="Update"
       }
      },
    extraReducers:{
        [userFetch.pending]:(state,action)=>{
            state.status ="pending"
            state.loading =true
        },
        [userFetch.fulfilled]:(state,action)=>{
            state.status ="Success"
            state.Users = action.payload
            state.loading =false
        },
        [userFetch.rejected]:(state,action)=>{
            state.status = "rejected";
            state.loading =false
        }
    }
})

export const{addToVIEW,Updateapi} = productsSlice.actions;


export default productsSlice.reducer;