import React from 'react';
import { Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import MasterProvider from './utils/MasterProvider';
import history from './components/history';
import './style.css';

function App() {
  return (
    <div className="ff-zilla">
      <Router history={history}>
        <MasterProvider>
          <NavBar />
          <Route path={['/', '/covid-19']} component={Home}></Route>
        </MasterProvider>
      </Router>
    </div>
  );
}

export default App;
