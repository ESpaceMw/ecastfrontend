import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPageFooter from './components/layouts/LandingPageFooter';
import LandingPageHeader from './components/layouts/LandingPageHeader';
import { ThemeProvider } from './context/themeContext';
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Channels from './pages/dashboard/analytics/Channels';
import Integrations from './pages/dashboard/analytics/Integrations';
import Alerts from './pages/dashboard/overview/Alerts';
import Inbox from './pages/dashboard/overview/Inbox';
import Overview from './pages/dashboard/overview/Overview';
import Contacts from './pages/dashboard/podcast/Contacts';
import Episodes from './pages/dashboard/podcast/Episodes';
import Events from './pages/dashboard/podcast/episodes/Events';
import NewEpisode from './pages/dashboard/podcast/episodes/NewEpisode';
import Media from './pages/dashboard/podcast/Media';
import UserInfo from './pages/dashboard/user/UserInfo';
import LandingPage from './pages/LandingPage';
import OnBoarding from './pages/OnBoarding';

function App() {
  return (
    <div>
      <ThemeProvider initialTheme="light">
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

          <Route path="/dashboard/inbox"> 
            <Inbox/>
          </Route>

          <Route path="/dashboard/profile"> 
            <UserInfo/>
          </Route>

          <Route path="/dashboard/alerts"> 
            <Alerts/>
          </Route>

          <Route path="/dashboard/episodes"> 
            <Episodes/>
          </Route>

          <Route path="/dashboard/new-episode"> 
            <NewEpisode/>
          </Route>

          <Route path="/dashboard/media"> 
            <Media/>
          </Route>

          <Route path="/dashboard/contacts"> 
            <Contacts/>
          </Route>

          <Route path="/dashboard/events"> 
            <Events/>
          </Route>

          <Route path="/dashboard/integrations"> 
            <Integrations/>
          </Route>

          <Route path="/dashboard/channels"> 
            <Channels/>
          </Route>

        </Switch>
        </ThemeProvider>
    </div>
  );
}

export default App;
