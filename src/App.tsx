import { Route, Switch } from 'react-router-dom';
import './App.css';
import DashboardMain from './components/layouts/DashboardMain';
import LandingPageFooter from './components/layouts/LandingPageFooter';
import LandingPageHeader from './components/layouts/LandingPageHeader';
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Overview from './pages/dashboard/overview/Overview.jsx';
import LandingPage from './pages/LandingPage';
import OnBoarding from './pages/OnBoarding';

function App() {
  return (
    <div>
      <Switch>

          <Route path="/" exact> 
            <LandingPageHeader/>
            <LandingPage/>
            <LandingPageFooter/>
          </Route>

          <Route path="/get-started"> 
            <OnBoarding/>
          </Route>

          <Route path="/sign-in"> 
            <LandingPageHeader/>
            <Login/>
            <LandingPageFooter/>
          </Route>

          <Route path="/sign-up"> 
            <LandingPageHeader/>
            <Register/>
            <LandingPageFooter/>
          </Route>

          <Route path="/forgot-password"> 
            <LandingPageHeader/>
            <ForgotPassword/>
            <LandingPageFooter/>
          </Route>

          {/* Dashboard routes */}

          <Route path="/dashboard/overview"> 
            <Overview/>
          </Route>

        </Switch>
    </div>
  );
}

export default App;
