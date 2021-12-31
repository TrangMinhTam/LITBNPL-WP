import React,{FC} from 'react';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/DashboardScreen';
import ChangePasswordAdmin from './screens/ChangePasswordAdminScreen';
import Cong_cu_tinh_khoan_vay from './screens/Cong_cu_tinh_khoan_vay';
import Cong_cu_goi_y_muc_vay from './screens/Cong_cu_tinh_goi_y_muc_vay';
import Cong_cu_tinh_gia_tham_dinh from './screens/Cong_cu_tinh_gia_tham_dinh';
import Da_tat_toan from './screens/Da_tat_toan';
import Cho_duyet from './screens/Cho_duyet';
import Dang_tra from './screens/Dang_tra';
import Tre_hen from './screens/Tre_hen';
import Chi_phi_muc_song from './screens/Chi_phi_muc_song';
import Chi_so_kha_nang_tra_no from './screens/Chi_so_kha_nang_tra_no';


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
          <Route path="/cong-cu-tinh-goi-y-muc-vay" component={Cong_cu_goi_y_muc_vay} />
          <Route path="/cong-cu-tinh-gia-tham-dinh" component={Cong_cu_tinh_gia_tham_dinh} />
          <Route path="/da-tat-toan" component={Da_tat_toan} />
          <Route path="/cho-duyet" component={Cho_duyet} />
          <Route path="/dang-tra" component={Dang_tra} />
          <Route path="/tre-hen" component={Tre_hen} />
          <Route path="/chi-phi-muc-song" component={Chi_phi_muc_song} />
          <Route path="/chi-so-kha-nang-tra-no" component={Chi_so_kha_nang_tra_no} />
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
