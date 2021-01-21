import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { useContext } from 'react';
import './App.css';
import Home from './comps/home/Home';
import About from './comps/about/About';
import Userlist from './comps/user/user-list/Userlist';
// import System from './comps/system/System';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/user/list' component={Userlist} />
        <Route path='/about' component={About} />
      </Switch>
    </main>
  );
}

export default App;
