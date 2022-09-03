import { Dispatch } from "redux"
import { Action } from "../actions/index"

// All the action creators are here

export const loading = () => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: "Loading"
    })
}
export const notloading = () => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: "NotLoading"
    })
}

export const error = () => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: "Error"
    })
}
export const noterror = () => {
    return (dispatch: Dispatch<Action>) => dispatch({
        type: "Noterror"
    })
}

// add data to the store, receives payload with type of {}
export const adddata = (data: {}) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'AddData',
            payload: data
        })
        // console.log(data)
    }
    
}


