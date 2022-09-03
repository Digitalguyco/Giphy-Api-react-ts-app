import { Dispatch } from "redux"
import { Action } from "../actions/index"

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

export const adddata = (data: {}) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'AddData',
            payload: data
        })
        // console.log(data)
    }
    
}


