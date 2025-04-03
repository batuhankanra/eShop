import { useDispatch,useSelector,useStore } from "react-redux";
import type { RootState,AppDispatch,AppStore } from ".";

export const appDispatch=useDispatch.withTypes<AppDispatch>()
export const appSelector=useSelector.withTypes<RootState>()
export const appStore=useStore.withTypes<AppStore>()