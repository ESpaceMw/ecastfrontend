import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import OnBoarding from './pages/OnBoarding';

function App() {
  return (
    <div>
      <Switch>
          <Route path="/" exact> 
            <LandingPage/>
          </Route>
          <Route path="/get-started"> 
            <OnBoarding/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
