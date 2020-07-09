import React from 'react';
import Signup from './components/signup/signup' 
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './components/login/login'
import ThankYouLayout from './components/Layout/layout';
import CompanyList from './components/CompanyList/comapanyList'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/thankyou" component={ThankYouLayout}></Route>
          <Route path="/companyList" component={CompanyList}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
