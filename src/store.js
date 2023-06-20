import {applyMiddleware, configureStore } from "redux"
// import {createStore} from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk]

const store = configureStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )


export default store

