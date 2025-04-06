import { TypedUseSelectorHook, useDispatch,useSelector,useStore } from "react-redux";
import type { RootState,AppDispatch,AppStore } from ".";

export const appDispatch=()=>useDispatch<AppDispatch>()

export const appSelector:TypedUseSelectorHook<RootState>=useSelector

export const appStore=()=>useStore<AppStore>()