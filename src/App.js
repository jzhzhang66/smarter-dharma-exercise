import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import SideNav from './sideNav';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <SideNav />
      </div>
    )
  }
}

export default App;
