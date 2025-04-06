import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalProps{
    modal?:string
}

const initialState:ModalProps={
    modal:''
}
const modal=createSlice({
    name:'modal',
    initialState,
    reducers:{
        setModal:(state,action:PayloadAction<string>)=>{
            state.modal=action.payload
        },
        removemodal:(state)=>{
            state.modal=''
        }

    }
})


export const {setModal,removemodal}=modal.actions
export default modal.reducer