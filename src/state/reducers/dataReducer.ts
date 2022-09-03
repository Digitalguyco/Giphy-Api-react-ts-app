import { Action } from "../actions"



const initialState: {}[] = [] ;

const dataReducer = (state = initialState, action: Action) => {
    switch (action.type){

       case "AddData":
        return state = [...action.payload];
        default:
        return state;
    }
}

export default dataReducer;