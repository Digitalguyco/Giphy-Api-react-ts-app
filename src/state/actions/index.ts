//  Action types, this is simple and generic for all reducers to use
interface GenericAction {
    type:string,
    payload?: any,
}



export type Action = GenericAction;