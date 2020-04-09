import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import MasterProvider from './utils/MasterProvider';
import './style.css';

function App() {
  return (
    <div className="ff-zilla">
      <Router>
        <MasterProvider>
          <NavBar />
          <Route exact path={['/', '/covid-19']} component={Home}></Route>
        </MasterProvider>
      </Router>
    </div>
  );
}

export default App;
