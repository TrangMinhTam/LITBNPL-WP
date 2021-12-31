import React,{FC} from 'react';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/DashboardScreen';
import ChangePasswordAdmin from './screens/ChangePasswordAdminScreen';
import Cong_cu_tinh_khoan_vay from './screens/Cong-cu-tinh-khoan-vay';

import {BrowserRouter as Router ,Redirect ,Switch, Route} from 'react-router-dom';

require('dotenv').config();



const App:FC = ()=> {
  const Token = localStorage.getItem("accessName")

  console.log("Token: ",Token);

  let routes;

  if(Token){
    routes = (
      <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/change-password" component={ChangePasswordAdmin} />
          <Route path="/cong-cu-tinh-khoan-vay" component={Cong_cu_tinh_khoan_vay} />
      </Switch>
    );
  }else {
    routes = (
      <Switch>
          
          <Route path="/" component={LoginScreen} />
          <Route path="/cong-cu-tinh-khoan-vay" component={Cong_cu_tinh_khoan_vay} />
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
      {/* <Header /> */}
      <Sidebar />
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
