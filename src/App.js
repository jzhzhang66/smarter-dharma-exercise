import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import SideNav from './sideNav';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import India from './india';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <SideNav />
        <Switch>
          <Route path="/India" component={India} />
        </Switch>
      </div>
    )
  }
}

export default App;
