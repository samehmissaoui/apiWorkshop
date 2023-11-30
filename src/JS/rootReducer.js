import { combineReducers } from "redux";

import userReducer from "./reducers/userRducer";

const rootReducer= combineReducers({
    users: userReducer
})

export default rootReducer 