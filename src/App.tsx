import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPageFooter from './components/layouts/LandingPageFooter';
import LandingPageHeader from './components/layouts/LandingPageHeader';
import LandingPage from './pages/LandingPage';
import OnBoarding from './pages/OnBoarding';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/get-started" exact> 
            <OnBoarding/>
          </Route>
          
          <Route path="/"> 
            <LandingPageHeader/>
            <LandingPage/>
            <LandingPageFooter/>
          </Route>
          
        </Switch>
    </div>
  );
}

export default App;
