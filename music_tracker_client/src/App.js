import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Route
        path='/'
        render={(routerProps) => <Home match={routerProps.match} /> }
      />
    </BrowserRouter>
  );
}

export default App;
