import { Route, Switch } from 'react-router-dom';
import './App.css';
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
