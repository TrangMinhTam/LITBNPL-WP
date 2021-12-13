import React from 'react';

import './App.css';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/DashboardScreen';

import {BrowserRouter as Router ,Redirect ,Switch, Route} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const Token = localStorage.getItem("accessName")

  let routes;

  if(Token){
    routes = (
      <Switch>
          <Route path="/" exact component={Dashboard} />
          
      </Switch>
    );
  }else {
    routes = (
      <Switch>
          
          <Route path="/" component={LoginScreen} />
          
          <Route path="/dashboard" render={() =>{
            return Token ? {Dashboard} : <Redirect to="/"/>
          }}  /> 
      </Switch>
    )
  }
  return (
    <Router>
    {Token ?
    <div className="App">
      <Header />  
        {routes}
      </div>
      :
      <div className="App">      
        {routes}
      </div>
    }
      
      
    </Router>
  );
}

export default App;
