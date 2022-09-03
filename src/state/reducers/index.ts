import { combineReducers } from "redux"
import loadingReducer from "./loadingReducer"
import errorReducer from "./errorReducer"
import dataReducer from "./dataReducer"

const reducers = combineReducers({
    loading: loadingReducer,
    error: errorReducer,
    data: dataReducer,


})

export default reducers

export type RootState = ReturnType<typeof reducers>