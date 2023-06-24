import { combineReducers } from "redux";
import auth from "./auth"
import errors from './errors'
import tasks from './tasks'


export default combineReducers({
    auth,
    errors,
    tasks
})