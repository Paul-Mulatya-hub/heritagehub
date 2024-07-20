/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;-->
*/

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import BuyerPage from './pages/BuyerPage';
import LearningPage from './pages/LearningPage';
import CommunityPage from './pages/CommunityPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthContext } from './context/AuthContext';
import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
      <Route
          {...rest}
          render={props =>
              user ? <Component {...props} /> : <Redirect to="/login" />
          }
      />
  );
};

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/store" component={StorePage} />
                <Route path="/product/:id" component={ProductDetailsPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/reset-password" component={ResetPasswordPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/contact-us" component={ContactUsPage} />
                <PrivateRoute path="/buyer" component={BuyerPage} />
                <Route path="/learning" component={LearningPage} />
                <Route path="/community" component={CommunityPage} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
