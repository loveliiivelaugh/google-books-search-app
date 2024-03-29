import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import SavePage from './pages/SavedPage';
import './App.css';

function App() {
  return (
    <Router>

      <Navbar />

      <Switch>

        <Route exact path="/" component={SearchPage} />

        <Route exact path="/save" component={SavePage} />

      </Switch>
      
    </Router>
  );
}

export default App;
