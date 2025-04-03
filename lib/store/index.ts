import { configureStore } from '@reduxjs/toolkit'

import userRedux from './features/user'

export const makeStore= ()=>{
    return configureStore({
        reducer:{
            user:userRedux
        }
    })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']