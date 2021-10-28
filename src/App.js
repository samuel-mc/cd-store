import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React from 'react'
import Header from './components/Header'
import Home from './containers/Home';
import Cart from './containers/Cart'

import AppContext from './context/AppContex';
import useInitialState  from './hooks/useInitialState';

import './App.css';

function App() {

  const initialState = useInitialState();
  const { cart } = initialState;

  return (
    <div className="app">
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Header cart={cart} />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/cart" component={ Cart }/>
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
