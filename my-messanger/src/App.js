import React from 'react'
import './App.css'
import SignUp from './component/authentication/signup'
import Messanger from './component/messanger/index'
import Login from './component/authentication/login'
import Profile from './component/messanger/profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {createStore,applyMiddleware} from 'redux'
import List from '../src/reducer/lists'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(List,applyMiddleware(thunk))

function App () {
  return (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/messanger/" component={Messanger} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/profile/' component={Profile} />
      </Switch>
    </Router>
  </Provider>
  )
}

export default App
