import { combineReducers, legacy_createStore } from "redux";
import studentReducer from "./Redux/reducer/studentReducer";
import cartReducer from "./Redux/reducer/cartReducer";

const reducers=combineReducers({
    cart:cartReducer,
    student:studentReducer
})
const store=legacy_createStore(reducers)
export default store