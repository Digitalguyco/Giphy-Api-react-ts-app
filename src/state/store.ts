import { applyMiddleware, legacy_createStore as createStore  } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducers";

// create store using legacy_createStore, apply thunk middleware, better to use configureStore!
export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk));