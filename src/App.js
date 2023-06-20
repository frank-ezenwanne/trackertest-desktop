import React, {Suspense} from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { Tasks, CreateReview } from './components'

function App() {
  return (
    <div className="App">
        <Nav/>
          <>
            <Suspense fallback={<div>Loading Up...</div>}>
              <Switch>
                <Route exact path = '/' component = {Login}/>
                <Route exact path = '/tasks' component = {Tasks}/>
                <Route exact path = '/create-review' component = {CreateReview}/>
              </Switch>
            </Suspense>
          </>
    </div>
  );
}

export default App;
