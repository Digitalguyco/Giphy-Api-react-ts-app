import { Action } from "../actions"

// errorReducer manage error state

const initialState: boolean = false ;

const errorReducer = (state: boolean = initialState, action: Action): boolean => {
    switch (action.type){
       case "Error":
        return state = true;
        case "Noterror":
            return state = false;
        default:
            return state;
    }
}

export default errorReducer;