import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './comps/home/Home';
import About from './comps/about/About';
// import Menu from './comps/menu/Menu';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </main>
  );
}

export default App;
