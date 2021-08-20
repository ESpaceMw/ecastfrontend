import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPageFooter from './components/layouts/LandingPageFooter';
import LandingPageHeader from './components/layouts/LandingPageHeader';
import { ThemeProvider } from './context/themeContext';
import Category from './pages/auth/Category';
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Channels from './pages/dashboard/analytics/Channels';
import Integrations from './pages/dashboard/analytics/Integrations';
import Statistics from './pages/dashboard/analytics/Statistics';
import Subscribers from './pages/dashboard/analytics/Subscribers';
import Alerts from './pages/dashboard/overview/Alerts';
import Inbox from './pages/dashboard/overview/Inbox';
import Overview from './pages/dashboard/overview/Overview';
import Contacts from './pages/dashboard/podcast/Contacts';
import Episodes from './pages/dashboard/podcast/Episodes';
import Events from './pages/dashboard/podcast/episodes/Events';
import NewEpisode from './pages/dashboard/podcast/episodes/NewEpisode';
import Media from './pages/dashboard/podcast/Media';
import UserInfo from './pages/dashboard/user/UserInfo';
import AboutUs from './pages/landing/AboutUs';
import Blog from './pages/landing/Blog';
import Download from './pages/landing/Download';
import HelpCenter from './pages/landing/Footer/Support/HelpCenter';
import Jobs from './pages/landing/Jobs';
import LandingPage from './pages/LandingPage';
import OnBoarding from './pages/OnBoarding';
import PageNotFound from './pages/PageNotFound';

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

          {/* Landing page routes */}

          <Route path="/download">
            <LandingPageHeader/>
              <Download/>
            <LandingPageFooter/>
          </Route>

          <Route path="/jobs"> 
            <LandingPageHeader/>
              <Jobs/>
            <LandingPageFooter/>
          </Route>

          <Route path="/blog">
            <LandingPageHeader/>
              <Blog/>
            <LandingPageFooter/>
          </Route>

          <Route path="/about-us">
            <LandingPageHeader/>
              <AboutUs/>
            <LandingPageFooter/>
          </Route>

          {/* Authentication routes */}

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

          <Route path="/choose-category"> 
            <LandingPageHeader/>
              <Category/>
            <LandingPageFooter/>
          </Route>

          <Route path="/forgot-password"> 
            <LandingPageHeader/>
              <ForgotPassword/>
            <LandingPageFooter/>
          </Route>

          {/* Landing page footer routes */}

          <Route path="/faq"> 
            <LandingPageHeader/>
              <HelpCenter/>
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

          <Route path="/dashboard/statistics"> 
            <Statistics/>
          </Route>

          <Route path="/dashboard/channels"> 
            <Channels/>
          </Route>

          <Route path="/dashboard/subscribers"> 
            <Subscribers/>
          </Route>

          {/* 404 Error route */}

          <Route>
            <PageNotFound/>
          </Route>

        </Switch>
        </ThemeProvider>
    </div>
  );
}

export default App;
