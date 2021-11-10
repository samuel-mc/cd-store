import { Switch, Route, HashRouter } from 'react-router-dom';

import React from 'react'
import Header from './components/Header'
import Home from './containers/Home';
import Catalog from './containers/Catalog';
import Cart from './containers/Cart';
import Seller from './containers/Seller';
import MenuArtists from './components/MenuArtists';
import MenuAlbums from './components/MenuAlbums';

import AppContext from './context/AppContex';
import useInitialState  from './hooks/useInitialState';

import './App.css';

function App() {

  const initialState = useInitialState();
  const { cart, genres } = initialState;

  return (
    <div className="app">
      <AppContext.Provider value={initialState}>
        <HashRouter>
          <Header cart={cart} genres={genres} />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/Catalog" component={ Catalog }/>
            <Route exact path="/cart" component={ Cart }/>
            <Route exact path="/seller" component={ Seller } />
            <Route exact path="/seller/artists" component={ MenuArtists }/>
            <Route exact path="/seller/albums" component={ MenuAlbums }/>
          </Switch>
        </HashRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
