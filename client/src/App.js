import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import MasterProvider from './utils/MasterProvider';
import './style.css';

function App() {
  return (
    <div className="ff-zilla">
      <Router>
        <MasterProvider>
          <Route exact path={['/']} component={Home}></Route>
        </MasterProvider>
      </Router>
    </div>
  );
}

export default App;
