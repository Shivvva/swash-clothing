import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
// switch used to match the path
// route used to access pages by specific URl
//exact checks exact match of path
function App() {
  return (
    <div >
      <Header />
      <Switch>
      <Route exact path = '/' component= {HomePage}/>
      <Route exact path = '/shop' component= {ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
