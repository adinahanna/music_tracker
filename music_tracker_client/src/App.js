import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import EditForm from './components/EditForm/EditForm';

import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Route
	      path='/record/:id/edit'
	      render={() => <EditForm /> }     
      />
      <Route
        path='/' exact
        render={(routerProps) => <Home match={routerProps.match} /> }
      />
    </BrowserRouter>
  );
}

export default App;
