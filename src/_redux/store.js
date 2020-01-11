import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "./middleware";
import { getUser } from '../_reducers/users'

//Get All reducers available
//Global State come from here
const rootReducers = combineReducers({
    getUser
});
  
//Setup Store Redux
const store = createStore(rootReducers, applyMiddleware(promise, logger));
  
export default store;