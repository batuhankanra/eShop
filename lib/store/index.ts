import { configureStore } from '@reduxjs/toolkit'

import userRedux from './features/user'
import modal from './features/modal'

export const makeStore= ()=>{
    return configureStore({
        reducer:{
            user:userRedux,
            modal
        }
    })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']