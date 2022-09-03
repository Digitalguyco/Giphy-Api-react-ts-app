import { Action } from "../actions"

// loadingReducer manage loading state

const initialState: boolean = false ;

const loadingReducer = (state: boolean = initialState, action: Action): boolean => {
    switch (action.type){
       case "Loading":
        return state = true;
        case "NotLoading":
            return state = false;
        default:
            return state;
    }
}

export default loadingReducer;