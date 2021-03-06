import { Redirect, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import './App.css';
import LandingPageFooter from './components/layouts/LandingPageFooter';
import LandingPageHeader from './components/layouts/LandingPageHeader';
import { ThemeProvider } from './context/themeContext';
import Callback from './pages/auth/Callback';
import Category from './pages/auth/Category';
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ResetPassword from './pages/auth/ResetPassword';
import Channels from './pages/dashboard/analytics/Channels';
import Integrations from './pages/dashboard/analytics/Integrations';
import Statistics from './pages/dashboard/analytics/Statistics';
import Subscribers from './pages/dashboard/analytics/Subscribers';
import Alerts from './pages/dashboard/overview/Alerts';
import Bankie from './pages/dashboard/overview/fragments/Bankie';
import PopularEpisodes from './pages/dashboard/overview/fragments/PopularEpisodes';
import Reviews from './pages/dashboard/overview/fragments/Reviews';
import Inbox from './pages/dashboard/overview/Inbox';
import Overview from './pages/dashboard/overview/Overview';
import Contacts from './pages/dashboard/podcast/Contacts';
import Episodes from './pages/dashboard/podcast/Episodes';
import Events from './pages/dashboard/podcast/episodes/Events';
import NewEpisode from './pages/dashboard/podcast/episodes/NewEpisode.jsx';
import NewSeries from './pages/dashboard/podcast/episodes/NewSerie.jsx';
import Media from './pages/dashboard/podcast/Media';
import Settings from './pages/dashboard/user/Settings';
import UserInfo from './pages/dashboard/user/UserInfo.jsx';
import AboutUs from './pages/landing/AboutUs';
import Blog from './pages/landing/Blog';
import Download from './pages/landing/Download';
import HelpCenter from './pages/landing/Footer/Support/HelpCenter';
import Jobs from './pages/landing/Jobs';
import LandingPage from './pages/LandingPage';
import OnBoarding from './pages/OnBoarding';
import PageNotFound from './pages/PageNotFound';
import CookieService from './services/CookieService';

function App() {

  function isFirstTime(){
    if('first_time' in localStorage){
      return true
    }else{
      return false
    }
  }

  function isLoggedIn(){
    if(CookieService.get('access_token') !== undefined){
      return true
    }else{
      return false
    }
  }

  return (
    <div>
      <ThemeProvider initialTheme="light">
        <LastLocationProvider>
      <Switch>
          <Route path="/" exact render={() => (
            isFirstTime() ? ( 
            <>
              <LandingPageHeader />
                  <LandingPage />
              <LandingPageFooter />
            </>
            ) : (
              <Redirect to="/get-started"/>
            )
          )}>
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

          <Route path="/callback"> 
            <LandingPageHeader/>
              <Callback/>
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

          <Route path="/reset-password"> 
            <LandingPageHeader/>
              <ResetPassword/>
            <LandingPageFooter/>
          </Route>

          {/* Landing page footer routes */}

          <Route path="/faq"> 
            <LandingPageHeader/>
              <HelpCenter/>
            <LandingPageFooter/>
          </Route>

          {/* Dashboard -Authenticated- routes */}

          <Route path="/dashboard/overview" render={() => (
            isLoggedIn() ? (
              <Overview/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/popular-podcasts" render={() => (
            isLoggedIn() ? (
              <PopularEpisodes/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>
          
          <Route path="/dashboard/e-cast-bank" render={() => (
            isLoggedIn() ? (
              <Bankie/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/listeners-reviews" render={() => (
            isLoggedIn() ? (
              <Reviews/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/inbox" render={() => (
            isLoggedIn() ? (
              <Inbox/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/profile" render={() => (
            isLoggedIn() ? (
              <UserInfo/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}>
          </Route>

          <Route path="/dashboard/settings" render={() => (
            isLoggedIn() ? (
              <Settings/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}>
          </Route>

          <Route path="/dashboard/alerts" render={() => (
            isLoggedIn() ? (
              <Alerts/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/episodes" render={() => (
            isLoggedIn() ? (
              <Episodes/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/new-serie" render={() => (
            isLoggedIn() ? (
              <NewSeries/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/new-episode" render={() => (
            isLoggedIn() ? (
              <NewEpisode/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/media" render={() => (
            isLoggedIn() ? (
              <Media/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/contacts" render={() => (
            isLoggedIn() ? (
              <Contacts/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/events" render={() => (
            isLoggedIn() ? (
              <Events/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/integrations" render={() => (
            isLoggedIn() ? (
              <Integrations/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/statistics" render={() => (
            isLoggedIn() ? (
              <Statistics/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/channels" render={() => (
            isLoggedIn() ? (
              <Channels/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          <Route path="/dashboard/subscribers" render={() => (
            isLoggedIn() ? (
              <Subscribers/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

          {/* 404 Error route */}

          <Route>
            <PageNotFound/>
          </Route>

        </Switch>
        </LastLocationProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;
