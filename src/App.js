import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () =>(
  <div>
    <h1>Hats Page</h1>
  </div>
)
// switch used to match the path
// route used to access pages by specific URl
//exact checks exact match of path
function App() {
  return (
    <div >
      <Switch>
      <Route exact path = '/' component= {HomePage}/>
      <Route exact path = '/hats' component= {HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
