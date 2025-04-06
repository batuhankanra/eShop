import { user } from "@/typeScript";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";



const initialState:user ={
    name:''  ,
    email:'',
    id:''
}
export const userRedux=createSlice({
    name:'userRedux',
    initialState,
    reducers:{
        setUser:(state,aciton:PayloadAction<user>)=>{
            state.name=aciton.payload.name
            state.email=aciton.payload.email
            state.id=aciton.payload.id
        },
        removeUser:(state)=>{
            state.email=''
            state.name=''
            state.id=''
        }

    }
})

export const {setUser,removeUser} = userRedux.actions

export default userRedux.reducer