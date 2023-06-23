import React, {Suspense, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Alerts from  './Alerts'
import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import {loaduser} from './actions/auth'
import { Tasks, CreateReview, Nav, Login, Register, VerifyToken } from './components'
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import './bootstrap.min.css'

const alertOptions = {
  timeout: 4000,
  position: 'top right',
  offset:'70px',
  containerStyle :{
      fontSize:'75%',
      marginLeft:'auto',
      marginRight:'auto',
      zIndex:'500'
  }
};

function App() {

  useEffect(()=>{
    store.dispatch(loaduser())
  },[])

  return (
    <Provider store = {store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
              <Nav/>
              <Alerts/>
                <>
                  <Suspense fallback={<div>Loading Up...</div>}>
                    <Routes>
                      <Route exact path = '/' element = {<Login/>}/>
                      <Route exact path = '/register' element = {<Register/>}/>
                      <Route exact path = '/tasks' element = {<Tasks/>}/>
                      <Route exact path = '/create-review' element = {<CreateReview/>}/>
                      <Route exact path = '/verifytoken' element = {<VerifyToken/>}/>
                    </Routes>
                  </Suspense>
                </>
        </AlertProvider>
    </Provider>
  );
}

export default App;
