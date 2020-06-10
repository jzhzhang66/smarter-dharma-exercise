import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import SideNav from './sideNav';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import India from './india';
import UnitedStates from './unitedStates';
import Italy from './italy';
import China from './china';
import Australia from './australia';

class App extends React.Component {

  render() {
    return (
      <div class="main-div">
        <Header />
        <SideNav />
        <Switch>
          <Route path="/India" component={India} />
          <Route path="/UnitedStates" component={UnitedStates} />
          <Route path="/Australia" component={Australia} />
          <Route path="/China" component={China} />
          <Route path="/Italy" component={Italy} />
        </Switch>
      </div>
    )
  }
}

export default App;
