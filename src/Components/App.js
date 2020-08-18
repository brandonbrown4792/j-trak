import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Contacts from './Contacts';
import Jobs from './Jobs';
import '../Stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/jobs' component={Jobs} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
