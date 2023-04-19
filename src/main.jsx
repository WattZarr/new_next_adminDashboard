import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initState = {
  token : "empty",
  email : " "
}

const loginReducer = (state = initState,action) => {
  if(action.type == "LOGOUT"){
    state.token = "empty"
  }
  if(action.type == "SET_TOKEN"){
    state.token = Date.now()+"_"+ Math.random()
    state.email = initState.email
  }
  if(action.type == "SET_EMAIL"){
    state.email = action.email;
  }
  return state
}

const store = createStore(loginReducer);



ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
      <Router>
        <App /> 
      </Router>
      </Provider>
)
